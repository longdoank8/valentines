"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/index.mjs\");\n\n\nconst styles = {\n    global: (props)=>({\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#e8cba7\", \"#FD8B7E\")(props)\n            }\n        })\n};\nconst components = {\n    Heading: {\n        variants: {\n            \"section-title\": {\n                textDecoration: \"underline\",\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#FD8B7E\",\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        basestyle: (props)=>({\n                color: modemode(\"#3d7aed\", \"#ff63c3\")(props),\n                textUnderlineOffset: 3\n            })\n    }\n};\nconst fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nconst colors = {\n    grassTeal: \"#88ccca\"\n};\nconst config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: false\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config,\n    styles,\n    components,\n    fonts,\n    colors\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQThDO0FBQ0Q7QUFFN0MsTUFBTUUsU0FBUztJQUNYQyxRQUFRQyxDQUFBQSxRQUFVO1lBQ2RDLE1BQU07Z0JBQ0ZDLElBQUlMLDREQUFJQSxDQUFDLFdBQVcsV0FBV0c7WUFDbkM7UUFDSjtBQUNKO0FBRUEsTUFBTUcsYUFBYTtJQUNmQyxTQUFTO1FBQ0xDLFVBQVU7WUFDTixpQkFBaUI7Z0JBQ2JDLGdCQUFnQjtnQkFDaEJDLFVBQVU7Z0JBQ1ZDLHFCQUFxQjtnQkFDckJDLHFCQUFxQjtnQkFDckJDLHlCQUF5QjtnQkFDekJDLFdBQVc7Z0JBQ1hDLGNBQWM7WUFDbEI7UUFDSjtJQUNKO0lBQ0FDLE1BQU07UUFDRkMsV0FBV2QsQ0FBQUEsUUFBVTtnQkFDakJlLE9BQU9DLFNBQVMsV0FBVyxXQUFXaEI7Z0JBQ3RDUSxxQkFBcUI7WUFDekI7SUFDSjtBQUNKO0FBRUEsTUFBTVMsUUFBUTtJQUNWQyxTQUFTO0FBQ1g7QUFFQSxNQUFNQyxTQUFTO0lBQ2JDLFdBQVc7QUFDYjtBQUVBLE1BQU1DLFNBQVM7SUFDYkMsa0JBQWtCO0lBQ2xCQyxvQkFBb0IsS0FBSztBQUMzQjtBQUVBLE1BQU1DLFFBQVE1Qiw2REFBV0EsQ0FBQztJQUFFeUI7SUFBUXZCO0lBQVFLO0lBQVljO0lBQU9FO0FBQU87QUFDdEUsK0RBQWVLLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLmpzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBnbG9iYWw6IHByb3BzID0+ICh7XG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIGJnOiBtb2RlKCcjZThjYmE3JywgJyNGRDhCN0UnKShwcm9wcylcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gICAgSGVhZGluZzoge1xuICAgICAgICB2YXJpYW50czoge1xuICAgICAgICAgICAgJ3NlY3Rpb24tdGl0bGUnOiB7XG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiA2LFxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6ICcjRkQ4QjdFJyxcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzczogNCxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIExpbms6IHtcbiAgICAgICAgYmFzZXN0eWxlOiBwcm9wcyA9PiAoe1xuICAgICAgICAgICAgY29sb3I6IG1vZGVtb2RlKCcjM2Q3YWVkJywgJyNmZjYzYzMnKShwcm9wcyksXG4gICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiAzXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCBmb250cyA9IHtcbiAgICBoZWFkaW5nOiBcIidNIFBMVVMgUm91bmRlZCAxYydcIlxuICB9XG4gIFxuICBjb25zdCBjb2xvcnMgPSB7XG4gICAgZ3Jhc3NUZWFsOiAnIzg4Y2NjYSdcbiAgfVxuICBcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGluaXRpYWxDb2xvck1vZGU6ICdkYXJrJyxcbiAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IGZhbHNlXG4gIH1cbiAgXG4gIGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoeyBjb25maWcsIHN0eWxlcywgY29tcG9uZW50cywgZm9udHMsIGNvbG9ycyB9KVxuICBleHBvcnQgZGVmYXVsdCB0aGVtZVxuICAiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJtb2RlIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJib2R5IiwiYmciLCJjb21wb25lbnRzIiwiSGVhZGluZyIsInZhcmlhbnRzIiwidGV4dERlY29yYXRpb24iLCJmb250U2l6ZSIsInRleHRVbmRlcmxpbmVPZmZzZXQiLCJ0ZXh0RGVjb3JhdGlvbkNvbG9yIiwidGV4dERlY29yYXRpb25UaGlja25lc3MiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJMaW5rIiwiYmFzZXN0eWxlIiwiY29sb3IiLCJtb2RlbW9kZSIsImZvbnRzIiwiaGVhZGluZyIsImNvbG9ycyIsImdyYXNzVGVhbCIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/theme.js\n"));

/***/ })

});