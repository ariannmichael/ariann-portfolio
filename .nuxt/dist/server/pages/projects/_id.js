exports.ids = [8];
exports.modules = Array(33).concat([
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var assets_json_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
var assets_json_data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(34, 1);
class ProjectService{getProjects(){return assets_json_data_json__WEBPACK_IMPORTED_MODULE_0__.projects.map(project=>project);}getProject(index){return assets_json_data_json__WEBPACK_IMPORTED_MODULE_0__.projects[index-1];}}

/***/ }),
/* 34 */
/***/ (function(module) {

module.exports = JSON.parse("{\"projects\":[{\"id\":1,\"name\":\"Afya\",\"link\":\"https://www.afya.com.br/\",\"imgs\":[\"/afya/rating.png\",\"/afya/live.png\",\"/afya/gostou.png\",\"/afya/transmissoes.png\",\"/afya/esteira.png\",\"/afya/nova_esteira.png\",\"/afya/kanban.png\",\"/afya/fases.png\"],\"description\":\"• Maintained and implemented new features for web applications, including the largest medical school platform in Brazil, catering to physicians across all courses, including Ph.D.\\n\\n• Developed the live platform and real-time chat from the ground up using a Kanban Jira-like platform, employing JavaScript, React, HTML, and CSS on the front end.\\n\\n• Create a Kanban-like platform for the audiovisual team to track the videos, scripts, and recording steps. Having drag-and-drop cards, editable columns, and milestones.\\n\\n• Created the GraphRequest layers and architecture on the backend using Node.js, NoSQL, MongoDB, GraphQL, Java, WebSockets, and RESTful HTTP Applications.\\n\\n• Utilized Kanban and Jira for day-to-day management throughout the work period. \",\"client\":\"Afya\",\"stack\":\"React / NodeJS / MongoDB / AWS\",\"startDate\":\"April 2021\",\"endDate\":\"April 2022\"},{\"id\":2,\"name\":\"Star Wars Saga\",\"link\":\"https://ariannmichael.github.io/starwars-saga/\",\"imgs\":[\"/star-wars/list.png\",\"/star-wars/filters.png\",\"/star-wars/search.png\",\"/star-wars/character1.png\",\"/star-wars/character2.png\"],\"description\":\"• Personal project to list, filter and see details about characters from Star Wars\",\"client\":\"Personal\",\"stack\":\"Angular2+ / SASS / Figma\",\"startDate\":\"December 2019\",\"endDate\":\"December 2019\"},{\"id\":3,\"name\":\"Stefanini\",\"link\":\"https://mentoring.stefanini.io/#/login\",\"imgs\":[\"/stefanini/landpage.png\",\"/stefanini/contact.png\",\"/stefanini/perfil.png\",\"/stefanini/language.png\",\"/stefanini/categoria.png\",\"/stefanini/mentor.png\",\"/stefanini/horario.png\",\"/stefanini/finalizar.png\",\"/stefanini/completo.png\",\"/stefanini/rating.png\"],\"description\":\"• Updated all frontend layouts of a mentoring website for Stefanini's employees, incorporating new features like contact buttons, language selection, mentor selection, and time availability using React with Typescript, HTML, and CSS.\\n\\n• On the backend, implemented functionalities for sending emails, querying language selection, mentor selection, time availability, list of mentorships, and ratings for each mentor and mentorship using Java, Spring Boot, MySQL, and RESTful HTTP Applications.\\n\\n• Assisted customers as needed, addressing their questions and suggestions.\\n\\n• Utilized Kanban and Jira for day-to-day management throughout the work period.\",\"client\":\"Stefanini\",\"stack\":\"React / Java / Spring / MySQL\",\"startDate\":\"March 2020\",\"endDate\":\"April 2021\"},{\"id\":4,\"name\":\"GoDaddy\",\"link\":\"https://www.godaddy.com/\",\"imgs\":[\"/godaddy/profile.png\",\"/godaddy/address.png\",\"/godaddy/messages.png\",\"/godaddy/payments.png\",\"/godaddy/add_payment.png\"],\"description\":\"• Contracted by Godaddy as an Eng - Software Development III, collaborated with the account team.\\n• Developed and maintained payment methods, subscriptions, receipts, and renewals using JavaScript, React with Typescript, Go, MongoDB, NextJS, Node.js, and HTML/CSS.\\n• Created new pages, including the user profile, and implemented verifications for various countries' payment types.\\n• Implemented Jest and Cypress tests to ensure code coverage.\\n• Integrated projects into the infrastructure using AWS, Github actions, Git, HTTP Restful, and Jenkins.\\n• Followed Scrum and Agile practices, utilizing Kanban and Jira for day-to-day management.\",\"client\":\"GoDaddy\",\"stack\":\"React / NextJS / NodeJS / AWS / Github Actions / Go\",\"startDate\":\"April 2022\",\"endDate\":\"Ongoing\"},{\"id\":5,\"name\":\"Lead Me To The Light\",\"link\":\"https://ariannmichael.itch.io/lead-me-to-the-light\",\"imgs\":[\"/lmttl/title.png\",\"/lmttl/moon.png\",\"/lmttl/trees.png\",\"/lmttl/house.png\"],\"description\":\"• Personal game made for the Godot Wild Jam #64.\",\"client\":\"Godot Wild Jam #64\",\"stack\":\"Godot / GDScript\",\"startDate\":\"December 8th 2023\",\"endDate\":\"December 17th 2023\"}]}");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./static/Ariann_Michael_CV.pdf": 36,
	"./static/afya/esteira.png": 37,
	"./static/afya/fases.png": 38,
	"./static/afya/gostou.png": 39,
	"./static/afya/kanban.png": 40,
	"./static/afya/live.png": 41,
	"./static/afya/nova_esteira.png": 42,
	"./static/afya/rating.png": 43,
	"./static/afya/transmissoes.png": 44,
	"./static/ariann-logo.svg": 45,
	"./static/ariann.png": 46,
	"./static/black.png": 47,
	"./static/favicon.ico": 48,
	"./static/godaddy/add_payment.png": 49,
	"./static/godaddy/address.png": 50,
	"./static/godaddy/messages.png": 51,
	"./static/godaddy/payments.png": 52,
	"./static/godaddy/profile.png": 53,
	"./static/lmttl/house.png": 54,
	"./static/lmttl/moon.png": 55,
	"./static/lmttl/title.png": 56,
	"./static/lmttl/trees.png": 57,
	"./static/star-wars/character1.png": 58,
	"./static/star-wars/character2.png": 59,
	"./static/star-wars/film.png": 60,
	"./static/star-wars/filters.png": 61,
	"./static/star-wars/list.png": 62,
	"./static/star-wars/search.png": 63,
	"./static/stefanini/categoria.png": 64,
	"./static/stefanini/completo.png": 65,
	"./static/stefanini/contact.png": 66,
	"./static/stefanini/finalizar.png": 67,
	"./static/stefanini/horario.png": 68,
	"./static/stefanini/landpage.png": 69,
	"./static/stefanini/language.png": 70,
	"./static/stefanini/mentor.png": 71,
	"./static/stefanini/perfil.png": 72,
	"./static/stefanini/rating.png": 73
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/esteira.b97d89d.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fases.162cbb1.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gostou.e36fdb6.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kanban.6b413b6.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/live.62cbf75.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nova_esteira.27759f4.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rating.39806ea.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/transmissoes.b1df7c6.png";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzQiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA3NCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcxIDM0QzcxIDUwLjg4NzEgNTYuMDIxNSA2NSAzNyA2NUMxNy45Nzg1IDY1IDMgNTAuODg3MSAzIDM0QzMgMTcuMTEyOSAxNy45Nzg1IDMgMzcgM0M1Ni4wMjE1IDMgNzEgMTcuMTEyOSA3MSAzNFoiIGZpbGw9IiMxRDFEMjIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNiIvPgo8cGF0aCBkPSJNMjEuNDQgNDVMMzMuOCAxN0g0MS42TDU0IDQ1SDQ1Ljc2TDM2LjA4IDIwLjg4SDM5LjJMMjkuNTIgNDVIMjEuNDRaTTI4LjIgMzkuNTZMMzAuMjQgMzMuNzJINDMuOTJMNDUuOTYgMzkuNTZIMjguMloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ariann.ec9067f.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/black.4a0a335.png";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '\u0000' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/add_payment.2daadf7.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/address.3b6c9e5.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/messages.a274210.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/payments.3e9eafe.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/profile.54df0f4.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/house.9ad74c8.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/moon.63e370f.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/title.e5201bb.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/trees.73cef09.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/character1.f8ed14b.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/character2.6b45064.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/film.d6d4c4b.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/filters.5b95c7a.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/list.50762cb.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/search.b1f9324.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/categoria.0e5dd16.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/completo.5e07ea7.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contact.b527f4c.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/finalizar.23b8f1b.png";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/horario.6bf2c35.png";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/landpage.d51b419.png";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/language.dc31ef1.png";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mentor.b110060.png";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/perfil.2e67a24.png";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rating.230698e.png";

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("556ad27f", content, true, context)
};

/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_59d2c62c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_59d2c62c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_59d2c62c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_59d2c62c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_59d2c62c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".project-wrapper{margin:1rem 5rem}.carousel-wrapper{width:100%}.description-wrapper{margin-top:1.6rem}.project-title{color:var(--vt-c-soft);font-family:\"Montserrat\";font-size:4.3rem;font-weight:900}.project-text{color:var(--vt-c-mute);font-family:\"Playfair Display\";font-size:1.4rem;font-style:normal;font-weight:400;letter-spacing:.047rem;line-height:1.438rem;margin-top:1rem;padding-right:1.4rem;white-space:pre-line}.detail-wrapper{margin-left:1rem;margin-top:1.2rem}.detail-container{margin-bottom:2rem}.detail-title{color:var(--vt-c-soft);font-family:\"Montserrat\";font-size:3.4rem;font-weight:900}.detail-text{color:var(--vt-c-mute);font-family:\"Playfair Display\";font-size:2rem;font-style:normal;font-weight:400;letter-spacing:.047rem;line-height:1.438rem;margin-top:1rem;padding-left:1rem;white-space:pre-line}@media (max-width:768px){.project-wrapper{margin:1rem 4rem}.carousel-wrapper{width:20rem}.project-title{font-size:3rem}.project-text{font-size:1rem}.detail-title{font-size:2.4rem}.detail-text{font-size:1.4rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects/_id.vue?vue&type=template&id=59d2c62c&
var render=function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('div',{staticClass:"project-wrapper"},[_vm._ssrNode("<div class=\"carousel-wrapper\">","</div>",[_c('b-carousel',{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{"id":"carousel-fade","fade":"","indicators":""}},_vm._l(_vm.project.imgs,function(img){return _c('b-carousel-slide',{key:img.id,attrs:{"img-src":_vm.getImgUrl(img),"img-width":"1024","img-height":"480"}});}),1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"description-wrapper\">","</div>",[_c('b-row',[_c('b-col',[_c('h1',{staticClass:"project-title"},[_vm._v(_vm._s(_vm.project.name))]),_vm._v(" "),_c('p',{staticClass:"project-text"},[_vm._v(_vm._s(_vm.project.description))])]),_vm._v(" "),_c('b-col',{staticClass:"detail-wrapper"},[_c('div',{staticClass:"detail-container"},[_c('h3',{staticClass:"detail-title"},[_vm._v("Client")]),_vm._v(" "),_c('p',{staticClass:"detail-text"},[_vm._v(_vm._s(_vm.project.client))])]),_vm._v(" "),_c('div',{staticClass:"detail-container"},[_c('h3',{staticClass:"detail-title"},[_vm._v("Stack")]),_vm._v(" "),_c('p',{staticClass:"detail-text"},[_vm._v(_vm._s(_vm.project.stack))])]),_vm._v(" "),_c('div',{staticClass:"detail-container"},[_c('h3',{staticClass:"detail-title"},[_vm._v("Date")]),_vm._v(" "),_c('p',{staticClass:"detail-text"},[_vm._v(_vm._s(_vm.project.startDate)+" - "+_vm._s(_vm.project.endDate))])])])],1)],1)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/projects/_id.vue?vue&type=template&id=59d2c62c&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: ./services/projectService.ts
var projectService = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects/_id.vue?vue&type=script&lang=js&
const _idvue_type_script_lang_js_projectService=new projectService["a" /* ProjectService */]();/* harmony default export */ var _idvue_type_script_lang_js_ = (Object(external_vue_["defineComponent"])({data:function(){return{id:null,project:null};},created(){this.id=this.$route.params.id;this.project=_idvue_type_script_lang_js_projectService.getProject(this.id);},methods:{getImgUrl(img){return __webpack_require__(35)(`./static${img}`);}}}));
// CONCATENATED MODULE: ./pages/projects/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var projects_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/projects/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  projects_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d2b92faa"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })
]);;
//# sourceMappingURL=_id.js.map