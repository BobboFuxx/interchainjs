"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/model-receipt.tsx":
/*!**************************************!*\
  !*** ./components/model-receipt.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalReceiptView\": function() { return /* binding */ ModalReceiptView; }\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"../../node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"../../node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"../../node_modules/@loadable/component/dist/loadable.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\nvar ReactJson = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_c = function _c() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-json-view_dist_main_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-json-view */ \"../../node_modules/react-json-view/dist/main.js\", 23));\n});\n_c1 = ReactJson;\nvar ModalReceiptView = function ModalReceiptView(_ref) {\n    var _fee$amount, _fee, _fee$denom, _fee2;\n    var receipt = _ref.receipt;\n    if (receipt == void 0) {\n        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {\n                    children: \"Sign & Broadcast\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalCloseButton, {}),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spinner, {\n                        thickness: \"4px\",\n                        speed: \"0.65s\",\n                        emptyColor: \"gray.200\",\n                        color: \"teal.500\",\n                        size: \"xl\",\n                        margin: \"auto\"\n                    })\n                })\n            ]\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {\n                children: \"Sign & Broadcast\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalCloseButton, {}),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h6\",\n                        size: \"xs\",\n                        marginBottom: 5,\n                        children: \"Messages\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ReactJson, {\n                        src: msgs,\n                        iconStyle: \"square\",\n                        displayDataTypes: false,\n                        enableClipboard: false,\n                        displayObjectSize: false,\n                        collapseStringsAfterLength: 60\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h6\",\n                        size: \"xs\",\n                        marginY: 5,\n                        children: \"Estimated Fee\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                        direction: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Code, {\n                                colorScheme: \"green\",\n                                children: \"\".concat(gas, \" gas\")\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Code, {\n                                colorScheme: \"yellow\",\n                                children: \"~ \".concat((_fee$amount = (_fee = fee) === null || _fee === void 0 ? void 0 : _fee.amount) !== null && _fee$amount !== void 0 ? _fee$amount : \"--\", \" \").concat((_fee$denom = (_fee2 = fee) === null || _fee2 === void 0 ? void 0 : _fee2.denom) !== null && _fee$denom !== void 0 ? _fee$denom : \"\")\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                fontSize: \"xs\",\n                                color: \"grey\",\n                                children: \"(1 gas = \".concat(gasPrice.amount, \" \").concat(gasPrice.denom, \")\")\n                            })\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, {\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    colorScheme: \"twitter\",\n                    size: \"sm\",\n                    rightIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.ArrowForwardIcon, {}),\n                    onClick: onClick,\n                    children: \"Sign & Broadcast\"\n                })\n            })\n        ]\n    });\n};\n_c2 = ModalReceiptView;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ReactJson$loadable\");\n$RefreshReg$(_c1, \"ReactJson\");\n$RefreshReg$(_c2, \"ModalReceiptView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUgsTUFBQSxDQUFBTSxRQUFBLENBQUFGLEtBQUE7NkJBQ0Q7eUJBQUE7cUJBQ0U7aUJBQUE7YUFDQTtZQUFBLGNBQUFsQyxzREFBQSxDQUFBUix5REFDVDtnQkFBTW1CLFFBQ0wsYUFBWSxHQUFBWCxzREFBUyxDQUFBZCxvREFBQTtvQkFDckIyQyxXQUFXO29CQUNYYixJQUFBLE1BQVM7b0JBQ1RxQixTQUFTLGFBQVEsR0FBQXJDLHNEQUFBLENBQUFmLDhEQUFBO29CQUFBcUQsT0FBQSxFQUFBQSxPQUNsQjtvQkFFTzNCLFFBQUE7aUJBQ0k7YUFDRDtTQUFBO0tBRWxCO0FBQUE7QUE3RDBFUCxNQUFBQSxnQkFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vZGVsLXJlY2VpcHQudHN4PzkyNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJyb3dGb3J3YXJkSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5pbXBvcnQgeyBCdXR0b24sIENvZGUsIEhlYWRpbmcsIE1vZGFsQm9keSwgTW9kYWxDbG9zZUJ1dHRvbiwgTW9kYWxDb250ZW50LCBNb2RhbEZvb3RlciwgTW9kYWxIZWFkZXIsIFNwaW5uZXIsIFN0YWNrLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBsb2FkYWJsZSBmcm9tIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbnZhciBSZWFjdEpzb24gPSBsb2FkYWJsZShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpbXBvcnQoXCJyZWFjdC1qc29uLXZpZXdcIik7XG59KTtcbmV4cG9ydCB2YXIgTW9kYWxSZWNlaXB0VmlldyA9IGZ1bmN0aW9uIE1vZGFsUmVjZWlwdFZpZXcoX3JlZikge1xuICB2YXIgX2ZlZSRhbW91bnQsIF9mZWUsIF9mZWUkZGVub20sIF9mZWUyO1xuICB2YXIgcmVjZWlwdCA9IF9yZWYucmVjZWlwdDtcbiAgaWYgKHJlY2VpcHQgPT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4cyhNb2RhbENvbnRlbnQsIHtcbiAgICAgIGNoaWxkcmVuOiBbLyojX19QVVJFX18qL19qc3goTW9kYWxIZWFkZXIsIHtcbiAgICAgICAgY2hpbGRyZW46IFwiU2lnbiAmIEJyb2FkY2FzdFwiXG4gICAgICB9KSwgLyojX19QVVJFX18qL19qc3goTW9kYWxDbG9zZUJ1dHRvbiwge30pLCAvKiNfX1BVUkVfXyovX2pzeChNb2RhbEJvZHksIHtcbiAgICAgICAgY2hpbGRyZW46IC8qI19fUFVSRV9fKi9fanN4KFNwaW5uZXIsIHtcbiAgICAgICAgICB0aGlja25lc3M6IFwiNHB4XCIsXG4gICAgICAgICAgc3BlZWQ6IFwiMC42NXNcIixcbiAgICAgICAgICBlbXB0eUNvbG9yOiBcImdyYXkuMjAwXCIsXG4gICAgICAgICAgY29sb3I6IFwidGVhbC41MDBcIixcbiAgICAgICAgICBzaXplOiBcInhsXCIsXG4gICAgICAgICAgbWFyZ2luOiBcImF1dG9cIlxuICAgICAgICB9KVxuICAgICAgfSldXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4cyhNb2RhbENvbnRlbnQsIHtcbiAgICBjaGlsZHJlbjogWy8qI19fUFVSRV9fKi9fanN4KE1vZGFsSGVhZGVyLCB7XG4gICAgICBjaGlsZHJlbjogXCJTaWduICYgQnJvYWRjYXN0XCJcbiAgICB9KSwgLyojX19QVVJFX18qL19qc3goTW9kYWxDbG9zZUJ1dHRvbiwge30pLCAvKiNfX1BVUkVfXyovX2pzeHMoTW9kYWxCb2R5LCB7XG4gICAgICBjaGlsZHJlbjogWy8qI19fUFVSRV9fKi9fanN4KEhlYWRpbmcsIHtcbiAgICAgICAgYXM6IFwiaDZcIixcbiAgICAgICAgc2l6ZTogXCJ4c1wiLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDUsXG4gICAgICAgIGNoaWxkcmVuOiBcIk1lc3NhZ2VzXCJcbiAgICAgIH0pLCAvKiNfX1BVUkVfXyovX2pzeChSZWFjdEpzb24sIHtcbiAgICAgICAgc3JjOiBtc2dzLFxuICAgICAgICBpY29uU3R5bGU6IFwic3F1YXJlXCIsXG4gICAgICAgIGRpc3BsYXlEYXRhVHlwZXM6IGZhbHNlLFxuICAgICAgICBlbmFibGVDbGlwYm9hcmQ6IGZhbHNlLFxuICAgICAgICBkaXNwbGF5T2JqZWN0U2l6ZTogZmFsc2UsXG4gICAgICAgIGNvbGxhcHNlU3RyaW5nc0FmdGVyTGVuZ3RoOiA2MFxuICAgICAgfSksIC8qI19fUFVSRV9fKi9fanN4KEhlYWRpbmcsIHtcbiAgICAgICAgYXM6IFwiaDZcIixcbiAgICAgICAgc2l6ZTogXCJ4c1wiLFxuICAgICAgICBtYXJnaW5ZOiA1LFxuICAgICAgICBjaGlsZHJlbjogXCJFc3RpbWF0ZWQgRmVlXCJcbiAgICAgIH0pLCAvKiNfX1BVUkVfXyovX2pzeHMoU3RhY2ssIHtcbiAgICAgICAgZGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICBjaGlsZHJlbjogWy8qI19fUFVSRV9fKi9fanN4KENvZGUsIHtcbiAgICAgICAgICBjb2xvclNjaGVtZTogXCJncmVlblwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBcIlwiLmNvbmNhdChnYXMsIFwiIGdhc1wiKVxuICAgICAgICB9KSwgLyojX19QVVJFX18qL19qc3goQ29kZSwge1xuICAgICAgICAgIGNvbG9yU2NoZW1lOiBcInllbGxvd1wiLFxuICAgICAgICAgIGNoaWxkcmVuOiBcIn4gXCIuY29uY2F0KChfZmVlJGFtb3VudCA9IChfZmVlID0gZmVlKSA9PT0gbnVsbCB8fCBfZmVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmVlLmFtb3VudCkgIT09IG51bGwgJiYgX2ZlZSRhbW91bnQgIT09IHZvaWQgMCA/IF9mZWUkYW1vdW50IDogXCItLVwiLCBcIiBcIikuY29uY2F0KChfZmVlJGRlbm9tID0gKF9mZWUyID0gZmVlKSA9PT0gbnVsbCB8fCBfZmVlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2ZlZTIuZGVub20pICE9PSBudWxsICYmIF9mZWUkZGVub20gIT09IHZvaWQgMCA/IF9mZWUkZGVub20gOiBcIlwiKVxuICAgICAgICB9KSwgLyojX19QVVJFX18qL19qc3goVGV4dCwge1xuICAgICAgICAgIGZvbnRTaXplOiBcInhzXCIsXG4gICAgICAgICAgY29sb3I6IFwiZ3JleVwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBcIigxIGdhcyA9IFwiLmNvbmNhdChnYXNQcmljZS5hbW91bnQsIFwiIFwiKS5jb25jYXQoZ2FzUHJpY2UuZGVub20sIFwiKVwiKVxuICAgICAgICB9KV1cbiAgICAgIH0pXVxuICAgIH0pLCAvKiNfX1BVUkVfXyovX2pzeChNb2RhbEZvb3Rlciwge1xuICAgICAgY2hpbGRyZW46IC8qI19fUFVSRV9fKi9fanN4KEJ1dHRvbiwge1xuICAgICAgICBjb2xvclNjaGVtZTogXCJ0d2l0dGVyXCIsXG4gICAgICAgIHNpemU6IFwic21cIixcbiAgICAgICAgcmlnaHRJY29uOiAvKiNfX1BVUkVfXyovX2pzeChBcnJvd0ZvcndhcmRJY29uLCB7fSksXG4gICAgICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgICAgIGNoaWxkcmVuOiBcIlNpZ24gJiBCcm9hZGNhc3RcIlxuICAgICAgfSlcbiAgICB9KV1cbiAgfSk7XG59OyJdLCJuYW1lcyI6WyJBcnJvd0ZvcndhcmRJY29uIiwiQnV0dG9uIiwiQ29kZSIsIkhlYWRpbmciLCJNb2RhbEJvZHkiLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxDb250ZW50IiwiTW9kYWxGb290ZXIiLCJNb2RhbEhlYWRlciIsIlNwaW5uZXIiLCJTdGFjayIsIlRleHQiLCJsb2FkYWJsZSIsIlJlYWN0IiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIlJlYWN0SnNvbiIsIk1vZGFsUmVjZWlwdFZpZXciLCJfcmVmIiwiX2ZlZSRhbW91bnQiLCJfZmVlIiwiX2ZlZSRkZW5vbSIsIl9mZWUyIiwicmVjZWlwdCIsImNoaWxkcmVuIiwidGhpY2tuZXNzIiwic3BlZWQiLCJlbXB0eUNvbG9yIiwiY29sb3IiLCJzaXplIiwibWFyZ2luIiwiYXMiLCJtYXJnaW5Cb3R0b20iLCJzcmMiLCJtc2dzIiwiaWNvblN0eWxlIiwiZGlzcGxheURhdGFUeXBlcyIsImVuYWJsZUNsaXBib2FyZCIsImRpc3BsYXlPYmplY3RTaXplIiwiY29sbGFwc2VTdHJpbmdzQWZ0ZXJMZW5ndGgiLCJtYXJnaW5ZIiwiZGlyZWN0aW9uIiwiY29sb3JTY2hlbWUiLCJjb25jYXQiLCJnYXMiLCJmZWUiLCJhbW91bnQiLCJkZW5vbSIsImZvbnRTaXplIiwiZ2FzUHJpY2UiLCJyaWdodEljb24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/model-receipt.tsx\n"));

/***/ })

});