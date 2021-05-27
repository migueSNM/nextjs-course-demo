module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/user/Documents/trainings/nextjs/06-onwards-to-a-bigger-project-starting-project/components/meetups/MeetupDetail.js\";\n\n\nconst MeetupDetail = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.image,\n      alt: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n      children: props.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzP2YyYmYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsIiwicHJvcHMiLCJjbGFzc2VzIiwiZGV0YWlsIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzlCLHNCQUNFO0FBQVMsYUFBUyxFQUFFQywrREFBTyxDQUFDQyxNQUE1QjtBQUFBLDRCQUNFO0FBQ0UsU0FBRyxFQUFFRixLQUFLLENBQUNHLEtBRGI7QUFFRSxTQUFHLEVBQUVILEtBQUssQ0FBQ0k7QUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0U7QUFBQSxnQkFBS0osS0FBSyxDQUFDSTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRTtBQUFBLGdCQUFVSixLQUFLLENBQUNLO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFPRTtBQUFBLGdCQUFJTCxLQUFLLENBQUNNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBWkQ7O0FBY2VQLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MnXG5cbmNvbnN0IE1lZXR1cERldGFpbCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxuICAgICAgPGltZyBcbiAgICAgICAgc3JjPXtwcm9wcy5pbWFnZX1cbiAgICAgICAgYWx0PXtwcm9wcy50aXRsZX1cbiAgICAgIC8+XG4gICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XG4gICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XG4gICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"MeetupDetail_detail__C_8IT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3M/ZTY0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n\n\nvar _jsxFileName = \"/home/user/Documents/trainings/nextjs/06-onwards-to-a-bigger-project-starting-project/pages/[meetupId]/index.js\";\n\n\n\n\nconst MeetupDetails = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: props.meetup.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: props.meetup.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: props.meetup.image,\n      title: props.meetup.title,\n      description: props.meetup.description,\n      address: props.meetup.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nasync function getStaticPaths() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect('mongodb+srv://migue:rqc6ksZntgbh2MEy@cluster0.mjdgk.mongodb.net/meetups?retryWrites=true&w=majority');\n  const db = client.db();\n  const meetupsCollection = db.collection('meetups');\n  const meetups = await meetupsCollection.find({}, {\n    _id: 1\n  }).toArray();\n  client.close();\n  return {\n    fallback: false,\n    paths: meetups.map(meetup => ({\n      params: {\n        meetupId: meetup._id.toString()\n      }\n    }))\n  };\n}\nasync function getStaticProps(context) {\n  // fetch data for single meetup\n  const meetupId = context.params.meetupId;\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect('mongodb+srv://migue:rqc6ksZntgbh2MEy@cluster0.mjdgk.mongodb.net/meetups?retryWrites=true&w=majority');\n  const db = client.db();\n  const meetupsCollection = db.collection('meetups');\n  const meetup = await meetupsCollection.findOne({\n    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_2__[\"ObjectId\"])(meetupId)\n  });\n  client.close();\n  console.log({\n    meetupId\n  });\n  return {\n    props: {\n      meetup: {\n        id: meetup._id.toString(),\n        address: meetup.address,\n        title: meetup.title,\n        description: meetup.description,\n        image: meetup.image\n      }\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsInByb3BzIiwibWVldHVwIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiYWRkcmVzcyIsImdldFN0YXRpY1BhdGhzIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJtZWV0dXBzIiwiZmluZCIsIl9pZCIsInRvQXJyYXkiLCJjbG9zZSIsImZhbGxiYWNrIiwicGF0aHMiLCJtYXAiLCJwYXJhbXMiLCJtZWV0dXBJZCIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiZmluZE9uZSIsIk9iamVjdElkIiwiY29uc29sZSIsImxvZyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGFBQWEsR0FBSUMsS0FBRCxJQUFXO0FBQy9CLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxlQUFPLEVBQUVGLEtBQUssQ0FBQ0MsTUFBTixDQUFhRTtBQUZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFLHFFQUFDLHdFQUFEO0FBQ0UsV0FBSyxFQUFFSCxLQUFLLENBQUNDLE1BQU4sQ0FBYUcsS0FEdEI7QUFFRSxXQUFLLEVBQUVKLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUZ0QjtBQUdFLGlCQUFXLEVBQUVGLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxXQUg1QjtBQUlFLGFBQU8sRUFBRUgsS0FBSyxDQUFDQyxNQUFOLENBQWFJO0FBSnhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQSxrQkFERjtBQWlCRCxDQWxCRDs7QUFvQk8sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUFvQixxR0FBcEIsQ0FBckI7QUFDQSxRQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYO0FBRUEsUUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBMUI7QUFFQSxRQUFNQyxPQUFPLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLElBQWxCLENBQXVCLEVBQXZCLEVBQTJCO0FBQUNDLE9BQUcsRUFBRTtBQUFOLEdBQTNCLEVBQXFDQyxPQUFyQyxFQUF0QjtBQUVBVCxRQUFNLENBQUNVLEtBQVA7QUFFQSxTQUFPO0FBQ0xDLFlBQVEsRUFBRSxLQURMO0FBRUxDLFNBQUssRUFBRU4sT0FBTyxDQUFDTyxHQUFSLENBQVluQixNQUFNLEtBQUs7QUFBQ29CLFlBQU0sRUFBRTtBQUFDQyxnQkFBUSxFQUFFckIsTUFBTSxDQUFDYyxHQUFQLENBQVdRLFFBQVg7QUFBWDtBQUFULEtBQUwsQ0FBbEI7QUFGRixHQUFQO0FBSUQ7QUFFTSxlQUFlQyxjQUFmLENBQStCQyxPQUEvQixFQUF3QztBQUU3QztBQUVBLFFBQU1ILFFBQVEsR0FBR0csT0FBTyxDQUFDSixNQUFSLENBQWVDLFFBQWhDO0FBRUEsUUFBTWYsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FBb0IscUdBQXBCLENBQXJCO0FBQ0EsUUFBTUMsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQVAsRUFBWDtBQUVBLFFBQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQTFCO0FBRUEsUUFBTVgsTUFBTSxHQUFHLE1BQU1VLGlCQUFpQixDQUFDZSxPQUFsQixDQUEwQjtBQUFDWCxPQUFHLEVBQUVZLHdEQUFRLENBQUNMLFFBQUQ7QUFBZCxHQUExQixDQUFyQjtBQUVBZixRQUFNLENBQUNVLEtBQVA7QUFFQVcsU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ1A7QUFBRCxHQUFaO0FBQ0EsU0FBTztBQUNMdEIsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRTtBQUNONkIsVUFBRSxFQUFFN0IsTUFBTSxDQUFDYyxHQUFQLENBQVdRLFFBQVgsRUFERTtBQUVObEIsZUFBTyxFQUFFSixNQUFNLENBQUNJLE9BRlY7QUFHTkgsYUFBSyxFQUFFRCxNQUFNLENBQUNDLEtBSFI7QUFJTkMsbUJBQVcsRUFBRUYsTUFBTSxDQUFDRSxXQUpkO0FBS05DLGFBQUssRUFBRUgsTUFBTSxDQUFDRztBQUxSO0FBREg7QUFERixHQUFQO0FBV0Q7QUFFY0wsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYidcbmltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbCdcblxuY29uc3QgTWVldHVwRGV0YWlscyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwcm9wcy5tZWV0dXAudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCIgXG4gICAgICAgICAgY29udGVudD17cHJvcHMubWVldHVwLmRlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE1lZXR1cERldGFpbCBcbiAgICAgICAgaW1hZ2U9e3Byb3BzLm1lZXR1cC5pbWFnZX1cbiAgICAgICAgdGl0bGU9e3Byb3BzLm1lZXR1cC50aXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cC5kZXNjcmlwdGlvbn1cbiAgICAgICAgYWRkcmVzcz17cHJvcHMubWVldHVwLmFkZHJlc3N9XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9taWd1ZTpycWM2a3NabnRnYmgyTUV5QGNsdXN0ZXIwLm1qZGdrLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JylcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKVxuXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXG5cbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHtfaWQ6IDF9KS50b0FycmF5KClcblxuICBjbGllbnQuY2xvc2UoKVxuXG4gIHJldHVybiB7XG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIHBhdGhzOiBtZWV0dXBzLm1hcChtZWV0dXAgPT4gKHtwYXJhbXM6IHttZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpfX0pKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyAoY29udGV4dCkge1xuICBcbiAgLy8gZmV0Y2ggZGF0YSBmb3Igc2luZ2xlIG1lZXR1cFxuXG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWRcblxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL21pZ3VlOnJxYzZrc1pudGdiaDJNRXlAY2x1c3RlcjAubWpkZ2subW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKVxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpXG5cbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcblxuICBjb25zdCBtZWV0dXAgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHtfaWQ6IE9iamVjdElkKG1lZXR1cElkKX0pXG5cbiAgY2xpZW50LmNsb3NlKClcblxuICBjb25zb2xlLmxvZyh7bWVldHVwSWR9KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZWV0dXA6IHtcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBtZWV0dXAuZGVzY3JpcHRpb24sXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });