exports.ids = [4];
exports.modules = {

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("086aa567", content, true, context)
};

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4eadfa11_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4eadfa11_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4eadfa11_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4eadfa11_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4eadfa11_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero[data-v-4eadfa11]{display:flex;height:50rem;align-items:center;padding-left:4rem}h1[data-v-4eadfa11]{color:var(--color-text-soft);font-weight:900;font-size:5.75rem;line-height:5.5rem;text-shadow:8px 6px 0 rgba(0,0,0,.81)}h1[data-v-4eadfa11],h2[data-v-4eadfa11]{font-family:\"Montserrat\"}h2[data-v-4eadfa11]{font-weight:700;font-size:4.375rem;line-height:4.5rem;color:var(--color-text-mute)}h4[data-v-4eadfa11]{font-size:1.25rem;width:35rem;color:var(--color-text-mute);margin-top:2rem;margin-bottom:6rem}h4[data-v-4eadfa11],p[data-v-4eadfa11]{font-family:\"Playfair Display\";font-weight:400}p[data-v-4eadfa11]{font-size:1.2rem;line-height:1.125rem;color:var(--color-text-white)}.call-btn[data-v-4eadfa11]{font-family:\"Montserrat\";font-weight:900;font-size:2rem;width:26rem;height:5rem}@media only screen and (max-width:768px){.hero[data-v-4eadfa11]{padding-right:2rem;padding-left:0}h1[data-v-4eadfa11]{font-size:4.375rem;line-height:4.5rem}h2[data-v-4eadfa11]{font-size:2.4rem;line-height:3rem}h4[data-v-4eadfa11]{width:100%}h4[data-v-4eadfa11],p[data-v-4eadfa11]{font-size:1rem;line-height:1.5rem}.call-btn[data-v-4eadfa11]{font-size:1.5rem;width:19rem;height:4rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home.vue?vue&type=template&id=4eadfa11&scoped=true
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('b-row',[_c('article',{staticClass:"hero"},[_c('div',[_c('p',[_vm._v("Hello there, my name is")]),_vm._v(" "),_c('h1',[_vm._v("Ariann Michael")]),_vm._v(" "),_c('h2',[_vm._v("Name it, and I can build it.")]),_vm._v(" "),_c('h4',[_vm._v("I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Gamedev in my free time.")]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":{path:'/',hash:'#contact'}}},[_c('button',{staticClass:"btn btn-outline-light call-btn"},[_vm._v("Let's work together")])])],1)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Home.vue?vue&type=template&id=4eadfa11&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Home.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4eadfa11",
  "715ec166"
  
)

/* harmony default export */ var Home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home.js.map