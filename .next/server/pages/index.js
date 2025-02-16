/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%5Cindex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%5Cindex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./pages/_document.js\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var _pages_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\index.js */ \"./pages/index.js\");\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/index\",\n        pathname: \"/\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    userland: _pages_index_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUNpbmRleC5qcyZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Y7QUFDaEM7QUFDRTtBQUMxRDtBQUN5RDtBQUNWO0FBQy9DO0FBQzhDO0FBQzlDO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyw0Q0FBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyx1QkFBdUIsd0VBQUssQ0FBQyw0Q0FBUTtBQUNyQyx1QkFBdUIsd0VBQUssQ0FBQyw0Q0FBUTtBQUNyQywyQkFBMkIsd0VBQUssQ0FBQyw0Q0FBUTtBQUN6QyxlQUFlLHdFQUFLLENBQUMsNENBQVE7QUFDN0Isd0JBQXdCLHdFQUFLLENBQUMsNENBQVE7QUFDN0M7QUFDTyxnQ0FBZ0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUM5QyxnQ0FBZ0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUM5QyxpQ0FBaUMsd0VBQUssQ0FBQyw0Q0FBUTtBQUMvQyxnQ0FBZ0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUM5QyxvQ0FBb0Msd0VBQUssQ0FBQyw0Q0FBUTtBQUN6RDtBQUNPLHdCQUF3QixrR0FBZ0I7QUFDL0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsOERBQVc7QUFDeEIsa0JBQWtCLG1FQUFnQjtBQUNsQyxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc1JvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9wYWdlcy9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSBhcHAgYW5kIGRvY3VtZW50IG1vZHVsZXMuXG5pbXBvcnQgKiBhcyBkb2N1bWVudCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19kb2N1bWVudFwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcFwiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcaW5kZXguanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgY29tcG9uZW50IChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCAnZGVmYXVsdCcpO1xuLy8gUmUtZXhwb3J0IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFN0YXRpY1Byb3BzJyk7XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFN0YXRpY1BhdGhzJyk7XG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTZXJ2ZXJTaWRlUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgJ2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IGhvaXN0KHVzZXJsYW5kLCAncmVwb3J0V2ViVml0YWxzJyk7XG4vLyBSZS1leHBvcnQgbGVnYWN5IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1Byb3BzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhdGhzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcycpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVMsXG4gICAgICAgIHBhZ2U6IFwiL2luZGV4XCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIC8vIGRlZmF1bHQgZXhwb3J0IG1pZ2h0IG5vdCBleGlzdCB3aGVuIG9wdGltaXplZCBmb3IgZGF0YSBvbmx5XG4gICAgICAgIEFwcDogYXBwLmRlZmF1bHQsXG4gICAgICAgIERvY3VtZW50OiBkb2N1bWVudC5kZWZhdWx0XG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%5Cindex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./components/SideNavbar.js":
/*!**********************************!*\
  !*** ./components/SideNavbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SideNavbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Home */ \"./node_modules/@mui/icons-material/esm/Home.js\");\n/* harmony import */ var _mui_icons_material_Receipt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Receipt */ \"./node_modules/@mui/icons-material/esm/Receipt.js\");\n/* harmony import */ var _mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ListAlt */ \"./node_modules/@mui/icons-material/esm/ListAlt.js\");\n/* harmony import */ var _mui_icons_material_CalendarToday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/CalendarToday */ \"./node_modules/@mui/icons-material/esm/CalendarToday.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"./node_modules/@mui/icons-material/esm/Menu.js\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Close */ \"./node_modules/@mui/icons-material/esm/Close.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst navItems = [\n    {\n        href: '/',\n        label: 'Dashboard',\n        icon: _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    // { href: '/about', label: 'About Us', icon: InfoIcon },\n    // { href: '/contact', label: 'Contact', icon: ContactMailIcon },\n    {\n        href: '/invoice',\n        label: 'Create New Invoice',\n        icon: _mui_icons_material_Receipt__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        href: '/all-invoices',\n        label: 'All Invoices',\n        icon: _mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        href: '/calendar',\n        label: 'Calendar',\n        icon: _mui_icons_material_CalendarToday__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        href: '/delivery-status',\n        label: 'Delivery Status',\n        icon: _mui_icons_material_Receipt__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }\n];\nfunction SideNavbar() {\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleMenu = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-full lg:h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:hidden fixed top-0 left-0 p-4 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: toggleMenu,\n                    className: \"focus:outline-none\",\n                    children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        className: \"text-blue-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        className: \"text-blue-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                        lineNumber: 33,\n                        columnNumber: 63\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `${isOpen ? 'block' : 'hidden'} lg:flex lg:flex-col fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 shadow-xl z-40`,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-extrabold mb-8 flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    className: \"mr-2 text-white\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this),\n                                \"Invoice Dashboard\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex-grow\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: navItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"mb-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: item.href,\n                                            legacyBehavior: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"flex items-center text-lg p-2 rounded transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {\n                                                        className: \"mr-2 text-white\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    item.label\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                            className: \"text-center text-sm mt-auto opacity-80\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"\\xa9 2025 CIS SERVICES. All rights reserved.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\components\\\\SideNavbar.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVOYXZiYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDSjtBQUNtQjtBQUNBO0FBQ2M7QUFDUjtBQUNBO0FBQ1k7QUFDbEI7QUFDRTtBQUVsRCxNQUFNVSxXQUFXO0lBQ2Y7UUFBRUMsTUFBTTtRQUFLQyxPQUFPO1FBQWFDLE1BQU1YLGdFQUFRQTtJQUFDO0lBQ2hELHlEQUF5RDtJQUN6RCxpRUFBaUU7SUFDakU7UUFBRVMsTUFBTTtRQUFZQyxPQUFPO1FBQXNCQyxNQUFNUixtRUFBV0E7SUFBQztJQUNuRTtRQUFFTSxNQUFNO1FBQWlCQyxPQUFPO1FBQWdCQyxNQUFNUCxtRUFBV0E7SUFBQztJQUNsRTtRQUFFSyxNQUFNO1FBQWFDLE9BQU87UUFBWUMsTUFBTU4seUVBQWlCQTtJQUFDO0lBQ2hFO1FBQUVJLE1BQU07UUFBb0JDLE9BQU87UUFBbUJDLE1BQU1SLG1FQUFXQTtJQUFDO0NBQ3pFO0FBRWMsU0FBU1M7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNaUIsYUFBYTtRQUNqQkQsVUFBVSxDQUFDRDtJQUNiO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQU9DLFNBQVNKO29CQUFZRSxXQUFVOzhCQUNwQ0osdUJBQVMsOERBQUNOLGlFQUFTQTt3QkFBQ1UsV0FBVTs7Ozs7NkNBQXFCLDhEQUFDWCxnRUFBUUE7d0JBQUNXLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzVFLDhEQUFDRDtnQkFBSUMsV0FBVyxHQUFHSixTQUFTLFVBQVUsU0FBUyw0SEFBNEgsQ0FBQzswQkFDMUssNEVBQUNHO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQUdILFdBQVU7OzhDQUNaLDhEQUFDakIsZ0VBQVFBO29DQUFDaUIsV0FBVTs7Ozs7O2dDQUFvQjs7Ozs7OztzQ0FHMUMsOERBQUNJOzRCQUFJSixXQUFVO3NDQUNiLDRFQUFDSzswQ0FDRWQsU0FBU2UsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNuQiw4REFBQ0M7d0NBQWVULFdBQVU7a0RBQ3hCLDRFQUFDbEIsa0RBQUlBOzRDQUFDVSxNQUFNZSxLQUFLZixJQUFJOzRDQUFFa0IsY0FBYztzREFDbkMsNEVBQUNDO2dEQUFFWCxXQUFVOztrRUFDWCw4REFBQ08sS0FBS2IsSUFBSTt3REFBQ00sV0FBVTs7Ozs7O29EQUNwQk8sS0FBS2QsS0FBSzs7Ozs7Ozs7Ozs7O3VDQUpSZTs7Ozs7Ozs7Ozs7Ozs7O3NDQVdmLDhEQUFDSTs0QkFBT1osV0FBVTtzQ0FDaEIsNEVBQUNhOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWYiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUklTSElcXERlc2t0b3BcXEludm9pY2luZ1xcaW52b2ljZVxcY29tcG9uZW50c1xcU2lkZU5hdmJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0hvbWUnO1xyXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9JbmZvJztcclxuaW1wb3J0IENvbnRhY3RNYWlsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NvbnRhY3RNYWlsJztcclxuaW1wb3J0IFJlY2VpcHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUmVjZWlwdCc7XHJcbmltcG9ydCBMaXN0QWx0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xpc3RBbHQnO1xyXG5pbXBvcnQgQ2FsZW5kYXJUb2RheUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYWxlbmRhclRvZGF5JztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcblxyXG5jb25zdCBuYXZJdGVtcyA9IFtcclxuICB7IGhyZWY6ICcvJywgbGFiZWw6ICdEYXNoYm9hcmQnLCBpY29uOiBIb21lSWNvbiB9LFxyXG4gIC8vIHsgaHJlZjogJy9hYm91dCcsIGxhYmVsOiAnQWJvdXQgVXMnLCBpY29uOiBJbmZvSWNvbiB9LFxyXG4gIC8vIHsgaHJlZjogJy9jb250YWN0JywgbGFiZWw6ICdDb250YWN0JywgaWNvbjogQ29udGFjdE1haWxJY29uIH0sXHJcbiAgeyBocmVmOiAnL2ludm9pY2UnLCBsYWJlbDogJ0NyZWF0ZSBOZXcgSW52b2ljZScsIGljb246IFJlY2VpcHRJY29uIH0sXHJcbiAgeyBocmVmOiAnL2FsbC1pbnZvaWNlcycsIGxhYmVsOiAnQWxsIEludm9pY2VzJywgaWNvbjogTGlzdEFsdEljb24gfSxcclxuICB7IGhyZWY6ICcvY2FsZW5kYXInLCBsYWJlbDogJ0NhbGVuZGFyJywgaWNvbjogQ2FsZW5kYXJUb2RheUljb24gfSxcclxuICB7IGhyZWY6ICcvZGVsaXZlcnktc3RhdHVzJywgbGFiZWw6ICdEZWxpdmVyeSBTdGF0dXMnLCBpY29uOiBSZWNlaXB0SWNvbiB9LCAgLy8gTmV3IGxpbmtcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVOYXZiYXIoKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtZnVsbCBsZzpoLXNjcmVlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmhpZGRlbiBmaXhlZCB0b3AtMCBsZWZ0LTAgcC00IHotNTBcIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAge2lzT3BlbiA/IDxDbG9zZUljb24gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiIC8+IDogPE1lbnVJY29uIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIiAvPn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpc09wZW4gPyAnYmxvY2snIDogJ2hpZGRlbid9IGxnOmZsZXggbGc6ZmxleC1jb2wgZml4ZWQgdG9wLTAgbGVmdC0wIGgtZnVsbCB3LTY0IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ibHVlLTYwMCB0by1ibHVlLTgwMCB0ZXh0LXdoaXRlIHAtNiBzaGFkb3cteGwgei00MGB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLWZ1bGxcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWV4dHJhYm9sZCBtYi04IGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxIb21lSWNvbiBjbGFzc05hbWU9XCJtci0yIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgICBJbnZvaWNlIERhc2hib2FyZFxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7bmF2SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfSBsZWdhY3lCZWhhdmlvcj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWxnIHAtMiByb3VuZGVkIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOmJnLWJsdWUtNTAwIGhvdmVyOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwibXItMiB0ZXh0LXdoaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIG10LWF1dG8gb3BhY2l0eS04MFwiPlxyXG4gICAgICAgICAgICA8cD7CqSAyMDI1IENJUyBTRVJWSUNFUy4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJIb21lSWNvbiIsIkluZm9JY29uIiwiQ29udGFjdE1haWxJY29uIiwiUmVjZWlwdEljb24iLCJMaXN0QWx0SWNvbiIsIkNhbGVuZGFyVG9kYXlJY29uIiwiTWVudUljb24iLCJDbG9zZUljb24iLCJuYXZJdGVtcyIsImhyZWYiLCJsYWJlbCIsImljb24iLCJTaWRlTmF2YmFyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlTWVudSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsIm5hdiIsInVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJsZWdhY3lCZWhhdmlvciIsImEiLCJmb290ZXIiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SideNavbar.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\_app.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUVmLFNBQVNBLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQU8sOERBQUNEO1FBQVcsR0FBR0MsU0FBUzs7Ozs7O0FBQ2pDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFJJU0hJXFxEZXNrdG9wXFxJbnZvaWNpbmdcXGludm9pY2VcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG4iXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Document() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\_document.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\_document.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                className: \"antialiased\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\_document.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\_document.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\_document.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\_document.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZEO0FBRTlDLFNBQVNJO0lBQ3RCLHFCQUNFLDhEQUFDSiwrQ0FBSUE7UUFBQ0ssTUFBSzs7MEJBQ1QsOERBQUNKLCtDQUFJQTswQkFDSCw0RUFBQ0s7b0JBQUtDLEtBQUk7b0JBQWFDLE1BQUs7Ozs7Ozs7Ozs7OzBCQUU5Qiw4REFBQ0M7Z0JBQUtDLFdBQVU7O2tDQUNkLDhEQUFDUiwrQ0FBSUE7Ozs7O2tDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5CIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFJJU0hJXFxEZXNrdG9wXFxJbnZvaWNpbmdcXGludm9pY2VcXHBhZ2VzXFxfZG9jdW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50KCkge1xuICByZXR1cm4gKFxuICAgIDxIdG1sIGxhbmc9XCJlblwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA3MDAmZGlzcGxheT1zd2FwXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImFudGlhbGlhc2VkXCI+XG4gICAgICAgIDxNYWluIC8+XG4gICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9IdG1sPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJEb2N1bWVudCIsImxhbmciLCJsaW5rIiwicmVsIiwiaHJlZiIsImJvZHkiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dashboard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_SideNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SideNavbar */ \"./components/SideNavbar.js\");\n\n\n\n\nfunction Dashboard() {\n    const [deliveries, setDeliveries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [deliveryCount, setDeliveryCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [orderCount, setOrderCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Handle client-side rendering\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Dashboard.useEffect\": ()=>{\n            setIsClient(true); // Set client-side flag after the component mounts\n        }\n    }[\"Dashboard.useEffect\"], []);\n    // Fetch deliveries data from the backend\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Dashboard.useEffect\": ()=>{\n            const fetchDeliveries = {\n                \"Dashboard.useEffect.fetchDeliveries\": async ()=>{\n                    try {\n                        const response = await fetch('/api/getDeliveries');\n                        const data = await response.json();\n                        if (response.ok) {\n                            setDeliveries(data);\n                        } else {\n                            console.error('Error fetching deliveries:', data.message);\n                        }\n                    } catch (err) {\n                        console.error('Error fetching deliveries:', err.message);\n                    }\n                }\n            }[\"Dashboard.useEffect.fetchDeliveries\"];\n            fetchDeliveries();\n        }\n    }[\"Dashboard.useEffect\"], []);\n    // Fetch orders data from the backend\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Dashboard.useEffect\": ()=>{\n            const fetchOrders = {\n                \"Dashboard.useEffect.fetchOrders\": async ()=>{\n                    try {\n                        const response = await fetch('/api/getTodaysInvoices'); // Changed the endpoint to getInvoices\n                        const data = await response.json();\n                        if (response.ok) {\n                            console.log('Orders Data:', data); // Log the data structure\n                            setOrders(data); // Set orders state\n                        } else {\n                            console.error('Error fetching orders:', data.message); // Log any errors related to fetching orders\n                        }\n                    } catch (err) {\n                        console.error('Error fetching orders:', err.message); // Catch any network or other errors\n                    }\n                }\n            }[\"Dashboard.useEffect.fetchOrders\"];\n            fetchOrders();\n        }\n    }[\"Dashboard.useEffect\"], []);\n    // Normalize the date to \"YYYY-MM-DD\" format without time\n    const normalizeDate = (date)=>{\n        const normalizedDate = new Date(date);\n        normalizedDate.setHours(0, 0, 0, 0); // Set to midnight\n        return normalizedDate.toISOString().split('T')[0]; // Return the string part (YYYY-MM-DD)\n    };\n    // Get the current date string (today's date)\n    const todayString = normalizeDate(new Date());\n    // Calculate total deliveries and orders for today\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Dashboard.useEffect\": ()=>{\n            // Calculate delivery count for today\n            const deliveryCount = deliveries.find({\n                \"Dashboard.useEffect\": (delivery)=>normalizeDate(new Date(delivery.deliveryDate)) === todayString\n            }[\"Dashboard.useEffect\"])?.count || 0;\n            // Calculate order count for today\n            const orderCount = orders.find({\n                \"Dashboard.useEffect\": (order)=>normalizeDate(new Date(order.invoiceDate)) === todayString\n            }[\"Dashboard.useEffect\"])?.count || 0;\n            // Update the state for delivery and order counts\n            setDeliveryCount(deliveryCount);\n            setOrderCount(orderCount);\n        }\n    }[\"Dashboard.useEffect\"], [\n        deliveries,\n        orders,\n        todayString\n    ]); // Trigger when deliveries, orders, or todayString changes\n    if (!isClient) {\n        return null; // Avoid rendering anything until after component mounts\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen flex bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideNavbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow p-8 lg:ml-64\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container mx-auto bg-white shadow-xl rounded-lg p-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                                className: \"mb-8 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-4xl font-extrabold text-gray-800\",\n                                    children: \"Welcome to Invoice Dashboard\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                className: \"text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-600 text-lg mb-4\",\n                                        children: \"Manage your invoices easily and efficiently.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/invoice\",\n                                            legacyBehavior: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105\",\n                                                children: \"Create New Invoice\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                                lineNumber: 107,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-12 p-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg text-white\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-2xl font-semibold mb-2\",\n                                                children: \"Total Deliveries Today\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                                lineNumber: 115,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-xl font-bold\",\n                                                children: deliveryCount\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                                lineNumber: 116,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"mt-2 text-lg\",\n                                                children: \"Stay up-to-date with the latest deliveries for today!\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                                lineNumber: 117,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-12 p-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg text-white\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-2xl font-semibold mb-2\",\n                                                children: \"Total Orders Today\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                                lineNumber: 120,\n                                                columnNumber: 15\n                                            }, this),\n                                            \"  \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-xl font-bold\",\n                                                children: orderCount\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                                lineNumber: 121,\n                                                columnNumber: 15\n                                            }, this),\n                                            \"  \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"mt-2 text-lg\",\n                                                children: \"Stay up-to-date with the latest orders for today!\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                                lineNumber: 122,\n                                                columnNumber: 15\n                                            }, this),\n                                            \"  \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\RISHI\\\\Desktop\\\\Invoicing\\\\invoice\\\\pages\\\\index.js\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDZjtBQUNxQjtBQUVuQyxTQUFTSTtJQUN0QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxNQUFNLENBQUNNLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDWSxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBR3pDLCtCQUErQjtJQUMvQkQsZ0RBQVNBOytCQUFDO1lBQ1JjLFlBQVksT0FBTyxrREFBa0Q7UUFDdkU7OEJBQUcsRUFBRTtJQUdMLHlDQUF5QztJQUN6Q2QsZ0RBQVNBOytCQUFDO1lBQ1IsTUFBTWU7dURBQWtCO29CQUN0QixJQUFJO3dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTt3QkFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO3dCQUVoQyxJQUFJSCxTQUFTSSxFQUFFLEVBQUU7NEJBQ2ZkLGNBQWNZO3dCQUNoQixPQUFPOzRCQUNMRyxRQUFRQyxLQUFLLENBQUMsOEJBQThCSixLQUFLSyxPQUFPO3dCQUMxRDtvQkFDRixFQUFFLE9BQU9DLEtBQUs7d0JBQ1pILFFBQVFDLEtBQUssQ0FBQyw4QkFBOEJFLElBQUlELE9BQU87b0JBQ3pEO2dCQUNGOztZQUVBUjtRQUNGOzhCQUFHLEVBQUU7SUFFTCxxQ0FBcUM7SUFDckNmLGdEQUFTQTsrQkFBQztZQUNSLE1BQU15QjttREFBYztvQkFDbEIsSUFBSTt3QkFDRixNQUFNVCxXQUFXLE1BQU1DLE1BQU0sMkJBQTJCLHNDQUFzQzt3QkFDOUYsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO3dCQUVoQyxJQUFJSCxTQUFTSSxFQUFFLEVBQUU7NEJBQ2ZDLFFBQVFLLEdBQUcsQ0FBQyxnQkFBZ0JSLE9BQU8seUJBQXlCOzRCQUM1RFIsVUFBVVEsT0FBUSxtQkFBbUI7d0JBQ3ZDLE9BQU87NEJBQ0xHLFFBQVFDLEtBQUssQ0FBQywwQkFBMEJKLEtBQUtLLE9BQU8sR0FBSSw0Q0FBNEM7d0JBQ3RHO29CQUNGLEVBQUUsT0FBT0MsS0FBSzt3QkFDWkgsUUFBUUMsS0FBSyxDQUFDLDBCQUEwQkUsSUFBSUQsT0FBTyxHQUFJLG9DQUFvQztvQkFDN0Y7Z0JBQ0Y7O1lBRUFFO1FBQ0Y7OEJBQUcsRUFBRTtJQUlMLHlEQUF5RDtJQUN6RCxNQUFNRSxnQkFBZ0IsQ0FBQ0M7UUFDckIsTUFBTUMsaUJBQWlCLElBQUlDLEtBQUtGO1FBQ2hDQyxlQUFlRSxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxrQkFBa0I7UUFDdkQsT0FBT0YsZUFBZUcsV0FBVyxHQUFHQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxzQ0FBc0M7SUFDM0Y7SUFFQSw2Q0FBNkM7SUFDN0MsTUFBTUMsY0FBY1AsY0FBYyxJQUFJRztJQUV0QyxrREFBa0Q7SUFDbEQ5QixnREFBU0E7K0JBQUM7WUFDUixxQ0FBcUM7WUFDckMsTUFBTU8sZ0JBQWdCRixXQUFXOEIsSUFBSTt1Q0FDbkMsQ0FBQ0MsV0FBYVQsY0FBYyxJQUFJRyxLQUFLTSxTQUFTQyxZQUFZLE9BQU9IO3VDQUNoRUksU0FBUztZQUVaLGtDQUFrQztZQUNsQyxNQUFNM0IsYUFBYUYsT0FBTzBCLElBQUk7dUNBQzVCLENBQUNJLFFBQVVaLGNBQWMsSUFBSUcsS0FBS1MsTUFBTUMsV0FBVyxPQUFPTjt1Q0FDekRJLFNBQVM7WUFFWixpREFBaUQ7WUFDakQ5QixpQkFBaUJEO1lBQ2pCSyxjQUFjRDtRQUNoQjs4QkFBRztRQUFDTjtRQUFZSTtRQUFReUI7S0FBWSxHQUFHLDBEQUEwRDtJQUVqRyxJQUFJLENBQUNyQixVQUFVO1FBQ2IsT0FBTyxNQUFNLHdEQUF3RDtJQUN2RTtJQUdBLHFCQUNFLDhEQUFDNEI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN2Qyw4REFBVUE7Ozs7OzBCQUNYLDhEQUFDc0M7Z0JBQUlDLFdBQVU7O29CQUF5QjtrQ0FDdEMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQU9ELFdBQVU7MENBQ2hCLDRFQUFDRTtvQ0FBR0YsV0FBVTs4Q0FBd0M7Ozs7Ozs7Ozs7OzBDQUV4RCw4REFBQ0c7Z0NBQUtILFdBQVU7O2tEQUNkLDhEQUFDSTt3Q0FBRUosV0FBVTtrREFBNkI7Ozs7OztrREFFMUMsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDeEMsa0RBQUlBOzRDQUFDNkMsTUFBSzs0Q0FBV0MsY0FBYztzREFDbEMsNEVBQUNDO2dEQUFFUCxXQUFVOzBEQUErRzs7Ozs7Ozs7Ozs7Ozs7OztrREFPaEksOERBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ1E7Z0RBQUdSLFdBQVU7MERBQThCOzs7Ozs7MERBQzVDLDhEQUFDSTtnREFBRUosV0FBVTswREFBcUJuQzs7Ozs7OzBEQUNsQyw4REFBQ3VDO2dEQUFFSixXQUFVOzBEQUFlOzs7Ozs7Ozs7Ozs7a0RBRTlCLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNRO2dEQUFHUixXQUFVOzBEQUE4Qjs7Ozs7OzRDQUF1QjswREFDbkUsOERBQUNJO2dEQUFFSixXQUFVOzBEQUFxQi9COzs7Ozs7NENBQWU7MERBQ2pELDhEQUFDbUM7Z0RBQUVKLFdBQVU7MERBQWU7Ozs7Ozs0Q0FBcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRL0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUklTSElcXERlc2t0b3BcXEludm9pY2luZ1xcaW52b2ljZVxccGFnZXNcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjsgXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU2lkZU5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlTmF2YmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgY29uc3QgW2RlbGl2ZXJpZXMsIHNldERlbGl2ZXJpZXNdID0gdXNlU3RhdGUoW10pOyAgXG4gIGNvbnN0IFtkZWxpdmVyeUNvdW50LCBzZXREZWxpdmVyeUNvdW50XSA9IHVzZVN0YXRlKDApOyBcbiAgY29uc3QgW29yZGVycywgc2V0T3JkZXJzXSA9IHVzZVN0YXRlKFtdKTsgXG4gIGNvbnN0IFtvcmRlckNvdW50LCBzZXRPcmRlckNvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNDbGllbnQsIHNldElzQ2xpZW50XSA9IHVzZVN0YXRlKGZhbHNlKTsgXG4gIFxuXG4gIC8vIEhhbmRsZSBjbGllbnQtc2lkZSByZW5kZXJpbmdcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0NsaWVudCh0cnVlKTsgLy8gU2V0IGNsaWVudC1zaWRlIGZsYWcgYWZ0ZXIgdGhlIGNvbXBvbmVudCBtb3VudHNcbiAgfSwgW10pO1xuXG5cbiAgLy8gRmV0Y2ggZGVsaXZlcmllcyBkYXRhIGZyb20gdGhlIGJhY2tlbmRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERlbGl2ZXJpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2dldERlbGl2ZXJpZXMnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBzZXREZWxpdmVyaWVzKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRlbGl2ZXJpZXM6JywgZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRlbGl2ZXJpZXM6JywgZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERlbGl2ZXJpZXMoKTtcbiAgfSwgW10pO1xuXG4gIC8vIEZldGNoIG9yZGVycyBkYXRhIGZyb20gdGhlIGJhY2tlbmRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaE9yZGVycyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2V0VG9kYXlzSW52b2ljZXMnKTsgLy8gQ2hhbmdlZCB0aGUgZW5kcG9pbnQgdG8gZ2V0SW52b2ljZXNcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdPcmRlcnMgRGF0YTonLCBkYXRhKTsgLy8gTG9nIHRoZSBkYXRhIHN0cnVjdHVyZVxuICAgICAgICAgIHNldE9yZGVycyhkYXRhKTsgIC8vIFNldCBvcmRlcnMgc3RhdGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBvcmRlcnM6JywgZGF0YS5tZXNzYWdlKTsgIC8vIExvZyBhbnkgZXJyb3JzIHJlbGF0ZWQgdG8gZmV0Y2hpbmcgb3JkZXJzXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBvcmRlcnM6JywgZXJyLm1lc3NhZ2UpOyAgLy8gQ2F0Y2ggYW55IG5ldHdvcmsgb3Igb3RoZXIgZXJyb3JzXG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgZmV0Y2hPcmRlcnMoKTtcbiAgfSwgW10pO1xuXG5cblxuICAvLyBOb3JtYWxpemUgdGhlIGRhdGUgdG8gXCJZWVlZLU1NLUREXCIgZm9ybWF0IHdpdGhvdXQgdGltZVxuICBjb25zdCBub3JtYWxpemVEYXRlID0gKGRhdGUpID0+IHtcbiAgICBjb25zdCBub3JtYWxpemVkRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIG5vcm1hbGl6ZWREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApOyAvLyBTZXQgdG8gbWlkbmlnaHRcbiAgICByZXR1cm4gbm9ybWFsaXplZERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdOyAvLyBSZXR1cm4gdGhlIHN0cmluZyBwYXJ0IChZWVlZLU1NLUREKVxuICB9O1xuXG4gIC8vIEdldCB0aGUgY3VycmVudCBkYXRlIHN0cmluZyAodG9kYXkncyBkYXRlKVxuICBjb25zdCB0b2RheVN0cmluZyA9IG5vcm1hbGl6ZURhdGUobmV3IERhdGUoKSk7XG5cbiAgLy8gQ2FsY3VsYXRlIHRvdGFsIGRlbGl2ZXJpZXMgYW5kIG9yZGVycyBmb3IgdG9kYXlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBDYWxjdWxhdGUgZGVsaXZlcnkgY291bnQgZm9yIHRvZGF5XG4gICAgY29uc3QgZGVsaXZlcnlDb3VudCA9IGRlbGl2ZXJpZXMuZmluZChcbiAgICAgIChkZWxpdmVyeSkgPT4gbm9ybWFsaXplRGF0ZShuZXcgRGF0ZShkZWxpdmVyeS5kZWxpdmVyeURhdGUpKSA9PT0gdG9kYXlTdHJpbmdcbiAgICApPy5jb3VudCB8fCAwO1xuXG4gICAgLy8gQ2FsY3VsYXRlIG9yZGVyIGNvdW50IGZvciB0b2RheVxuICAgIGNvbnN0IG9yZGVyQ291bnQgPSBvcmRlcnMuZmluZChcbiAgICAgIChvcmRlcikgPT4gbm9ybWFsaXplRGF0ZShuZXcgRGF0ZShvcmRlci5pbnZvaWNlRGF0ZSkpID09PSB0b2RheVN0cmluZ1xuICAgICk/LmNvdW50IHx8IDA7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIGZvciBkZWxpdmVyeSBhbmQgb3JkZXIgY291bnRzXG4gICAgc2V0RGVsaXZlcnlDb3VudChkZWxpdmVyeUNvdW50KTtcbiAgICBzZXRPcmRlckNvdW50KG9yZGVyQ291bnQpO1xuICB9LCBbZGVsaXZlcmllcywgb3JkZXJzLCB0b2RheVN0cmluZ10pOyAvLyBUcmlnZ2VyIHdoZW4gZGVsaXZlcmllcywgb3JkZXJzLCBvciB0b2RheVN0cmluZyBjaGFuZ2VzXG5cbiAgaWYgKCFpc0NsaWVudCkge1xuICAgIHJldHVybiBudWxsOyAvLyBBdm9pZCByZW5kZXJpbmcgYW55dGhpbmcgdW50aWwgYWZ0ZXIgY29tcG9uZW50IG1vdW50c1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBiZy1ncmF5LTEwMFwiPlxuICAgICAgPFNpZGVOYXZiYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IHAtOCBsZzptbC02NFwiPiB7LyogQWRqdXN0IGNvbnRlbnQgdG8gYXZvaWQgZ29pbmcgYmVoaW5kIHRoZSBuYXZiYXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gYmctd2hpdGUgc2hhZG93LXhsIHJvdW5kZWQtbGcgcC04XCI+XG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYi04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTgwMFwiPldlbGNvbWUgdG8gSW52b2ljZSBEYXNoYm9hcmQ8L2gxPlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtbGcgbWItNFwiPk1hbmFnZSB5b3VyIGludm9pY2VzIGVhc2lseSBhbmQgZWZmaWNpZW50bHkuPC9wPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbnZvaWNlXCIgbGVnYWN5QmVoYXZpb3I+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBweC02IHB5LTMgcm91bmRlZC1sZyBzaGFkb3ctbWQgaG92ZXI6YmctYmx1ZS03MDAgdHJhbnNpdGlvbiB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCI+XG4gICAgICAgICAgICAgICAgICBDcmVhdGUgTmV3IEludm9pY2VcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogVG90YWwgRGVsaXZlcmllcyBUb2RheSBDYXJkICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBwLTYgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNDAwIHRvLWJsdWUtNjAwIHJvdW5kZWQtbGcgc2hhZG93LWxnIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItMlwiPlRvdGFsIERlbGl2ZXJpZXMgVG9kYXk8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPntkZWxpdmVyeUNvdW50fTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWxnXCI+U3RheSB1cC10by1kYXRlIHdpdGggdGhlIGxhdGVzdCBkZWxpdmVyaWVzIGZvciB0b2RheSE8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgcC02IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTQwMCB0by1ibHVlLTYwMCByb3VuZGVkLWxnIHNoYWRvdy1sZyB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTJcIj5Ub3RhbCBPcmRlcnMgVG9kYXk8L2gyPiAgey8qIFVwZGF0ZWQgdG8gT3JkZXJzICovfVxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPntvcmRlckNvdW50fTwvcD4gIHsvKiBVcGRhdGVkIHRvIG9yZGVyQ291bnQgKi99XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1sZ1wiPlN0YXkgdXAtdG8tZGF0ZSB3aXRoIHRoZSBsYXRlc3Qgb3JkZXJzIGZvciB0b2RheSE8L3A+ICB7LyogVXBkYXRlZCB0aGUgZGVzY3JpcHRpb24gKi99XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJTaWRlTmF2YmFyIiwiRGFzaGJvYXJkIiwiZGVsaXZlcmllcyIsInNldERlbGl2ZXJpZXMiLCJkZWxpdmVyeUNvdW50Iiwic2V0RGVsaXZlcnlDb3VudCIsIm9yZGVycyIsInNldE9yZGVycyIsIm9yZGVyQ291bnQiLCJzZXRPcmRlckNvdW50IiwiaXNDbGllbnQiLCJzZXRJc0NsaWVudCIsImZldGNoRGVsaXZlcmllcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9rIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsImVyciIsImZldGNoT3JkZXJzIiwibG9nIiwibm9ybWFsaXplRGF0ZSIsImRhdGUiLCJub3JtYWxpemVkRGF0ZSIsIkRhdGUiLCJzZXRIb3VycyIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJ0b2RheVN0cmluZyIsImZpbmQiLCJkZWxpdmVyeSIsImRlbGl2ZXJ5RGF0ZSIsImNvdW50Iiwib3JkZXIiLCJpbnZvaWNlRGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImgxIiwibWFpbiIsInAiLCJocmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhIiwiaDIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/cssVars");

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/spacing");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/composeClasses");

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/createChainedFunction");

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/debounce");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deprecatedPropType");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isMuiElement");

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerDocument");

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerWindow");

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/requirePropFactory");

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/setRef");

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/unsupportedProp");

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useControlled");

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEnhancedEffect");

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEventCallback");

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useForkRef");

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useId");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%5Cindex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();