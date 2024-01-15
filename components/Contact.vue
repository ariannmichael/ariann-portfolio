<template>
 <b-row>
  <article class="hero">
   <div>
    <b-row>
     <h1>Hello There!</h1>
    </b-row>
    <b-row class="container">
     <b-col lg="10">
      <b-form @submit="onSubmit" v-if="show">
       <b-row>
        <b-col>
         <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input id="input-1" size="lg" v-model="form.name" placeholder="Your Name" required></b-form-input>
         </b-form-group>
        </b-col>
        
        <b-col>
         <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input id="input-2" size="lg" v-model="form.email" type="email" placeholder="Email Address" required></b-form-input>
         </b-form-group>
        </b-col>
       </b-row>
       <b-row>
        <b-col>
         <b-form-group id="input-group-3" label-for="input-3">
          <b-form-textarea
             id="input-3"
             placeholder="Your Message"
             size="lg"
             rows="8"
             max-rows="8"
             v-model="form.message"
           ></b-form-textarea>
         </b-form-group>
        </b-col>
       </b-row>
       <b-row class="send-btn-container">
        <button class="btn btn-outline-light send-btn">Send</button>
       </b-row>
      </b-form>
     </b-col>
     <b-col lg="2" class="icons">
      <a href="https://www.linkedin.com/in/ariann-michael/" target="_blank">
       <p class="h1 mb-2 icon"><b-icon icon="linkedin"></b-icon></p>
      </a>
      <a href="https://github.com/ariannmichael" target="_blank">
       <p class="h1 mb-2 icon"><b-icon icon="github"></b-icon></p>
      </a>
      <a href="https://t.me/ariannmichael" target="_blank">
       <p class="h1 mb-2 icon"><b-icon icon="telegram"></b-icon></p>
      </a>
     </b-col>
    </b-row>
   </div>
  </article>
 </b-row>
</template>

<script>
export default {
 data() {
  return {
   form: {
    email: '',
    name: '',
    message: ''
   },
   show: true
  }
 },
 methods: {
  onSubmit(event) {
   event.preventDefault()
   alert(JSON.stringify(this.form))
  }
 }
}
</script>

<style scoped>
.hero {
 text-align: center;
 display: flex;
 height: 40rem;
 align-items: center;
 padding-left: 4rem;
}

h1 {
 color: var(--color-text-soft);
 font-family: 'Montserrat';
 font-weight: 900;
 font-size: 11rem;
 line-height: 5.5rem;
 letter-spacing: 0.32rem;
 text-shadow: 8px 8px 0px rgba(0, 0, 0, 0.81);
 width: 100%;
 margin-top: 22rem;
}

.container {
 padding-top: 8rem;
}

:deep(.form-control) {
 border-radius: 0;
 background-color: var(--vt-c-black);
 color: var(--color-text-soft);
}

.send-btn-container {
 display: block;
 margin-top: 2rem;
}

.icons {
 padding-left: 10rem;
 color: var(--vt-c-white);
}

.icon {
 font-size: 3.5rem;
 padding-bottom: 3.2rem;
}

.send-btn {
  font-family: 'Montserrat';
  font-weight: 900;
  font-size: 2.6rem;
  width: 11rem;
  height: 5rem;
}
</style>