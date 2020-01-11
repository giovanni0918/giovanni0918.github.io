/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app.bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.entry.js","vendors.bundle"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_scripts/blog.js":
/*!**************************!*\
  !*** ./_scripts/blog.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright 2020 Giovanni Orlando Rivera
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FETCH_BLOG_POSTS = function FETCH_BLOG_POSTS() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://public-api.wordpress.com/rest/v1.1/sites/giovanni0918.wordpress.com/posts';

  if (window.location.pathname === '/pages/blog/') {
    fetch(url).then(function (response) {
      return response.json().then(function (data) {
        data.posts.forEach(function (post, index, arr) {
          document.querySelector('.blog').innerHTML += "\n          <li class=\"blog-post flex-center\" id=\"blog-post--".concat(index, "\">\n            <a class=\"blog-post__title\" href=\"").concat(post.short_URL, "\" target=\"_blank\" rel=\"noopener\" title=\"").concat(post.title, "\">").concat(post.title, "</a>\n            <p class=\"blog-post__date\">").concat(new Date(post.date).toDateString(), "</p>\n            <div class=\"blog-post__img-wrapper\">\n              <img class=\"blog-post__img\" src=\"").concat(post.featured_image, "\" alt=\"").concat(post.title, " img\">\n            </div>\n            ").concat(post.excerpt, "\n          </li>\n        ");
        });
      });
    })["catch"](function (error) {
      return console.warn('Fetch Error :-S', error.message);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (FETCH_BLOG_POSTS);

/***/ }),

/***/ "./_scripts/contact.js":
/*!*****************************!*\
  !*** ./_scripts/contact.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var _node_modules_firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/*
 * Copyright 2020 Giovanni Orlando Rivera
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var config = {
  authDomain: "giovanniorlandorivera.firebaseapp.com",
  databaseURL: "https://giovanniorlandorivera.firebaseio.com"
};
_node_modules_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
var version = '/v0';
var api = _node_modules_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(version);

var HYDRATE_CONTACT_FORM = function HYDRATE_CONTACT_FORM() {
  var form = document.querySelector('.contact-form');

  function onSubmit(event) {
    event.preventDefault();
    console.log(event);
    var button = document.querySelector('#contact-form__button');
    var name = document.querySelector('input[name="name"]').value.replace(/[^A-z ]/g, '');
    var email = document.querySelector('input[name="email"]').value.toLowerCase();
    var subject = document.querySelector('input[name="subject"]').value.replace(/[^\w .+]/g, '');
    var body = document.querySelector('textarea[name="body"]').value.replace(/[^\w .+]/g, '');
    var message = {
      name: name,
      email: email,
      subject: subject,
      body: body
    };
    var messageKey = api.child('messages').push().key;
    button.disabled = true;
    api.child('/messages/' + messageKey + '/').set(message).then(function () {
      alert('Message sent successfully.');
      form.reset();
    })["catch"](function (error) {
      alert('Your message could not be sent at the moment.');
      console.warn(error);
    }).then(function () {
      button.disabled = false;
    });
    api.child('/user-messages/' + name.replace(/ /g, '').toLowerCase() + '/' + messageKey + '/').set(message);
  }

  ;
  form.addEventListener('submit', onSubmit);
};

/* harmony default export */ __webpack_exports__["default"] = (HYDRATE_CONTACT_FORM);

/***/ }),

/***/ "./_scripts/repos.js":
/*!***************************!*\
  !*** ./_scripts/repos.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright 2020 Giovanni Orlando Rivera
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FETCH_REPOS = function FETCH_REPOS() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://api.github.com/users/giovanni0918/repos';

  if (window.location.pathname === '/') {
    var container = document.querySelector(".repo__list");

    if (navigator.onLine) {
      fetch(url).then(function (response) {
        return response.json().then(function (data) {
          var repos = data.map(function (repo) {
            return {
              "id": repo.id,
              "name": repo.name,
              "description": repo.description,
              "homepage": repo.homepage,
              "html_url": repo.html_url
            };
          }).sort(function (a, b) {
            return b.id - a.id;
          });
          repos.forEach(function (repo, index, arr) {
            var li = document.createElement('li');
            li.className = 'repo__list-item';
            li.id = "repo--".concat(index);
            li.title = repo.name.replace(/[-_]+/g, ' ');

            if (repo.homepage) {
              li.innerHTML = "\n                <a href=\"".concat(repo.html_url, "\" class=\"list-item__heading\"\n                  target=\"_blank\" rel=\"noopener\">").concat(repo.name.replace(/[-_]+/g, ' '), "</a>\n                <p class=\"list-item__text\">").concat(repo.description, "</p>\n                <p class=\"list-item__text\">Link: <a href=\"").concat(repo.homepage, "\">").concat(repo.homepage, "</a></p>");
            } else {
              li.innerHTML = "\n                <a href=\"".concat(repo.html_url, "\" class=\"list-item__heading\"\n                  target=\"_blank\" rel=\"noopener\">").concat(repo.name.replace(/[-_]+/g, ' '), "</a>\n                <p class=\"list-item__text\">").concat(repo.description, "</p>");
            }

            container.appendChild(li);
          });
        });
      })["catch"](function (error) {
        return console.warn('Fetch Error :-S', error.message);
      });
    } else {
      var li = document.createElement('li');
      li.className = 'repo__list-item';
      li.id = "repo--offline";
      li.textContent = 'Unable to fetch for repos. Try again later.';
      container.appendChild(li);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (FETCH_REPOS);

/***/ }),

/***/ "./_scripts/standalone.js":
/*!********************************!*\
  !*** ./_scripts/standalone.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright 2020 Giovanni Orlando Rivera
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SUPPORTS_STANDALONE = function SUPPORTS_STANDALONE() {
  if ('standalone' in window.navigator && window.navigator['standalone']) {
    var currentNode,
        location = document.location,
        stop = /^(a|html)$/i;

    var onClickHandler = function onClickHandler(event) {
      currentNode = event.target;

      while (!stop.test(currentNode.nodeName)) {
        currentNode = currentNode.parentNode;
      }

      if ('href' in currentNode && (currentNode.href.indexOf('http') || currentNode.href.indexOf(location.host))) {
        event.preventDefault();
        location.href = currentNode.href;
      }
    };

    document.addEventListener('click', onClickHandler, false);
  }

  console.log('init', 'App');
};

/* harmony default export */ __webpack_exports__["default"] = (SUPPORTS_STANDALONE);

/***/ }),

/***/ "./app.entry.js":
/*!**********************!*\
  !*** ./app.entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_standalone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_scripts/standalone */ "./_scripts/standalone.js");
/* harmony import */ var _scripts_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_scripts/blog */ "./_scripts/blog.js");
/* harmony import */ var _scripts_repos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_scripts/repos */ "./_scripts/repos.js");
/* harmony import */ var _scripts_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_scripts/contact */ "./_scripts/contact.js");
/*
 * Copyright 2020 Giovanni Orlando Rivera
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




Object(_scripts_standalone__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_scripts_blog__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_scripts_repos__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_scripts_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
console.log('imports', [_scripts_standalone__WEBPACK_IMPORTED_MODULE_0__["default"], _scripts_blog__WEBPACK_IMPORTED_MODULE_1__["default"], _scripts_contact__WEBPACK_IMPORTED_MODULE_3__["default"], _scripts_repos__WEBPACK_IMPORTED_MODULE_2__["default"]]);

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map