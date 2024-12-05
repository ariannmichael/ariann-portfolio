exports.ids = [7,1,2,3,4,6];
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

module.exports = __webpack_require__.p + "img/esteira.d51c719.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fases.d10b3ea.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gostou.22751ad.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kanban.d0a9482.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/live.c15a259.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nova_esteira.25cdaa0.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rating.7e7e083.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/transmissoes.9d0a565.png";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzQiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA3NCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcxIDM0QzcxIDUwLjg4NzEgNTYuMDIxNSA2NSAzNyA2NUMxNy45Nzg1IDY1IDMgNTAuODg3MSAzIDM0QzMgMTcuMTEyOSAxNy45Nzg1IDMgMzcgM0M1Ni4wMjE1IDMgNzEgMTcuMTEyOSA3MSAzNFoiIGZpbGw9IiMxRDFEMjIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNiIvPgo8cGF0aCBkPSJNMjEuNDQgNDVMMzMuOCAxN0g0MS42TDU0IDQ1SDQ1Ljc2TDM2LjA4IDIwLjg4SDM5LjJMMjkuNTIgNDVIMjEuNDRaTTI4LjIgMzkuNTZMMzAuMjQgMzMuNzJINDMuOTJMNDUuOTYgMzkuNTZIMjguMloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ariann.0b5583b.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/black.df7013e.png";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '\u0000' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/add_payment.975a900.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/address.aa4ad50.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/messages.11c4613.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/payments.bfe4ee2.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/profile.8c64158.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/house.f02212e.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/moon.1e40e65.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/title.32ed7f6.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/trees.345ea3e.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/character1.5e1a008.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/character2.9f37703.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/film.d90379e.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/filters.01410bb.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/list.99409ac.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/search.02b1471.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/categoria.86d3581.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/completo.1212d69.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contact.df8735c.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/finalizar.9ca07d8.png";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/horario.3dc1ca0.png";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/landpage.d1e3c80.png";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/language.8f0e6b4.png";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mentor.436e456.png";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/perfil.bcded61.png";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rating.7f94ad5.png";

/***/ }),
/* 74 */
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
/* 75 */
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
  add("1bf96952", content, true, context)
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1af9da72", content, true, context)
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("73a2f3ce", content, true, context)
};

