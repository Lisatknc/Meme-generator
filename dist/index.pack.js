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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find package '@babel-preset-env/babel-preset' imported from /Users/lisa/Desktop/meme-generator-1/babel-virtual-resolve-base.js\n    at new NodeError (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:194:5)\n    at packageResolve (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:908:9)\n    at moduleResolve (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:937:20)\n    at defaultResolve (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:1007:15)\n    at resolve (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:1020:12)\n    at tryImportMetaResolve (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/config/files/plugins.js:142:45)\n    at resolveStandardizedNameForImport (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/config/files/plugins.js:164:19)\n    at resolveStandardizedName (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/config/files/plugins.js:173:22)\n    at loadPreset (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/config/files/plugins.js:61:20)\n    at loadPreset.next (<anonymous>)\n    at createDescriptor (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/config/config-descriptors.js:140:16)\n    at createDescriptor.next (<anonymous>)\n    at step (/Users/lisa/Desktop/meme-generator-1/node_modules/gensync/index.js:261:32)\n    at evaluateAsync (/Users/lisa/Desktop/meme-generator-1/node_modules/gensync/index.js:291:5)\n    at /Users/lisa/Desktop/meme-generator-1/node_modules/gensync/index.js:44:11\n    at Array.forEach (<anonymous>)\n    at Function.async (/Users/lisa/Desktop/meme-generator-1/node_modules/gensync/index.js:43:15)\n    at Function.all (/Users/lisa/Desktop/meme-generator-1/node_modules/gensync/index.js:216:13)\n    at Generator.next (<anonymous>)\n    at createDescriptors (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/config/config-descriptors.js:102:41)\n    at createDescriptors.next (<anonymous>)\n    at createPresetDescriptors (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/config/config-descriptors.js:96:17)\n    at createPresetDescriptors.next (<anonymous>)\n    at /Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/config/config-descriptors.js:57:32\n    at Generator.next (<anonymous>)\n    at Function.<anonymous> (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/gensync-utils/async.js:21:3)\n    at Generator.next (<anonymous>)\n    at step (/Users/lisa/Desktop/meme-generator-1/node_modules/gensync/index.js:269:25)\n    at evaluateAsync (/Users/lisa/Desktop/meme-generator-1/node_modules/gensync/index.js:291:5)\n    at Function.errback (/Users/lisa/Desktop/meme-generator-1/node_modules/gensync/index.js:113:7)\n    at errback (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/gensync-utils/async.js:65:18)\n    at async (/Users/lisa/Desktop/meme-generator-1/node_modules/gensync/index.js:188:17)\n    at onFirstPause (/Users/lisa/Desktop/meme-generator-1/node_modules/gensync/index.js:216:13)\n    at Generator.next (<anonymous>)\n    at cachedFunction (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/config/caching.js:52:46)\n    at cachedFunction.next (<anonymous>)\n    at mergeChainOpts (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/config/config-chain.js:350:34)\n    at mergeChainOpts.next (<anonymous>)\n    at chainWalker (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/config/config-chain.js:316:14)\n    at chainWalker.next (<anonymous>)\n    at buildRootChain (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/config/config-chain.js:56:36)\n    at buildRootChain.next (<anonymous>)\n    at loadPrivatePartialConfig (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/config/partial.js:72:62)\n    at loadPrivatePartialConfig.next (<anonymous>)\n    at loadPartialConfig (/Users/lisa/Desktop/meme-generator-1/node_modules/@babel/core/lib/config/partial.js:115:25)\n    at loadPartialConfig.next (<anonymous>)\n    at step (/Users/lisa/Desktop/meme-generator-1/node_modules/gensync/index.js:269:25)\n    at evaluateAsync (/Users/lisa/Desktop/meme-generator-1/node_modules/gensync/index.js:291:5)\n    at /Users/lisa/Desktop/meme-generator-1/node_modules/gensync/index.js:93:9\n    at new Promise (<anonymous>)");

/***/ })
/******/ ]);