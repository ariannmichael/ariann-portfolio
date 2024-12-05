exports.ids = [2];
exports.modules = {

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0e369393", content, true, context)
};

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_6200da8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_6200da8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_6200da8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_6200da8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_6200da8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero[data-v-6200da8f]{text-align:center;display:flex;height:100vh;align-items:center;padding-left:4rem}h1[data-v-6200da8f]{color:var(--color-text-soft);font-family:\"Montserrat\";font-weight:900;font-size:11rem;line-height:5.5rem;letter-spacing:.32rem;text-shadow:8px 8px 0 rgba(0,0,0,.81);width:100%;margin-top:12rem}.container[data-v-6200da8f]{padding-top:8rem}[data-v-6200da8f] .form-control{border-radius:0;background-color:var(--vt-c-black);color:var(--color-text-soft)}.send-btn-container[data-v-6200da8f]{display:block;margin-top:2rem;margin-bottom:2rem}.icons[data-v-6200da8f]{padding-left:10rem;color:var(--vt-c-white)}.icon[data-v-6200da8f]{font-size:3.5rem;padding-bottom:3.2rem}.send-btn[data-v-6200da8f]{font-family:\"Montserrat\";font-weight:900;font-size:2.6rem;width:11rem;height:5rem}button[data-v-6200da8f]:focus{background-color:var(--vt-c-green)}@media (max-width:768px){.hero[data-v-6200da8f]{padding-left:2rem}h1[data-v-6200da8f]{font-size:6rem}.icons[data-v-6200da8f]{display:flex;margin-top:2rem;padding-left:2rem}.icons a[data-v-6200da8f]{margin-right:2rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contact.vue?vue&type=template&id=6200da8f&scoped=true
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('b-row',[_c('article',{staticClass:"hero"},[_c('div',[_c('b-row',[_c('h1',[_vm._v("Hello There!")])]),_vm._v(" "),_c('b-row',{staticClass:"container"},[_c('b-col',{attrs:{"lg":"10"}},[_c('b-alert',{attrs:{"variant":"success","dismissible":""},model:{value:_vm.emailSent,callback:function($$v){_vm.emailSent=$$v;},expression:"emailSent"}},[_vm._v("\n        E-mail sent!\n      ")]),_vm._v(" "),_vm.show?_c('b-form',{on:{"submit":_vm.onSubmit}},[_c('b-row',[_c('b-col',[_c('b-form-group',{attrs:{"id":"input-group-1","label-for":"input-1"}},[_c('b-form-input',{attrs:{"id":"input-1","size":"lg","placeholder":"Name","required":""},model:{value:_vm.form.name,callback:function($$v){_vm.$set(_vm.form,"name",$$v);},expression:"form.name"}})],1)],1),_vm._v(" "),_c('b-col',[_c('b-form-group',{attrs:{"id":"input-group-2","label-for":"input-2"}},[_c('b-form-input',{attrs:{"id":"input-2","size":"lg","type":"email","placeholder":"Email","required":""},model:{value:_vm.form.email,callback:function($$v){_vm.$set(_vm.form,"email",$$v);},expression:"form.email"}})],1)],1)],1),_vm._v(" "),_c('b-row',[_c('b-col',[_c('b-form-group',{attrs:{"id":"input-group-3","label-for":"input-3"}},[_c('b-form-textarea',{attrs:{"id":"input-3","placeholder":"Message","size":"lg","rows":"8","max-rows":"8"},model:{value:_vm.form.message,callback:function($$v){_vm.$set(_vm.form,"message",$$v);},expression:"form.message"}})],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"send-btn-container"},[_c('button',{staticClass:"btn btn-outline-light send-btn"},[_vm._v("\n         Send\n       ")])])],1):_vm._e()],1),_vm._v(" "),_c('b-col',{staticClass:"icons",attrs:{"lg":"2"}},[_c('a',{attrs:{"href":"https://www.linkedin.com/in/ariann-michael/","target":"_blank"}},[_c('p',{staticClass:"h1 mb-2 icon"},[_c('b-icon',{attrs:{"icon":"linkedin"}})],1)]),_vm._v(" "),_c('a',{attrs:{"href":"https://github.com/ariannmichael","target":"_blank"}},[_c('p',{staticClass:"h1 mb-2 icon"},[_c('b-icon',{attrs:{"icon":"github"}})],1)]),_vm._v(" "),_c('a',{attrs:{"href":"https://t.me/ariannmichael","target":"_blank"}},[_c('p',{staticClass:"h1 mb-2 icon"},[_c('b-icon',{attrs:{"icon":"telegram"}})],1)])])],1)],1)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Contact.vue?vue&type=template&id=6200da8f&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contact.vue?vue&type=script&lang=js
/* harmony default export */ var Contactvue_type_script_lang_js = ({data(){return{form:{name:'',email:'',message:''},loading:false,show:true,emailSent:false};},methods:{onSubmit(event){event.preventDefault();const body=JSON.stringify({name:this.form.name,email:this.form.email,message:this.form.message});fetch('http://localhost:3000/api/contact',{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body}).then(response=>{this.emailSent=true;});}}});
// CONCATENATED MODULE: ./components/Contact.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Contactvue_type_script_lang_js = (Contactvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Contactvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6200da8f",
  "ab3600bc"
  
)

/* harmony default export */ var Contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map