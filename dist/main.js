/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ \"./src/library.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n(0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('h1', 'content', 'To Do List');\n(0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('div', 'content', null, [['id', 'container'], ['class', 'container']]);\n(0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('div', 'container', null, [['id', 'project-container']]);\n(0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('div', 'container', null, [['id', 'todo-container']]);\n(0,_project__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();\n(0,_project__WEBPACK_IMPORTED_MODULE_1__.loadProject)('Default');\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"el\": () => (/* binding */ el),\n/* harmony export */   \"nodeEl\": () => (/* binding */ nodeEl)\n/* harmony export */ });\nconst el = (type, parent, content, attr, cb) => {\n  const node = document.createElement(type);\n  if (attr) {\n    for (let i = 0; i < attr.length; i += 1) {\n      node.setAttribute(attr[i][0], attr[i][1]);\n    }\n  }\n  if (content) node.appendChild(document.createTextNode(content));\n  document.getElementById(parent).appendChild(node);\n  if (cb) {\n    cb(node);\n  }\n}\n\nconst nodeEl = (node, content) => {\n  const childNode = document.createElement(content[0]);\n  if (content[1]) childNode.appendChild(document.createTextNode(content[1]));\n  if (content[2]) {\n    for (let i = 0; i < content[i][2].length; i += 1) {\n      childNode.setAttribute(content[2][i][0], content[2][i][1]);\n    }\n  }\n  node.appendChild(childNode);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/library.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadProject\": () => (/* reexport safe */ _todo__WEBPACK_IMPORTED_MODULE_1__.loadProject),\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects)\n/* harmony export */ });\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ \"./src/library.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\nconst addProject = (e) => {\n  e.preventDefault();\n  const val = e.target.elements['project-name'].value;\n  if (val) {\n    _todo__WEBPACK_IMPORTED_MODULE_1__.projects[val] = [];\n    (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('li', 'project-list', val, null, (node) => {\n      node.addEventListener('click', () => { (0,_todo__WEBPACK_IMPORTED_MODULE_1__.loadProject)(val); });\n    });\n    localStorage.projects = JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_1__.projects);\n    e.target.elements['project-name'].value = '';\n  }\n}\n\nconst displayProjects = () => {\n  ;(0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('h2', 'project-container', 'Project List');\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('ul', 'project-container', null, [['id', 'project-list']]);\n\n  for (let i = 0, keys = Object.keys(_todo__WEBPACK_IMPORTED_MODULE_1__.projects); i < keys.length; i += 1) {\n    (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('li', 'project-list', keys[i], [['style', 'cursor: pointer;']], (node) => {\n      node.addEventListener('click', () => { (0,_todo__WEBPACK_IMPORTED_MODULE_1__.loadProject)(keys[i]); });\n    });\n  }\n\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('form', 'project-container', null, [['id', 'new-project-form']], (node) => {\n    node.addEventListener('submit', (e) => { addProject(e); });\n  });\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('input', 'new-project-form', null, [['type', 'text'], ['name', 'project-name'], ['placeholder', 'Type new project name and press Enter'], ['required', true]]);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadProject\": () => (/* binding */ loadProject),\n/* harmony export */   \"displayTodo\": () => (/* binding */ displayTodo),\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ \"./src/library.js\");\n\n\nconst projects = JSON.parse(localStorage.projects || '{ \"Default\": [] }');\n\nlet project;\nlet projectName;\nlet formDisplay = false;\n\nconst loadProject = (project) => {\n  document.getElementById('todo-container').innerHTML = '';\n  // eslint-disable-next-line no-use-before-define\n  displayTodo(project, projects[project]);\n}\n\nclass Todo {\n  constructor(title, description, priority, date) {\n    this.title = title;\n    this.description = description;\n    this.priority = priority;\n    this.date = date;\n  }\n}\n\nconst addTodo = (e, index) => {\n  e.preventDefault();\n  const { elements } = e.target;\n  const val = new Todo(\n    elements.title.value,\n    elements.description.value,\n    elements.priority.value,\n    elements.date.value,\n  );\n  if (elements) {\n    if (index || index === 0) {\n      project[index] = val;\n    } else {\n      project.push(val);\n    }\n    projects[projectName] = project;\n    localStorage.projects = JSON.stringify(projects);\n    loadProject(projectName);\n  }\n}\n\nconst deleteTodo = (index) => {\n  project.splice(index, 1);\n  projects[projectName] = project;\n  localStorage.projects = JSON.stringify(projects);\n  loadProject(projectName);\n}\n\nconst loadTodoForm = (data, index) => {\n  const form = document.getElementById('todo-form');\n  if (form) form.remove();\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('form', 'todo-container', null, [['id', 'todo-form'], ['class', 'todo-form']], (node) => {\n    node.addEventListener('submit', (e) => { addTodo(e, index); });\n  });\n  if (data) {\n    formDisplay = true;\n  } else {\n    formDisplay = !formDisplay;\n  }\n  if (formDisplay) {\n    (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('h2', 'todo-form', data ? data.title : 'New ToDo');\n    (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('input', 'todo-form', null, [['type', 'text'], ['name', 'title'], ['placeholder', 'Enter todo item title'], ['value', data ? data.title : ''], ['required', true]]);\n    (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('input', 'todo-form', null, [['type', 'text'], ['name', 'description'], ['placeholder', 'Enter todo item desciption'], ['value', data ? data.description : ''], ['required', true]]);\n    (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('input', 'todo-form', null, [['type', 'number'], ['name', 'priority'], ['placeholder', 'Enter todo item priority'], ['value', data ? data.priority : ''], ['required', true]]);\n    (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('input', 'todo-form', null, [['type', 'date'], ['name', 'date'], ['placeholder', 'Enter todo due date'], ['value', data ? data.date : ''], ['required', true]]);\n    (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('input', 'todo-form', null, [['type', 'submit'], ['value', data ? 'Update Todo' : 'Add Todo']]);\n    if (data) {\n      (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('button', 'todo-form', 'Delete Todo Item', [['type', 'button']], (node) => {\n        node.addEventListener('click', () => { deleteTodo(index); });\n      });\n    }\n  }\n}\n\nconst displayTodo = (name, list) => {\n  project = list;\n  projectName = name;\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('h2', 'todo-container', projectName);\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('div', 'todo-container', null, null, (node) => {\n    (0,_library__WEBPACK_IMPORTED_MODULE_0__.nodeEl)(node, ['b', 'Priority']);\n    (0,_library__WEBPACK_IMPORTED_MODULE_0__.nodeEl)(node, ['b', 'Title']);\n    (0,_library__WEBPACK_IMPORTED_MODULE_0__.nodeEl)(node, ['b', 'Due Date']);\n  });\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('ul', 'todo-container', null, [['id', 'todo-list']]);\n  for (let i = 0; i < list.length; i += 1) {\n    (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('li', 'todo-list', null, null, (node) => {\n      (0,_library__WEBPACK_IMPORTED_MODULE_0__.nodeEl)(node, ['span', list[i].priority]);\n      (0,_library__WEBPACK_IMPORTED_MODULE_0__.nodeEl)(node, ['span', list[i].title]);\n      (0,_library__WEBPACK_IMPORTED_MODULE_0__.nodeEl)(node, ['span', list[i].date]);\n      node.addEventListener('click', () => { loadTodoForm(list[i], i); });\n    });\n  }\n  (0,_library__WEBPACK_IMPORTED_MODULE_0__.el)('button', 'todo-container', 'New Todo', null, (node) => {\n    node.addEventListener('click', () => { loadTodoForm(); });\n  });\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;