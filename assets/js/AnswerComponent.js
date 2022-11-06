/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/public/js/AnswerComponent.js":
/*!******************************************!*\
  !*** ./src/public/js/AnswerComponent.js ***!
  \******************************************/
/***/ (() => {

eval("const componentMake = document.querySelector(\".action__component-make\");\nconst componentShare = document.querySelector(\".action__component-share\");\nasync function getData() {\n  let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  const response = await fetch(url, {\n    headers: {\n      'Content-Type': 'application/json'\n      // 'Content-Type': 'application/x-www-form-urlencoded',\n    }\n  });\n\n  return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱\n}\n\nconst moveBtn = async () => {\n  location.href = '/';\n};\nconst shareBtn = async () => {\n  let url = '';\n  const textarea = document.createElement('textarea');\n  document.body.appendChild(textarea);\n  url = window.document.location.href;\n  const sendUrl = url + \"/share\";\n  let questionId = await getData(sendUrl);\n  const returnUrl = window.document.location.origin + \"/question/\" + questionId.questionId;\n  textarea.value = returnUrl;\n  textarea.select();\n  document.execCommand('copy');\n  document.body.removeChild(textarea);\n};\nif (componentMake) {\n  componentMake.addEventListener(\"click\", moveBtn);\n}\nif (componentShare) {\n  componentShare.addEventListener(\"click\", shareBtn);\n}\n\n//# sourceURL=webpack://qnaproject/./src/public/js/AnswerComponent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/public/js/AnswerComponent.js"]();
/******/ 	
/******/ })()
;