/***/ }),
/* 78 */
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
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4eadfa11_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4eadfa11_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4eadfa11_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4eadfa11_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_4eadfa11_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero[data-v-4eadfa11]{display:flex;height:50rem;align-items:center;padding-left:4rem}h1[data-v-4eadfa11]{color:var(--color-text-soft);font-weight:900;font-size:5.75rem;line-height:5.5rem;text-shadow:8px 6px 0 rgba(0,0,0,.81)}h1[data-v-4eadfa11],h2[data-v-4eadfa11]{font-family:\"Montserrat\"}h2[data-v-4eadfa11]{font-weight:700;font-size:4.375rem;line-height:4.5rem;color:var(--color-text-mute)}h4[data-v-4eadfa11]{font-size:1.25rem;width:35rem;color:var(--color-text-mute);margin-top:2rem;margin-bottom:6rem}h4[data-v-4eadfa11],p[data-v-4eadfa11]{font-family:\"Playfair Display\";font-weight:400}p[data-v-4eadfa11]{font-size:1.2rem;line-height:1.125rem;color:var(--color-text-white)}.call-btn[data-v-4eadfa11]{font-family:\"Montserrat\";font-weight:900;font-size:2rem;width:26rem;height:5rem}@media only screen and (max-width:768px){.hero[data-v-4eadfa11]{padding-right:2rem;padding-left:0}h1[data-v-4eadfa11]{font-size:4.375rem;line-height:4.5rem}h2[data-v-4eadfa11]{font-size:2.4rem;line-height:3rem}h4[data-v-4eadfa11]{width:100%}h4[data-v-4eadfa11],p[data-v-4eadfa11]{font-size:1rem;line-height:1.5rem}.call-btn[data-v-4eadfa11]{font-size:1.5rem;width:19rem;height:4rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0f1033e2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0f1033e2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0f1033e2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0f1033e2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_0f1033e2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".about-title[data-v-0f1033e2]{border-bottom:1px solid var(--color-text-white)}.about-section[data-v-0f1033e2]{padding-top:2.2rem;padding-bottom:2.2rem}.about-text[data-v-0f1033e2]{font-family:\"Playfair Display\";font-weight:400;font-size:1.6rem;line-height:2.6rem;color:var(--color-text-light);padding-right:5rem}.img-size[data-v-0f1033e2]{position:absolute;width:33.313rem;height:32.938rem}.color-block-red[data-v-0f1033e2]{background-color:var(--color-red)}.color-block-green[data-v-0f1033e2]{background-color:var(--color-green);top:1.5rem;left:1.5rem}.photo[data-v-0f1033e2]{top:3rem;left:3rem}h3[data-v-0f1033e2]{font-family:\"Montserrat\";font-style:normal;font-weight:900;font-size:1.5rem;letter-spacing:.3em;color:var(--color-text-soft)}.tech-p[data-v-0f1033e2],h3[data-v-0f1033e2]{text-align:center}.tech-p[data-v-0f1033e2]{font-family:\"Playfair Display\";font-weight:700;font-size:1.2rem;line-height:3.5rem;letter-spacing:.09em;color:var(--color-text-white);padding:2rem}@media (max-width:768px){.about-section[data-v-0f1033e2]{display:block}.about-text[data-v-0f1033e2]{line-height:2rem;padding-right:3rem;font-size:1.3rem}.img-size[data-v-0f1033e2]{width:15rem;height:16rem}.about-tech[data-v-0f1033e2]{margin-top:20rem;padding-right:1.6rem}.about-image[data-v-0f1033e2]{margin-top:4rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_style_index_0_id_9f96133a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_style_index_0_id_9f96133a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_style_index_0_id_9f96133a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_style_index_0_id_9f96133a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Experience_vue_vue_type_style_index_0_id_9f96133a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper[data-v-9f96133a]{margin-top:20rem}.experience-title[data-v-9f96133a]{border-bottom:1px solid var(--color-text-white)}.experience-section[data-v-9f96133a]{padding-top:3.2rem;padding-bottom:2.2rem}.experience-text[data-v-9f96133a]{font-size:1.6rem;line-height:2.6rem;color:var(--color-text-light);padding-right:5rem}.card[data-v-9f96133a]{width:100vw;height:50vh;background-color:var(--vt-c-black);border:1px solid var(--vt-c-white);border-radius:0!important}.card-text[data-v-9f96133a]{padding:1rem}.accordion-header[data-v-9f96133a]{background-color:var(--vt-c-black);color:var(--vt-c-white)}[data-v-9f96133a] .nav-tabs .nav-link{height:5.4rem;border-radius:0!important;font-family:Montserrat;font-size:20px!important;font-style:normal!important;font-weight:900!important;line-height:17px!important;letter-spacing:.6px!important;padding-top:2rem}[data-v-9f96133a] .nav-tabs .nav-link.active{border-radius:0!important;color:var(--color-green);background-color:var(--vt-c-black)}h2[data-v-9f96133a]{color:var(--vt-c-soft);font-family:Montserrat;display:flex}.p-at[data-v-9f96133a],h2[data-v-9f96133a]{font-size:2.5rem;font-style:normal;font-weight:700;line-height:3.5rem;letter-spacing:-.15rem}.p-at[data-v-9f96133a]{color:var(--color-green);font-family:\"Montserrat\"}.experience-text[data-v-9f96133a]{color:var(--vt-c-mute);font-size:1.563rem;font-style:normal;font-weight:400;line-height:1.438rem;letter-spacing:.047rem}.experience-text[data-v-9f96133a],h5[data-v-9f96133a]{font-family:\"Playfair Display\"}h5[data-v-9f96133a]{font-weight:700;font-size:1.2rem;line-height:3.5rem;letter-spacing:.09em;color:var(--color-text-white);padding-top:1.4rem}@media (max-width:768px){.wrapper[data-v-9f96133a]{margin-top:80rem}.vertical-tabs[data-v-9f96133a]{display:none}[data-v-9f96133a] .nav-tabs{display:flex}[data-v-9f96133a] .collapse{display:block}[data-v-9f96133a] .card{height:auto!important;width:20rem!important}.experience-text[data-v-9f96133a]{font-size:1.2rem}}@media (min-width:768px){.accordion[data-v-9f96133a]{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Work_vue_vue_type_style_index_0_id_33586ea0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Work_vue_vue_type_style_index_0_id_33586ea0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Work_vue_vue_type_style_index_0_id_33586ea0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Work_vue_vue_type_style_index_0_id_33586ea0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Work_vue_vue_type_style_index_0_id_33586ea0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper[data-v-33586ea0]{margin-top:10rem;height:100vh}.projects-title[data-v-33586ea0]{border-bottom:1px solid var(--color-text-white)}.projects-section[data-v-33586ea0]{padding-top:3.2rem;padding-bottom:2.2rem}.card[data-v-33586ea0]{width:40rem;height:25.6rem;border-radius:0}.card-img[data-v-33586ea0]{width:100%;height:25.5rem;border-radius:0}.project-col[data-v-33586ea0]{width:5rem}@media (max-width:768px){.card[data-v-33586ea0]{width:10.5rem;height:10rem}.card-img[data-v-33586ea0]{height:100%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_6200da8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_6200da8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_6200da8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_6200da8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_6200da8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero[data-v-6200da8f]{text-align:center;display:flex;height:100vh;align-items:center;padding-left:4rem}h1[data-v-6200da8f]{color:var(--color-text-soft);font-family:\"Montserrat\";font-weight:900;font-size:11rem;line-height:5.5rem;letter-spacing:.32rem;text-shadow:8px 8px 0 rgba(0,0,0,.81);width:100%;margin-top:12rem}.container[data-v-6200da8f]{padding-top:8rem}[data-v-6200da8f] .form-control{border-radius:0;background-color:var(--vt-c-black);color:var(--color-text-soft)}.send-btn-container[data-v-6200da8f]{display:block;margin-top:2rem;margin-bottom:2rem}.icons[data-v-6200da8f]{padding-left:10rem;color:var(--vt-c-white)}.icon[data-v-6200da8f]{font-size:3.5rem;padding-bottom:3.2rem}.send-btn[data-v-6200da8f]{font-family:\"Montserrat\";font-weight:900;font-size:2.6rem;width:11rem;height:5rem}button[data-v-6200da8f]:focus{background-color:var(--vt-c-green)}@media (max-width:768px){.hero[data-v-6200da8f]{padding-left:2rem}h1[data-v-6200da8f]{font-size:6rem}.icons[data-v-6200da8f]{display:flex;margin-top:2rem;padding-left:2rem}.icons a[data-v-6200da8f]{margin-right:2rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 89 */,
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1b570078", content, true, context)
};

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Work.vue?vue&type=template&id=33586ea0&scoped=true
var render=function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('div',{staticClass:"wrapper"},[_c('b-row',{staticClass:"projects-title",attrs:{"id":"projects-title"}},[_c('h1',{staticClass:"title"},[_vm._v("SELECTED PROJECTS")])]),_vm._ssrNode(" "),_vm._l(_vm.rowSize,function(index){return _c('b-row',{key:index,staticClass:"projects-section",attrs:{"id":"projects-section"}},_vm._l(_vm.projectsByRow(index),function(project){return _c('b-col',{key:project.name,staticClass:"project-col"},[_c('NuxtLink',{attrs:{"to":'/projects/'+project.id}},[_c('b-card',{attrs:{"img-src":_vm.getImgUrl(project.imgs[0])}})],1)],1);}),1);})],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Work.vue?vue&type=template&id=33586ea0&scoped=true

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: ./services/projectService.ts
var projectService = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Work.vue?vue&type=script&lang=js
const Workvue_type_script_lang_js_projectService=new projectService["a" /* ProjectService */]();/* harmony default export */ var Workvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({data:function(){return{projects:[]};},created(){this.projects=Workvue_type_script_lang_js_projectService.getProjects();},computed:{rowSize(){return Math.ceil(this.projects.length/2);}},methods:{projectsByRow(index){const start=(index-1)*2;const end=index*2;return this.projects.slice(start,end);},getImgUrl(img){return __webpack_require__(35)(`./static${img}`);}}}));
// CONCATENATED MODULE: ./components/Work.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Workvue_type_script_lang_js = (Workvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Work.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Workvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "33586ea0",
  "3341ef02"
  
)

