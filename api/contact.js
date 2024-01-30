import express from 'express'
import validator from 'validator'
import xssFilters from 'xss-filters'
import nodemailer from 'nodemailer'

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
 const attributes = ['name', 'email', 'message'];
 const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]));
 const someInvalid = sanitizedAttributes.some(r => !r);

 console.log(sanitizedAttributes);

 if (someInvalid) {
   return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' });
 }

 sendMail(...sanitizedAttributes);
  res.status(200).json({ 'message': 'Sent' });
});

const rejectFunctions = new Map([
 [ 'name', v => v.length < 4 ],
 [ 'email', v => !validator.isEmail(v) ],
 [ 'message', v => v.length < 10 ]
]);

const validateAndSanitize = (key, value) => {
 return rejectFunctions.has(key) && !rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value)
};

const sendMail = (name, email, message) => {
 const transporter = nodemailer.createTransport({
   sendmail: true,
   newline: 'unix',
   path: '/usr/sbin/sendmail'
 });
 transporter.sendMail({
   from: email,
   to: 'ariannmichael@gmail.com',
   subject: `${name} - New portfolio contact`,
   text: message
 });
};


export default {
  path: '/api/contact',
  handler: app
}
