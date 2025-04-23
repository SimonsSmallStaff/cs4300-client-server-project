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
exports.id = "app/api/items/[id]/route";
exports.ids = ["app/api/items/[id]/route"];
exports.modules = {

/***/ "(rsc)/./config/mongodb.ts":
/*!***************************!*\
  !*** ./config/mongodb.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongoDB = async ()=>{\n    try {\n        const uri = process.env.MONGODB_URI;\n        if (!uri) {\n            throw new Error(\"MONGODB_URI is not defined in environment variables.\");\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n        console.log(\"Connected to MongoDB.\");\n    } catch (error) {\n        console.log(\"Error connecting to MongoDB:\", error.message);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsaUJBQWlCO0lBQ3RCLElBQUk7UUFDRixNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7UUFDbkMsSUFBSSxDQUFDSCxLQUFLO1lBQ1IsTUFBTSxJQUFJSSxNQUFNO1FBQ2xCO1FBR0EsTUFBTU4sdURBQWdCLENBQUNFO1FBQ3ZCTSxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUMsR0FBRyxDQUFDLGdDQUFnQyxNQUFpQkUsT0FBTztJQUN0RTtBQUNEO0FBR0EsaUVBQWVWLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGltb3RoeVxcRGVza3RvcFxcZnJvbnRlbmRcXGNzNDMwMC1jbGllbnQtc2VydmVyLXByb2plY3RcXFNldmVuU2Vhc1NjYWxseXdhZ3NcXGNvbmZpZ1xcbW9uZ29kYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0TW9uZ29EQiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuIHRyeSB7XHJcbiAgIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG4gICBpZiAoIXVyaSkge1xyXG4gICAgIHRocm93IG5ldyBFcnJvcihcIk1PTkdPREJfVVJJIGlzIG5vdCBkZWZpbmVkIGluIGVudmlyb25tZW50IHZhcmlhYmxlcy5cIik7XHJcbiAgIH1cclxuXHJcblxyXG4gICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHVyaSk7XHJcbiAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE1vbmdvREIuXCIpO1xyXG4gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgY29uc29sZS5sb2coXCJFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6XCIsIChlcnJvciBhcyBFcnJvcikubWVzc2FnZSk7XHJcbiB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdE1vbmdvREI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdE1vbmdvREIiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./config/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fitems%2F%5Bid%5D%2Froute&page=%2Fapi%2Fitems%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fitems%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fitems%2F%5Bid%5D%2Froute&page=%2Fapi%2Fitems%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fitems%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Timothy_Desktop_frontend_cs4300_client_server_project_SevenSeasScallywags_src_app_api_items_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/items/[id]/route.ts */ \"(rsc)/./src/app/api/items/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/items/[id]/route\",\n        pathname: \"/api/items/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/items/[id]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Timothy\\\\Desktop\\\\frontend\\\\cs4300-client-server-project\\\\SevenSeasScallywags\\\\src\\\\app\\\\api\\\\items\\\\[id]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Timothy_Desktop_frontend_cs4300_client_server_project_SevenSeasScallywags_src_app_api_items_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZpdGVtcyUyRiU1QmlkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZpdGVtcyUyRiU1QmlkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGaXRlbXMlMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNUaW1vdGh5JTVDRGVza3RvcCU1Q2Zyb250ZW5kJTVDY3M0MzAwLWNsaWVudC1zZXJ2ZXItcHJvamVjdCU1Q1NldmVuU2Vhc1NjYWxseXdhZ3MlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1RpbW90aHklNUNEZXNrdG9wJTVDZnJvbnRlbmQlNUNjczQzMDAtY2xpZW50LXNlcnZlci1wcm9qZWN0JTVDU2V2ZW5TZWFzU2NhbGx5d2FncyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDOEU7QUFDM0o7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFRpbW90aHlcXFxcRGVza3RvcFxcXFxmcm9udGVuZFxcXFxjczQzMDAtY2xpZW50LXNlcnZlci1wcm9qZWN0XFxcXFNldmVuU2Vhc1NjYWxseXdhZ3NcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcaXRlbXNcXFxcW2lkXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvaXRlbXMvW2lkXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2l0ZW1zL1tpZF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2l0ZW1zL1tpZF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxUaW1vdGh5XFxcXERlc2t0b3BcXFxcZnJvbnRlbmRcXFxcY3M0MzAwLWNsaWVudC1zZXJ2ZXItcHJvamVjdFxcXFxTZXZlblNlYXNTY2FsbHl3YWdzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGl0ZW1zXFxcXFtpZF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fitems%2F%5Bid%5D%2Froute&page=%2Fapi%2Fitems%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fitems%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/items/[id]/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/items/[id]/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _config_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config/mongodb */ \"(rsc)/./config/mongodb.ts\");\n/* harmony import */ var _app_models_itemSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/models/itemSchema */ \"(rsc)/./src/app/models/itemSchema.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET(request, { params }) {\n    try {\n        const { id } = params;\n        await (0,_config_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const item = await _app_models_itemSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n        if (!item) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: \"Item not found\"\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            item\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"Failed to fetch item\",\n            error\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(request, { params }) {\n    try {\n        const { id } = params;\n        await (0,_config_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const deletedItem = await _app_models_itemSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(id);\n        if (!deletedItem) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: \"Item not found\"\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"Item deleted\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"Failed to delete item\",\n            error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9pdGVtcy9baWRdL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJEO0FBQ2hCO0FBQ2E7QUFNakQsZUFBZUcsSUFBSUMsT0FBb0IsRUFBRSxFQUFFQyxNQUFNLEVBQWU7SUFDbkUsSUFBSTtRQUNBLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQUdEO1FBRWYsTUFBTUwsMkRBQWNBO1FBQ3BCLE1BQU1PLE9BQU8sTUFBTU4sOERBQUlBLENBQUNPLFFBQVEsQ0FBQ0Y7UUFFakMsSUFBSSxDQUFDQyxNQUFNO1lBQ1AsT0FBT0wscURBQVlBLENBQUNPLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFpQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDMUU7UUFFQSxPQUFPVCxxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVGO1FBQUssR0FBRztZQUFFSSxRQUFRO1FBQUk7SUFDckQsRUFBRSxPQUFPQyxPQUFPO1FBQ1osT0FBT1YscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQXdCRTtRQUFNLEdBQUc7WUFBRUQsUUFBUTtRQUFJO0lBQ3ZGO0FBQ0o7QUFFTyxlQUFlRSxPQUFPVCxPQUFvQixFQUFFLEVBQUVDLE1BQU0sRUFBZTtJQUN0RSxJQUFJO1FBQ0EsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBR0Q7UUFFZixNQUFNTCwyREFBY0E7UUFDcEIsTUFBTWMsY0FBYyxNQUFNYiw4REFBSUEsQ0FBQ2MsaUJBQWlCLENBQUNUO1FBRWpELElBQUksQ0FBQ1EsYUFBYTtZQUNkLE9BQU9aLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBaUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzFFO1FBRUEsT0FBT1QscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQWUsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDeEUsRUFBRSxPQUFPQyxPQUFPO1FBQ1osT0FBT1YscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQXlCRTtRQUFNLEdBQUc7WUFBRUQsUUFBUTtRQUFJO0lBQ3hGO0FBQ0oiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGltb3RoeVxcRGVza3RvcFxcZnJvbnRlbmRcXGNzNDMwMC1jbGllbnQtc2VydmVyLXByb2plY3RcXFNldmVuU2Vhc1NjYWxseXdhZ3NcXHNyY1xcYXBwXFxhcGlcXGl0ZW1zXFxbaWRdXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdE1vbmdvREIgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbmZpZy9tb25nb2RiXCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCJAL2FwcC9tb2RlbHMvaXRlbVNjaGVtYVwiO1xyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5pbnRlcmZhY2UgUm91dGVQYXJhbXMge1xyXG4gICAgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCwgeyBwYXJhbXMgfTogUm91dGVQYXJhbXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xyXG5cclxuICAgICAgICBhd2FpdCBjb25uZWN0TW9uZ29EQigpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBhd2FpdCBJdGVtLmZpbmRCeUlkKGlkKTtcclxuXHJcbiAgICAgICAgaWYgKCFpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiSXRlbSBub3QgZm91bmRcIiB9LCB7IHN0YXR1czogNDA0IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgaXRlbSB9LCB7IHN0YXR1czogMjAwIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkZhaWxlZCB0byBmZXRjaCBpdGVtXCIsIGVycm9yIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxdWVzdDogTmV4dFJlcXVlc3QsIHsgcGFyYW1zIH06IFJvdXRlUGFyYW1zKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcclxuXHJcbiAgICAgICAgYXdhaXQgY29ubmVjdE1vbmdvREIoKTtcclxuICAgICAgICBjb25zdCBkZWxldGVkSXRlbSA9IGF3YWl0IEl0ZW0uZmluZEJ5SWRBbmREZWxldGUoaWQpO1xyXG5cclxuICAgICAgICBpZiAoIWRlbGV0ZWRJdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiSXRlbSBub3QgZm91bmRcIiB9LCB7IHN0YXR1czogNDA0IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJJdGVtIGRlbGV0ZWRcIiB9LCB7IHN0YXR1czogMjAwIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkZhaWxlZCB0byBkZWxldGUgaXRlbVwiLCBlcnJvciB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0TW9uZ29EQiIsIkl0ZW0iLCJOZXh0UmVzcG9uc2UiLCJHRVQiLCJyZXF1ZXN0IiwicGFyYW1zIiwiaWQiLCJpdGVtIiwiZmluZEJ5SWQiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsImVycm9yIiwiREVMRVRFIiwiZGVsZXRlZEl0ZW0iLCJmaW5kQnlJZEFuZERlbGV0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/items/[id]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/models/itemSchema.ts":
/*!**************************************!*\
  !*** ./src/app/models/itemSchema.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst itemSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    image: {\n        type: String\n    },\n    condition: {\n        type: String,\n        required: true\n    },\n    status: {\n        type: String,\n        required: true\n    },\n    location: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    owner: {\n        type: String,\n        required: true\n    },\n    college: {\n        type: String,\n        required: true\n    }\n});\nconst Item = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).IItem || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"IItem\", itemSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy9pdGVtU2NoZW1hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2RDtBQWE3RCxNQUFNRSxhQUFhLElBQUlELDRDQUFNQSxDQUFRO0lBQ25DRSxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xILE1BQU1DO0lBQ1I7SUFDQUcsV0FBVztRQUNUSixNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUcsUUFBUTtRQUNOTCxNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUksVUFBVTtRQUNSTixNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUssYUFBYTtRQUNYUCxNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQU0sT0FBTztRQUNMUixNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQU8sU0FBUztRQUNQVCxNQUFNQztRQUNOQyxVQUFVO0lBQ1o7QUFDRjtBQUVBLE1BQU1RLE9BQXFCZCx3REFBZSxDQUFDZ0IsS0FBSyxJQUFJaEIscURBQWMsQ0FBUSxTQUFTRTtBQUNuRixpRUFBZVksSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxUaW1vdGh5XFxEZXNrdG9wXFxmcm9udGVuZFxcY3M0MzAwLWNsaWVudC1zZXJ2ZXItcHJvamVjdFxcU2V2ZW5TZWFzU2NhbGx5d2Fnc1xcc3JjXFxhcHBcXG1vZGVsc1xcaXRlbVNjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCwgTW9kZWwgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmludGVyZmFjZSBJSXRlbSBleHRlbmRzIERvY3VtZW50IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgY29uZGl0aW9uOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIG93bmVyOiBzdHJpbmc7XHJcbiAgY29sbGVnZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBpdGVtU2NoZW1hID0gbmV3IFNjaGVtYTxJSXRlbT4oe1xyXG4gIG5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG4gIGNvbmRpdGlvbjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBzdGF0dXM6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgbG9jYXRpb246IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgb3duZXI6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgY29sbGVnZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IEl0ZW06IE1vZGVsPElJdGVtPiA9IG1vbmdvb3NlLm1vZGVscy5JSXRlbSB8fCBtb25nb29zZS5tb2RlbDxJSXRlbT4oXCJJSXRlbVwiLCBpdGVtU2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiaXRlbVNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJpbWFnZSIsImNvbmRpdGlvbiIsInN0YXR1cyIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJvd25lciIsImNvbGxlZ2UiLCJJdGVtIiwibW9kZWxzIiwiSUl0ZW0iLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/itemSchema.ts\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fitems%2F%5Bid%5D%2Froute&page=%2Fapi%2Fitems%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fitems%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();