/* harmony default export */ var Work = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 92 */
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

/***/ }),
/* 93 */
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

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About.vue?vue&type=template&id=0f1033e2&scoped=true
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('b-row',{staticClass:"about-title",attrs:{"id":"about-title"}},[_c('h1',{staticClass:"title"},[_vm._v("ABOUT ME")])]),_vm._ssrNode(" "),_c('b-row',{staticClass:"about-section",attrs:{"id":"about-section"}},[_c('b-col',[_c('p',{staticClass:"about-text"},[_vm._v("\n        Hello! My name is Ariann and I enjoy creating things from web to games. I have been working as a web developer for 5 years and I have been working with a variety of clients, I’ve had the privilege of working at a start-up, a huge corporation, and an open-source project. \n        All of this experience has given me a good understanding of the full life cycle of a project. I also have a great passion for learning and I am always looking for new technologies to work with.\n        If you are looking for a friendly, passionate, and highly skilled software developer to join your team, please don't hesitate to get in touch. I look forward to hearing from you!\n        Here are a few technologies I’ve been working with recently:                                  \n      ")])]),_vm._v(" "),_c('b-col',{staticClass:"about-image"},[_c('div',{staticClass:"relative-position"},[_c('div',{staticClass:"img-size color-block-red"}),_vm._v(" "),_c('div',{staticClass:"img-size color-block-green"}),_vm._v(" "),_c('b-img',{staticClass:"img-size photo",attrs:{"src":"/ariann.png","blank-color":"#000000","fluid":"","alt":"Ariann Michael"}})],1)])],1),_vm._ssrNode(" "),_c('b-row',{staticClass:"about-tech"},[_c('b-col',[_c('h3',[_vm._v("Frontend / Backend")]),_vm._v(" "),_c('p',{staticClass:"tech-p"},[_vm._v("Javascript / React / NextJS / Angular2+ / Vue / NuxtJS / NodeJS / Java / Spring / Python / Flask")])]),_vm._v(" "),_c('b-col',[_c('h3',[_vm._v("Infrastructure")]),_vm._v(" "),_c('p',{staticClass:"tech-p"},[_vm._v("Dockers / Kubernetes / Jenkins / AWS / MySQL / MongoDB")])])],1)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/About.vue?vue&type=template&id=0f1033e2&scoped=true

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

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Experience.vue?vue&type=template&id=9f96133a&scoped=true
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"wrapper"},[_c('b-row',{staticClass:"experience-title",attrs:{"id":"experience-title"}},[_c('h1',{staticClass:"title"},[_vm._v("EXPERIENCE")])]),_vm._ssrNode(" "),_c('b-row',{staticClass:"experience-section",attrs:{"id":"experience-section"}},[_c('b-card',{staticClass:"card vertical-tabs",attrs:{"no-body":""}},[_c('b-tabs',{attrs:{"vertical":"","nav-class":"tabs-nav","nav-wrapper-class":"w-40"}},[_c('b-tab',{attrs:{"title":"Fullstack Labs","active":""}},[_c('b-card-text',[_c('div',[_c('h2',[_vm._v("Software Engineer\n         "),_c('p',{staticClass:"p-at"},[_vm._v(" @ Fullstack Labs")])]),_vm._v(" "),_c('p',{staticClass:"experience-text"},[_vm._v("\n         I worked as a contractor for:\n         "),_c('br'),_c('br'),_vm._v(" "),_c('ul',[_c('li',[_vm._v("\n           Godaddy as an Eng - Software Development III, with the account team, developing and maintaining ReactJS and NextJS projects on payment methods, subscriptions, receipts, and renewals, all of them in a mono repo.\n           For these projects, I have developed Jest and Cypress tests to give coverage to the code and to integrate everything in the infrastructure, I used AWS, Github actions, and Jenkins.\n          ")])])]),_vm._v(" "),_c('h5',[_vm._v("\n         Skills: NextJs · UI · Front-end · Back-end · React.js · CI/CD · Jenkins · Cypress · AWS\n        ")])])])],1),_vm._v(" "),_c('b-tab',{attrs:{"title":"Afya"}},[_c('b-card-text',[_c('div',[_c('h2',[_vm._v("Mid-Level Developer \n         "),_c('p',{staticClass:"p-at"},[_vm._v(" @ Afya")])]),_vm._v(" "),_c('p',{staticClass:"experience-text"},[_vm._v("\n         I worked on maintaining and implementing new features of web applications:\n         "),_c('br'),_c('br'),_vm._v(" "),_c('ul',[_c('li',[_vm._v("\n           The biggest medical school platform in Brazil, preparing physicians through all the courses, even on\n           Ph.D. - Working on the audiovisual team, creating the new platform to play lives, recorded classes and\n           realtime chat - using ReactJS, HTML5, CSS3, NodeJS, NoSQL, MongoDB, GraphQL,\n           WebSockets and RESTfull HTTP Applications\n          ")])])]),_vm._v(" "),_c('h5',[_vm._v("\n         Skills: GraphQL · Real Time Streaming · Chat · Back-end · UI · Front-end · React.js · Node.js · MongoDB · AWS\n        ")])])])],1),_vm._v(" "),_c('b-tab',{attrs:{"title":"OpenMined"}},[_c('b-card-text',[_c('div',[_c('h2',[_vm._v("Core Developer \n        "),_c('p',{staticClass:"p-at"},[_vm._v(" @ OpenMined")])]),_vm._v(" "),_c('p',{staticClass:"experience-text"},[_vm._v("\n         I worked on open-source projects with the teams:\n         "),_c('br'),_c('br'),_vm._v(" "),_c('ul',[_c('li',[_vm._v("PySyft - Developing and fixing bugs for data-centric federated learning with differential privacy.")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('li',[_vm._v("PyGrid - Creating a user interface, allowing for a more granular permission system at both the user and tensor levels.")])])]),_vm._v(" "),_c('h5',[_vm._v("\n         Skills: Artificial Intelligence (AI) · PyTorch · NextJs · GraphQL · JavaScript · Python \n        ")])])])],1),_vm._v(" "),_c('b-tab',{attrs:{"title":"Stefanini"}},[_c('b-card-text',[_c('div',[_c('h2',[_vm._v("Software Developer \n         "),_c('p',{staticClass:"p-at"},[_vm._v(" @ Stefanini")])]),_vm._v(" "),_c('p',{staticClass:"experience-text"},[_vm._v("\n         I worked on building and maintaining the following:\n         "),_c('br'),_c('br'),_vm._v(" "),_c('ul',[_c('li',[_vm._v("A website for Stefanini's employees to mentor one another, choosing the topic and schedule based on the mentor availability - using ReactJS, React Native, HTML5, CSS3, Java, Spring, MySQL and\n         RESTfull HTTP Applications")]),_c('br'),_vm._v(" "),_c('li',[_vm._v("A menu on a website and app to select and order from Almanara’s restaurants,\n         without social contact - using ReactJS, React Native, HTML5, CSS3, NodeJS, MySQL and RESTfull\n         HTTP Applications")]),_c('br'),_vm._v(" "),_c('li',[_vm._v("Assisted the customers whenever needed with their questions and suggestions")])])]),_vm._v(" "),_c('h5',[_vm._v("\n         Skills: Back-end · Mobile · UI · Front-end · React.js · Java · Spring Framework\n        ")])])])],1),_vm._v(" "),_c('b-tab',{attrs:{"title":"Proj4me"}},[_c('b-card-text',[_c('div',[_c('h2',[_vm._v("Software Developer Internship \n         "),_c('p',{staticClass:"p-at"},[_vm._v(" @ Proj4me")])]),_vm._v(" "),_c('p',{staticClass:"experience-text"},[_vm._v("\n         I worked on building and maintaining the following:\n         "),_c('br'),_c('br'),_vm._v(" "),_c('ul',[_c('li',[_vm._v("SASS to manage tasks, projects, and teams, implementing Agile principles such as scrum, kanban and\n         sprints - using JavaEE, MySQL, HTML5, CSS3, Angular2+, RESTfull HTTP Applications and Agile\n         Development process;")])])]),_vm._v(" "),_c('h5',[_vm._v("\n         Skills: Angular · UI · Front-end · Back-end · Java · MySQL\n        ")])])])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"accordion",attrs:{"role":"tablist"}},[_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":true}}],staticClass:"accordion-header",attrs:{"block":"","variant":"info"}},[_c('h2',[_vm._v("Software Engineer")]),_c('p',{staticClass:"p-at"},[_vm._v(" @ Fullstack Labs")])])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-1","visible":"","accordion":"my-accordion","role":"tabpanel"}},[_c('b-card-body',[_c('b-card-text',[_vm._v("\n             I worked as a contractor for:\n             "),_c('br'),_c('br'),_vm._v(" "),_c('ul',[_c('li',[_vm._v("\n               Godaddy as an Eng - Software Development III, with the account team, developing and maintaining ReactJS and NextJS projects on payment methods, subscriptions, receipts, and renewals, all of them in a mono repo.\n               For these projects, I have developed Jest and Cypress tests to give coverage to the code and to integrate everything in the infrastructure, I used AWS, Github actions, and Jenkins.\n             ")])]),_vm._v("\n\n             Skills: NextJs · UI · Front-end · Back-end · React.js · CI/CD · Jenkins · Cypress · AWS\n           ")])],1)],1)],1),_vm._v(" "),_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":true}}],staticClass:"accordion-header",attrs:{"block":"","variant":"info"}},[_c('h2',[_vm._v("Mid-Level Developer")]),_c('p',{staticClass:"p-at"},[_vm._v(" @ Afya")])])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-2","accordion":"my-accordion","role":"tabpanel"}},[_c('b-card-body',[_c('b-card-text',[_vm._v("\n             I worked on maintaining and implementing new features of web applications:\n             "),_c('br'),_c('br'),_vm._v(" "),_c('ul',[_c('li',[_vm._v("\n               The biggest medical school platform in Brazil, preparing physicians through all the courses, even on\n               Ph.D. - Working on the audiovisual team, creating the new platform to play lives, recorded classes and\n               realtime chat - using ReactJS, HTML5, CSS3, NodeJS, NoSQL, MongoDB, GraphQL,\n               WebSockets and RESTfull HTTP Applications\n             ")])]),_vm._v("\n\n             Skills: GraphQL · Real Time Streaming · Chat · Back-end · UI · Front-end · React.js · Node.js · MongoDB · AWS\n           ")])],1)],1)],1),_vm._v(" "),_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":true}}],staticClass:"accordion-header",attrs:{"block":"","variant":"info"}},[_c('h2',[_vm._v("Core Developer")]),_c('p',{staticClass:"p-at"},[_vm._v(" @ OpenMined")])])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-3","accordion":"my-accordion","role":"tabpanel"}},[_c('b-card-body',[_c('b-card-text',[_vm._v("\n             I worked on open-source projects with the teams:\n             "),_c('br'),_c('br'),_vm._v(" "),_c('ul',[_c('li',[_vm._v("PySyft - Developing and fixing bugs for data-centric federated learning with differential privacy.")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('li',[_vm._v("PyGrid - Creating a user interface, allowing for a more granular permission system at both the user and tensor levels.")])]),_vm._v("\n\n             Skills: Artificial Intelligence (AI) · PyTorch · NextJs · GraphQL · JavaScript · Python \n           ")])],1)],1)],1),_vm._v(" "),_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-5",modifiers:{"accordion-5":true}}],staticClass:"accordion-header",attrs:{"block":"","variant":"info"}},[_c('h2',[_vm._v("Software Developer")]),_c('p',{staticClass:"p-at"},[_vm._v(" @ Stefanini")])])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-5","accordion":"my-accordion","role":"tabpanel"}},[_c('b-card-body',[_c('b-card-text',[_vm._v("\n             I worked on building and maintaining the following:\n             "),_c('br'),_c('br'),_vm._v(" "),_c('ul',[_c('li',[_vm._v("A website for Stefanini's employees to mentor one another, choosing the topic and schedule based on the mentor availability - using ReactJS, React Native, HTML5, CSS3, Java, Spring, MySQL and\n             RESTfull HTTP Applications")]),_c('br'),_vm._v(" "),_c('li',[_vm._v("A menu on a website and app to select and order from Almanara’s restaurants,\n             without social contact - using ReactJS, React Native, HTML5, CSS3, NodeJS, MySQL and RESTfull\n             HTTP Applications")]),_c('br'),_vm._v(" "),_c('li',[_vm._v("Assisted the customers whenever needed with their questions and suggestions")])]),_vm._v("\n\n             Skills: Back-end · Mobile · UI · Front-end · React.js · Java · Spring Framework\n           ")])],1)],1)],1),_vm._v(" "),_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-6",modifiers:{"accordion-6":true}}],staticClass:"accordion-header",attrs:{"block":"","variant":"info"}},[_c('h2',[_vm._v("Software Developer Internship")]),_c('p',{staticClass:"p-at"},[_vm._v(" @ Proj4me")])])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-6","accordion":"my-accordion","role":"tabpanel"}},[_c('b-card-body',[_c('b-card-text',[_vm._v("\n             I worked on building and maintaining the following:\n             "),_c('br'),_c('br'),_vm._v(" "),_c('ul',[_c('li',[_vm._v("SASS to manage tasks, projects, and teams, implementing Agile principles such as scrum, kanban and\n             sprints - using JavaEE, MySQL, HTML5, CSS3, Angular2+, RESTfull HTTP Applications and Agile\n             Development process;")])]),_vm._v("\n\n             Skills: Angular · UI · Front-end · Back-end · Java · MySQL\n           ")])],1)],1)],1)],1)],1)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Experience.vue?vue&type=template&id=9f96133a&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Experience.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9f96133a",
  "30176dd8"
  
)

/* harmony default export */ var Experience = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4435567f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4435567f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4435567f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4435567f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4435567f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contact[data-v-4435567f]{height:100vh;margin-top:50rem}@media (max-width:768px){.work[data-v-4435567f]{margin-top:80rem}.contact[data-v-4435567f]{margin-top:10rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=4435567f&scoped=true
var render=function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('div',{attrs:{"id":"index"}},[_vm._ssrNode("<div id=\"home\" style=\"height: 100vh;\" data-v-4435567f>","</div>",[_c('Home')],1),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"about\" style=\"height: 100vh;\" data-v-4435567f>","</div>",[_c('About')],1),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"experience\" style=\"height: 100vh;\" data-v-4435567f>","</div>",[_c('Experience')],1),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"work\" class=\"work\" style=\"height: 100vh;\" data-v-4435567f>","</div>",[_c('Work')],1),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"contact\" class=\"contact\" data-v-4435567f>","</div>",[_c('Contact')],1)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=4435567f&scoped=true

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=ts
external_vue_default.a.use(external_bootstrap_vue_["BootstrapVueIcons"]);/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_ts = (external_vue_default.a.extend({name:'IndexPage'}));
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=ts
 /* harmony default export */ var pagesvue_type_script_lang_ts = (lib_vue_loader_options_pagesvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(98)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_ts,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4435567f",
  "1ac0ccbc"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Home: __webpack_require__(93).default,About: __webpack_require__(94).default,Experience: __webpack_require__(95).default,Work: __webpack_require__(91).default,Contact: __webpack_require__(92).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map