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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongoDB = async ()=>{\n    try {\n        const uri = process.env.MONGODB_URI;\n        if (!uri) {\n            throw new Error(\"MONGODB_URI is not defined in environment variables.\");\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n        console.log(\"Connected to MongoDB.\");\n    } catch (error) {\n        console.log(\"Error connecting to MongoDB:\", error.message);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsaUJBQWlCO0lBQ3RCLElBQUk7UUFDRixNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7UUFDbkMsSUFBSSxDQUFDSCxLQUFLO1lBQ1IsTUFBTSxJQUFJSSxNQUFNO1FBQ2xCO1FBR0EsTUFBTU4sdURBQWdCLENBQUNFO1FBQ3ZCTSxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUMsR0FBRyxDQUFDLGdDQUFnQyxNQUFpQkUsT0FBTztJQUN0RTtBQUNEO0FBR0EsaUVBQWVWLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGltb3RoeVxcRGVza3RvcFxcZnJvbnRlbmRcXGNzNDMwMC1jbGllbnQtc2VydmVyLXByb2plY3RcXFNldmVuU2Vhc1NjYWxseXdhZ3NcXGNvbmZpZ1xcbW9uZ29kYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0TW9uZ29EQiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuIHRyeSB7XHJcbiAgIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG4gICBpZiAoIXVyaSkge1xyXG4gICAgIHRocm93IG5ldyBFcnJvcihcIk1PTkdPREJfVVJJIGlzIG5vdCBkZWZpbmVkIGluIGVudmlyb25tZW50IHZhcmlhYmxlcy5cIik7XHJcbiAgIH1cclxuXHJcblxyXG4gICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHVyaSk7XHJcbiAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE1vbmdvREIuXCIpO1xyXG4gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgY29uc29sZS5sb2coXCJFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6XCIsIChlcnJvciBhcyBFcnJvcikubWVzc2FnZSk7XHJcbiB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdE1vbmdvREI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdE1vbmdvREIiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./config/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fitems%2Froute&page=%2Fapi%2Fitems%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fitems%2Froute.ts&appDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fitems%2Froute&page=%2Fapi%2Fitems%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fitems%2Froute.ts&appDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Timothy_Desktop_frontend_cs4300_client_server_project_SevenSeasScallywags_src_app_api_items_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/items/route.ts */ \"(rsc)/./src/app/api/items/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/items/route\",\n        pathname: \"/api/items\",\n        filename: \"route\",\n        bundlePath: \"app/api/items/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Timothy\\\\Desktop\\\\frontend\\\\cs4300-client-server-project\\\\SevenSeasScallywags\\\\src\\\\app\\\\api\\\\items\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Timothy_Desktop_frontend_cs4300_client_server_project_SevenSeasScallywags_src_app_api_items_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZpdGVtcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGaXRlbXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZpdGVtcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNUaW1vdGh5JTVDRGVza3RvcCU1Q2Zyb250ZW5kJTVDY3M0MzAwLWNsaWVudC1zZXJ2ZXItcHJvamVjdCU1Q1NldmVuU2Vhc1NjYWxseXdhZ3MlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1RpbW90aHklNUNEZXNrdG9wJTVDZnJvbnRlbmQlNUNjczQzMDAtY2xpZW50LXNlcnZlci1wcm9qZWN0JTVDU2V2ZW5TZWFzU2NhbGx5d2FncyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDd0U7QUFDcko7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFRpbW90aHlcXFxcRGVza3RvcFxcXFxmcm9udGVuZFxcXFxjczQzMDAtY2xpZW50LXNlcnZlci1wcm9qZWN0XFxcXFNldmVuU2Vhc1NjYWxseXdhZ3NcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcaXRlbXNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2l0ZW1zL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvaXRlbXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2l0ZW1zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcVGltb3RoeVxcXFxEZXNrdG9wXFxcXGZyb250ZW5kXFxcXGNzNDMwMC1jbGllbnQtc2VydmVyLXByb2plY3RcXFxcU2V2ZW5TZWFzU2NhbGx5d2Fnc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxpdGVtc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fitems%2Froute&page=%2Fapi%2Fitems%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fitems%2Froute.ts&appDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _config_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config/mongodb */ \"(rsc)/./config/mongodb.ts\");\n/* harmony import */ var _app_models_itemSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/models/itemSchema */ \"(rsc)/./src/app/models/itemSchema.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET() {\n    try {\n        await (0,_config_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const items = await _app_models_itemSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            items\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"Failed to fetch items\",\n            error: error\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const formData = await request.formData();\n        const name = formData.get('name')?.toString();\n        const category = formData.get('category')?.toString();\n        const condition = formData.get('condition')?.toString();\n        const status = formData.get('status')?.toString();\n        const location = formData.get('location')?.toString();\n        const college = formData.get('college')?.toString();\n        const description = formData.get('description')?.toString();\n        const image = formData.get('image')?.toString;\n        await (0,_config_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        await _app_models_itemSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n            name,\n            college,\n            category,\n            condition,\n            status,\n            location,\n            description,\n            image: image\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: 'Item added successfully'\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: 'Error adding item'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9pdGVtcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUNiO0FBQ2E7QUFFakQsZUFBZUc7SUFDbEIsSUFBSTtRQUNBLE1BQU1ILDJEQUFjQTtRQUNwQixNQUFNSSxRQUFRLE1BQU1ILDhEQUFJQSxDQUFDSSxJQUFJO1FBQzdCLE9BQU9ILHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRUY7UUFBTSxHQUFHO1lBQUVHLFFBQVE7UUFBSTtJQUN0RCxFQUFFLE9BQU9DLE9BQU87UUFDWixPQUFPTixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUVHLFNBQVM7WUFBeUJELE9BQU9BO1FBQU0sR0FBRztZQUFFRCxRQUFRO1FBQUk7SUFDL0Y7QUFDSjtBQUVPLGVBQWVHLEtBQUtDLE9BQW9CO0lBQzNDLElBQUk7UUFDQSxNQUFNQyxXQUFXLE1BQU1ELFFBQVFDLFFBQVE7UUFDdkMsTUFBTUMsT0FBT0QsU0FBU0UsR0FBRyxDQUFDLFNBQVNDO1FBQ25DLE1BQU1DLFdBQVdKLFNBQVNFLEdBQUcsQ0FBQyxhQUFhQztRQUMzQyxNQUFNRSxZQUFZTCxTQUFTRSxHQUFHLENBQUMsY0FBY0M7UUFDN0MsTUFBTVIsU0FBU0ssU0FBU0UsR0FBRyxDQUFDLFdBQVdDO1FBQ3ZDLE1BQU1HLFdBQVdOLFNBQVNFLEdBQUcsQ0FBQyxhQUFhQztRQUMzQyxNQUFNSSxVQUFVUCxTQUFTRSxHQUFHLENBQUMsWUFBWUM7UUFDekMsTUFBTUssY0FBY1IsU0FBU0UsR0FBRyxDQUFDLGdCQUFnQkM7UUFDakQsTUFBTU0sUUFBUVQsU0FBU0UsR0FBRyxDQUFDLFVBQVVDO1FBRXJDLE1BQU1mLDJEQUFjQTtRQUNwQixNQUFNQyw4REFBSUEsQ0FBQ3FCLE1BQU0sQ0FBQztZQUNkVDtZQUNBTTtZQUNBSDtZQUNBQztZQUNBVjtZQUNBVztZQUNBRTtZQUNBQyxPQUFPQTtRQUNYO1FBRUEsT0FBT25CLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRUcsU0FBUztRQUEwQixHQUFHO1lBQUVGLFFBQVE7UUFBSTtJQUNuRixFQUFFLE9BQU9DLE9BQU87UUFDWmUsUUFBUWYsS0FBSyxDQUFDQTtRQUNkLE9BQU9OLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRUcsU0FBUztRQUFvQixHQUFHO1lBQUVGLFFBQVE7UUFBSTtJQUM3RTtBQUNKIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFRpbW90aHlcXERlc2t0b3BcXGZyb250ZW5kXFxjczQzMDAtY2xpZW50LXNlcnZlci1wcm9qZWN0XFxTZXZlblNlYXNTY2FsbHl3YWdzXFxzcmNcXGFwcFxcYXBpXFxpdGVtc1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3RNb25nb0RCIGZyb20gXCIuLi8uLi8uLi8uLi9jb25maWcvbW9uZ29kYlwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiQC9hcHAvbW9kZWxzL2l0ZW1TY2hlbWFcIjtcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdE1vbmdvREIoKTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IEl0ZW0uZmluZCgpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGl0ZW1zIH0sIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGZldGNoIGl0ZW1zXCIsIGVycm9yOiBlcnJvciB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJyk/LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBmb3JtRGF0YS5nZXQoJ2NhdGVnb3J5Jyk/LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgY29uZGl0aW9uID0gZm9ybURhdGEuZ2V0KCdjb25kaXRpb24nKT8udG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSBmb3JtRGF0YS5nZXQoJ3N0YXR1cycpPy50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZm9ybURhdGEuZ2V0KCdsb2NhdGlvbicpPy50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxlZ2UgPSBmb3JtRGF0YS5nZXQoJ2NvbGxlZ2UnKT8udG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKT8udG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKT8udG9TdHJpbmc7XHJcblxyXG4gICAgICAgIGF3YWl0IGNvbm5lY3RNb25nb0RCKCk7XHJcbiAgICAgICAgYXdhaXQgSXRlbS5jcmVhdGUoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBjb2xsZWdlLFxyXG4gICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgY29uZGl0aW9uLFxyXG4gICAgICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgaW1hZ2U6IGltYWdlIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnSXRlbSBhZGRlZCBzdWNjZXNzZnVsbHknIH0sIHsgc3RhdHVzOiAyMDEgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdFcnJvciBhZGRpbmcgaXRlbScgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdE1vbmdvREIiLCJJdGVtIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwiaXRlbXMiLCJmaW5kIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwibWVzc2FnZSIsIlBPU1QiLCJyZXF1ZXN0IiwiZm9ybURhdGEiLCJuYW1lIiwiZ2V0IiwidG9TdHJpbmciLCJjYXRlZ29yeSIsImNvbmRpdGlvbiIsImxvY2F0aW9uIiwiY29sbGVnZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJjcmVhdGUiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/items/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/models/itemSchema.ts":
/*!**************************************!*\
  !*** ./src/app/models/itemSchema.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst itemSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    image: {\n        type: String\n    },\n    condition: {\n        type: String,\n        required: true\n    },\n    status: {\n        type: String,\n        required: true\n    },\n    location: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    saved: {\n        type: Boolean\n    }\n});\nconst Item = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).IItem || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"IItem\", itemSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy9pdGVtU2NoZW1hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2RDtBQVk3RCxNQUFNRSxhQUFhLElBQUlELDRDQUFNQSxDQUFRO0lBQ25DRSxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xILE1BQU1DO0lBQ1I7SUFDQUcsV0FBVztRQUNUSixNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUcsUUFBUTtRQUNOTCxNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUksVUFBVTtRQUNSTixNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUssYUFBYTtRQUNYUCxNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQU0sT0FBTztRQUNMUixNQUFNUztJQUNSO0FBQ0Y7QUFFQSxNQUFNQyxPQUFxQmQsd0RBQWUsQ0FBQ2dCLEtBQUssSUFBSWhCLHFEQUFjLENBQVEsU0FBU0U7QUFDbkYsaUVBQWVZLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGltb3RoeVxcRGVza3RvcFxcZnJvbnRlbmRcXGNzNDMwMC1jbGllbnQtc2VydmVyLXByb2plY3RcXFNldmVuU2Vhc1NjYWxseXdhZ3NcXHNyY1xcYXBwXFxtb2RlbHNcXGl0ZW1TY2hlbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgRG9jdW1lbnQsIE1vZGVsIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5pbnRlcmZhY2UgSUl0ZW0gZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG4gIGNvbmRpdGlvbjogc3RyaW5nO1xyXG4gIHN0YXR1czogc3RyaW5nO1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBzYXZlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGl0ZW1TY2hlbWEgPSBuZXcgU2NoZW1hPElJdGVtPih7XHJcbiAgbmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gIH0sXHJcbiAgY29uZGl0aW9uOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIHN0YXR1czoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBsb2NhdGlvbjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBzYXZlZDoge1xyXG4gICAgdHlwZTogQm9vbGVhblxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBJdGVtOiBNb2RlbDxJSXRlbT4gPSBtb25nb29zZS5tb2RlbHMuSUl0ZW0gfHwgbW9uZ29vc2UubW9kZWw8SUl0ZW0+KFwiSUl0ZW1cIiwgaXRlbVNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW07XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsIml0ZW1TY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiaW1hZ2UiLCJjb25kaXRpb24iLCJzdGF0dXMiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwic2F2ZWQiLCJCb29sZWFuIiwiSXRlbSIsIm1vZGVscyIsIklJdGVtIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/itemSchema.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fitems%2Froute&page=%2Fapi%2Fitems%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fitems%2Froute.ts&appDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTimothy%5CDesktop%5Cfrontend%5Ccs4300-client-server-project%5CSevenSeasScallywags&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();