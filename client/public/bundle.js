/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 96);
/******/ })
/************************************************************************/
/******/ ({

/***/ 96:
/***/ (function(module, exports) {

<<<<<<< HEAD
throw new Error("Module build failed: SyntaxError: Unterminated JSX contents (41:11)\n\n\u001b[0m \u001b[90m 39 | \u001b[39m  \u001b[33m<\u001b[39m\u001b[33mRouter\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 40 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33mApp\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 41 | \u001b[39m  \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mRouter\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 42 | \u001b[39m  )\u001b[33m,\u001b[39m document\u001b[33m.\u001b[39mgetElementById(\u001b[32m'app'\u001b[39m))\u001b[33m;\u001b[39m\n \u001b[90m 43 | \u001b[39m\n \u001b[90m 44 | \u001b[39m\u001b[0m\n");
=======
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/matthewgo/Documents/hr/garrulous-gorillas/client/package.json'\n    at Object.fs.openSync (fs.js:652:18)\n    at Object.fs.readFileSync (fs.js:553:33)\n    at ConfigChainBuilder.addConfig (/Users/matthewgo/Documents/hr/garrulous-gorillas/node_modules/babel-core/lib/transformation/file/options/build-config-chain.js:146:32)\n    at ConfigChainBuilder.findConfigs (/Users/matthewgo/Documents/hr/garrulous-gorillas/node_modules/babel-core/lib/transformation/file/options/build-config-chain.js:102:30)\n    at buildConfigChain (/Users/matthewgo/Documents/hr/garrulous-gorillas/node_modules/babel-core/lib/transformation/file/options/build-config-chain.js:61:13)\n    at OptionManager.init (/Users/matthewgo/Documents/hr/garrulous-gorillas/node_modules/babel-core/lib/transformation/file/options/option-manager.js:354:58)\n    at File.initOptions (/Users/matthewgo/Documents/hr/garrulous-gorillas/node_modules/babel-core/lib/transformation/file/index.js:212:65)\n    at new File (/Users/matthewgo/Documents/hr/garrulous-gorillas/node_modules/babel-core/lib/transformation/file/index.js:135:24)\n    at Pipeline.transform (/Users/matthewgo/Documents/hr/garrulous-gorillas/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\n    at transpile (/Users/matthewgo/Documents/hr/garrulous-gorillas/node_modules/babel-loader/lib/index.js:49:20)\n    at Object.module.exports (/Users/matthewgo/Documents/hr/garrulous-gorillas/node_modules/babel-loader/lib/index.js:174:20)");
>>>>>>> linter

/***/ })

/******/ });