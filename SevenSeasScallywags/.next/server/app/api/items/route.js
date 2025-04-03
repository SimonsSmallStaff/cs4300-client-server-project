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
exports.id = "app/api/items/route";
exports.ids = ["app/api/items/route"];
exports.modules = {

/***/ "(rsc)/./config/mongodb.ts":
/*!***************************!*\
  !*** ./config/mongodb.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongoDB = async ()=>{\n    try {\n        const uri = process.env.MONGODB_URI;\n        if (!uri) {\n            throw new Error(\"MONGODB_URI is not defined in environment variables.\");\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n        console.log(\"Connected to MongoDB.\");\n    } catch (error) {\n        console.log(\"Error connecting to MongoDB:\", error.message);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsaUJBQWlCO0lBQ3RCLElBQUk7UUFDRixNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7UUFDbkMsSUFBSSxDQUFDSCxLQUFLO1lBQ1IsTUFBTSxJQUFJSSxNQUFNO1FBQ2xCO1FBR0EsTUFBTU4sdURBQWdCLENBQUNFO1FBQ3ZCTSxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUMsR0FBRyxDQUFDLGdDQUFnQyxNQUFpQkUsT0FBTztJQUN0RTtBQUNEO0FBR0EsaUVBQWVWLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGltb3RoeVxcRGVza3RvcFxcY3M0MzAwLWNsaWVudC1zZXJ2ZXItcHJvamVjdFxcU2V2ZW5TZWFzU2NhbGx5d2Fnc1xcY29uZmlnXFxtb25nb2RiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IGNvbm5lY3RNb25nb0RCID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gdHJ5IHtcclxuICAgY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcbiAgIGlmICghdXJpKSB7XHJcbiAgICAgdGhyb3cgbmV3IEVycm9yKFwiTU9OR09EQl9VUkkgaXMgbm90IGRlZmluZWQgaW4gZW52aXJvbm1lbnQgdmFyaWFibGVzLlwiKTtcclxuICAgfVxyXG5cclxuXHJcbiAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QodXJpKTtcclxuICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gTW9uZ29EQi5cIik7XHJcbiB9IGNhdGNoIChlcnJvcikge1xyXG4gICBjb25zb2xlLmxvZyhcIkVycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjpcIiwgKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKTtcclxuIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0TW9uZ29EQjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0TW9uZ29EQiIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIkVycm9yIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./config/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fitems%2Froute&page=%2Fapi%2Fitems%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fitems%2Froute.ts&appDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Ccs4300-client-server-project%5CSevenSeasScallywags%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Ccs4300-client-server-project%5CSevenSeasScallywags&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fitems%2Froute&page=%2Fapi%2Fitems%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fitems%2Froute.ts&appDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Ccs4300-client-server-project%5CSevenSeasScallywags%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Ccs4300-client-server-project%5CSevenSeasScallywags&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Timothy_Desktop_cs4300_client_server_project_SevenSeasScallywags_src_app_api_items_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/items/route.ts */ \"(rsc)/./src/app/api/items/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/items/route\",\n        pathname: \"/api/items\",\n        filename: \"route\",\n        bundlePath: \"app/api/items/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Timothy\\\\Desktop\\\\cs4300-client-server-project\\\\SevenSeasScallywags\\\\src\\\\app\\\\api\\\\items\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Timothy_Desktop_cs4300_client_server_project_SevenSeasScallywags_src_app_api_items_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZpdGVtcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGaXRlbXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZpdGVtcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNUaW1vdGh5JTVDRGVza3RvcCU1Q2NzNDMwMC1jbGllbnQtc2VydmVyLXByb2plY3QlNUNTZXZlblNlYXNTY2FsbHl3YWdzJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNUaW1vdGh5JTVDRGVza3RvcCU1Q2NzNDMwMC1jbGllbnQtc2VydmVyLXByb2plY3QlNUNTZXZlblNlYXNTY2FsbHl3YWdzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM4RDtBQUMzSTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcVGltb3RoeVxcXFxEZXNrdG9wXFxcXGNzNDMwMC1jbGllbnQtc2VydmVyLXByb2plY3RcXFxcU2V2ZW5TZWFzU2NhbGx5d2Fnc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxpdGVtc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvaXRlbXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9pdGVtc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvaXRlbXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxUaW1vdGh5XFxcXERlc2t0b3BcXFxcY3M0MzAwLWNsaWVudC1zZXJ2ZXItcHJvamVjdFxcXFxTZXZlblNlYXNTY2FsbHl3YWdzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGl0ZW1zXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fitems%2Froute&page=%2Fapi%2Fitems%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fitems%2Froute.ts&appDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Ccs4300-client-server-project%5CSevenSeasScallywags%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Ccs4300-client-server-project%5CSevenSeasScallywags&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/items/route.ts":
/*!************************************!*\
  !*** ./src/app/api/items/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _config_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config/mongodb */ \"(rsc)/./config/mongodb.ts\");\n/* harmony import */ var _app_models_itemSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/models/itemSchema */ \"(rsc)/./src/app/models/itemSchema.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET(request) {\n    // handle GET requests\n    await (0,_config_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const items = await _app_models_itemSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        items\n    });\n}\nasync function POST(request) {\n    // handle POST requests\n    const { owner, title, description, url } = await request.json();\n    await (0,_config_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    await _app_models_itemSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n        owner,\n        title,\n        description,\n        url\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        message: \"Item added successfully\"\n    }, {\n        status: 201\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9pdGVtcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUNiO0FBQ0E7QUFJcEMsZUFBZUcsSUFBSUMsT0FBb0I7SUFDMUMsc0JBQXNCO0lBQ3RCLE1BQU1KLDJEQUFjQTtJQUNwQixNQUFNSyxRQUFRLE1BQU1KLDhEQUFJQSxDQUFDSyxJQUFJO0lBQzdCLE9BQU9KLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7UUFBRUY7SUFBTTtBQUNyQztBQUVPLGVBQWVHLEtBQUtKLE9BQW9CO0lBQzNDLHVCQUF1QjtJQUN2QixNQUFNLEVBQUVLLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLEdBQUcsRUFBRSxHQUFHLE1BQU1SLFFBQVFHLElBQUk7SUFDN0QsTUFBTVAsMkRBQWNBO0lBQ3BCLE1BQU1DLDhEQUFJQSxDQUFDWSxNQUFNLENBQUM7UUFBRUo7UUFBT0M7UUFBT0M7UUFBYUM7SUFBSTtJQUNuRCxPQUFPVixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1FBQUVPLFNBQVM7SUFBMEIsR0FBRztRQUFFQyxRQUFRO0lBQUk7QUFDbkYiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGltb3RoeVxcRGVza3RvcFxcY3M0MzAwLWNsaWVudC1zZXJ2ZXItcHJvamVjdFxcU2V2ZW5TZWFzU2NhbGx5d2Fnc1xcc3JjXFxhcHBcXGFwaVxcaXRlbXNcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0TW9uZ29EQiBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlnL21vbmdvZGJcIjtcclxuaW1wb3J0IEl0ZW0gZnJvbSBcIkAvYXBwL21vZGVscy9pdGVtU2NoZW1hXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgICAvLyBoYW5kbGUgR0VUIHJlcXVlc3RzXHJcbiAgICBhd2FpdCBjb25uZWN0TW9uZ29EQigpO1xyXG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBJdGVtLmZpbmQoKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGl0ZW1zIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gICAgLy8gaGFuZGxlIFBPU1QgcmVxdWVzdHNcclxuICAgIGNvbnN0IHsgb3duZXIsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgIGF3YWl0IGNvbm5lY3RNb25nb0RCKCk7XHJcbiAgICBhd2FpdCBJdGVtLmNyZWF0ZSh7IG93bmVyLCB0aXRsZSwgZGVzY3JpcHRpb24sIHVybCB9KTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiSXRlbSBhZGRlZCBzdWNjZXNzZnVsbHlcIiB9LCB7IHN0YXR1czogMjAxIH0pO1xyXG59Il0sIm5hbWVzIjpbImNvbm5lY3RNb25nb0RCIiwiSXRlbSIsIk5leHRSZXNwb25zZSIsIkdFVCIsInJlcXVlc3QiLCJpdGVtcyIsImZpbmQiLCJqc29uIiwiUE9TVCIsIm93bmVyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybCIsImNyZWF0ZSIsIm1lc3NhZ2UiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/items/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/models/itemSchema.ts":
/*!**************************************!*\
  !*** ./src/app/models/itemSchema.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst itemSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    owner: {\n        type: Number\n    },\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String\n    },\n    url: {\n        type: String,\n        required: false\n    }\n});\nconst Item = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Item || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Item\", itemSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy9pdGVtU2NoZW1hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtRTtBQVFuRSxNQUFNRSxhQUFhLElBQUlELDRDQUFNQSxDQUFRO0lBQ2pDRSxPQUFPO1FBQ0hDLE1BQU1DO0lBQ1Y7SUFDQUMsT0FBTztRQUNIRixNQUFNRztRQUNOQyxVQUFVO0lBQ2Q7SUFDQUMsYUFBYTtRQUNUTCxNQUFNRztJQUNWO0lBQ0FHLEtBQUs7UUFDRE4sTUFBTUc7UUFDTkMsVUFBVTtJQUNkO0FBQ0o7QUFFQSxNQUFNRyxPQUFxQlgsd0RBQWUsQ0FBQ1csSUFBSSxJQUFJWCxxREFBYyxDQUFRLFFBQVFFO0FBQ2pGLGlFQUFlUyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFRpbW90aHlcXERlc2t0b3BcXGNzNDMwMC1jbGllbnQtc2VydmVyLXByb2plY3RcXFNldmVuU2Vhc1NjYWxseXdhZ3NcXHNyY1xcYXBwXFxtb2RlbHNcXGl0ZW1TY2hlbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgRG9jdW1lbnQsIE1vZGVsLCBtb25nb30gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmludGVyZmFjZSBJSXRlbSBleHRlbmRzIERvY3VtZW50IHtcclxuICAgIG93bmVyOiBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICB1cmw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGl0ZW1TY2hlbWEgPSBuZXcgU2NoZW1hPElJdGVtPih7XHJcbiAgICBvd25lcjoge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICB1cmw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IEl0ZW06IE1vZGVsPElJdGVtPiA9IG1vbmdvb3NlLm1vZGVscy5JdGVtIHx8IG1vbmdvb3NlLm1vZGVsPElJdGVtPihcIkl0ZW1cIiwgaXRlbVNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW07Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiaXRlbVNjaGVtYSIsIm93bmVyIiwidHlwZSIsIk51bWJlciIsInRpdGxlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsInVybCIsIkl0ZW0iLCJtb2RlbHMiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/itemSchema.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fitems%2Froute&page=%2Fapi%2Fitems%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fitems%2Froute.ts&appDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Ccs4300-client-server-project%5CSevenSeasScallywags%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Ccs4300-client-server-project%5CSevenSeasScallywags&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();