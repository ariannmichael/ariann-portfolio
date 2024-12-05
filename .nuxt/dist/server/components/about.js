exports.ids = [1];
exports.modules = {

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("15c96862", content, true, context)
};

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0f1033e2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0f1033e2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0f1033e2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0f1033e2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0f1033e2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".about-title[data-v-0f1033e2]{border-bottom:1px solid var(--color-text-white)}.about-section[data-v-0f1033e2]{padding-bottom:2.2rem;padding-top:2.2rem}.about-text[data-v-0f1033e2]{color:var(--color-text-light);font-family:\"Playfair Display\";font-size:1.6rem;font-weight:400;line-height:2.6rem;padding-right:5rem}.img-size[data-v-0f1033e2]{height:32.938rem;position:absolute;width:33.313rem}.color-block-red[data-v-0f1033e2]{background-color:var(--color-red)}.color-block-green[data-v-0f1033e2]{background-color:var(--color-green);left:1.5rem;top:1.5rem}.photo[data-v-0f1033e2]{left:3rem;top:3rem}h3[data-v-0f1033e2]{color:var(--color-text-soft);font-family:\"Montserrat\";font-size:1.5rem;font-style:normal;font-weight:900;letter-spacing:.3em}.tech-p[data-v-0f1033e2],h3[data-v-0f1033e2]{text-align:center}.tech-p[data-v-0f1033e2]{color:var(--color-text-white);font-family:\"Playfair Display\";font-size:1.2rem;font-weight:700;letter-spacing:.09em;line-height:3.5rem;padding:2rem}@media (max-width:768px){.about-section[data-v-0f1033e2]{display:block}.about-text[data-v-0f1033e2]{font-size:1.3rem;line-height:2rem;padding-right:3rem}.img-size[data-v-0f1033e2]{height:16rem;width:15rem}.about-tech[data-v-0f1033e2]{margin-top:20rem;padding-right:1.6rem}.about-image[data-v-0f1033e2]{margin-top:4rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About.vue?vue&type=template&id=0f1033e2&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('b-row',{staticClass:"about-title",attrs:{"id":"about-title"}},[_c('h1',{staticClass:"title"},[_vm._v("ABOUT ME")])]),_vm._ssrNode(" "),_c('b-row',{staticClass:"about-section",attrs:{"id":"about-section"}},[_c('b-col',[_c('p',{staticClass:"about-text"},[_vm._v("\n        Hello! My name is Ariann and I enjoy creating things from web to games. I have been working as a web developer for 5 years and I have been working with a variety of clients, I’ve had the privilege of working at a start-up, a huge corporation, and an open-source project. \n        All of this experience has given me a good understanding of the full life cycle of a project. I also have a great passion for learning and I am always looking for new technologies to work with.\n        If you are looking for a friendly, passionate, and highly skilled software developer to join your team, please don't hesitate to get in touch. I look forward to hearing from you!\n        Here are a few technologies I’ve been working with recently:                                  \n      ")])]),_vm._v(" "),_c('b-col',{staticClass:"about-image"},[_c('div',{staticClass:"relative-position"},[_c('div',{staticClass:"img-size color-block-red"}),_vm._v(" "),_c('div',{staticClass:"img-size color-block-green"}),_vm._v(" "),_c('b-img',{staticClass:"img-size photo",attrs:{"src":"/ariann.png","blank-color":"#000000","fluid":"","alt":"Ariann Michael"}})],1)])],1),_vm._ssrNode(" "),_c('b-row',{staticClass:"about-tech"},[_c('b-col',[_c('h3',[_vm._v("Frontend / Backend")]),_vm._v(" "),_c('p',{staticClass:"tech-p"},[_vm._v("Javascript / React / NextJS / Angular2+ / Vue / NuxtJS / NodeJS / Java / Spring / Python / Flask")])]),_vm._v(" "),_c('b-col',[_c('h3',[_vm._v("Infrastructure")]),_vm._v(" "),_c('p',{staticClass:"tech-p"},[_vm._v("Dockers / Kubernetes / Jenkins / AWS / MySQL / MongoDB")])])],1)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/About.vue?vue&type=template&id=0f1033e2&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/About.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0f1033e2",
  "5748b30f"
  
)

/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map