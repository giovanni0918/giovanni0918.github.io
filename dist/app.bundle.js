/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_scripts/blog/blog-post.service.js":
/*!********************************************!*\
  !*** ./_scripts/blog/blog-post.service.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPostService": () => /* binding */ BlogPostService
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);






/**
 * @typedef {{ short_URL: string, title: string, date: string, featured_image: string, excerpt: string }} BlogPost
 * @typedef {{found: number, posts: any[] }} WordPressApiResult
 */
var BlogPostService = /*#__PURE__*/function () {
  function BlogPostService() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, BlogPostService);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "_userAccount", 'giovanni0918');
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(BlogPostService, [{
    key: "getAll",

    /**
     * @returns {Promise<BlogPost[]|Error>} A promise containing list of blog post
     */
    value: function () {
      var _getAll = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response, json, errorMessage;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://public-api.wordpress.com/rest/v1.1/sites/".concat(this._userAccount, ".wordpress.com/posts"));

              case 2:
                response = _context.sent;

                if (!(response.status === 200)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 6;
                return response.json();

              case 6:
                json = _context.sent;
                console.log(json);
                return _context.abrupt("return", this._mapPostCollection(json));

              case 11:
                errorMessage = "Unable to get list of github repos. An error occurred. Status code: ".concat(response.status);
                throw new Error(errorMessage);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
    /**
     * @param {WordPressApiResult} json Response JSON returned by WordPress
     * @returns {BlogPost[]} A list of blog post
     */

  }, {
    key: "_mapPostCollection",
    value: function _mapPostCollection(json) {
      return json.posts.map(function (post) {
        return {
          "short_URL": post.short_URL,
          "title": post.title,
          "date": new Date(post.date).toDateString(),
          "featured_image": post.featured_image,
          "excerpt": post.excerpt
        };
      }).sort(function (a, b) {
        return b.id - a.id;
      });
    }
  }]);

  return BlogPostService;
}();



/***/ }),

/***/ "./_scripts/blog/blog.js":
/*!*******************************!*\
  !*** ./_scripts/blog/blog.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _blog_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-post.service */ "./_scripts/blog/blog-post.service.js");
/*
 * Copyright 2021 Giovanni Orlando Rivera
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
  if (window.location.pathname === '/pages/blog/') {
    var blogPostService = new _blog_post_service__WEBPACK_IMPORTED_MODULE_0__.BlogPostService();
    blogPostService.getAll().then(function (posts) {
      posts.forEach(function (post, index) {
        document.querySelector('.blog').innerHTML += "\n        <li class=\"blog-post flex-center\" id=\"blog-post--".concat(index, "\">\n          <a class=\"blog-post__title\" href=\"").concat(post.short_URL, "\" target=\"_blank\" rel=\"noopener\" title=\"").concat(post.title, "\">").concat(post.title, "</a>\n          <p class=\"blog-post__date\">").concat(new Date(post.date).toDateString(), "</p>\n          <div class=\"blog-post__img-wrapper\">\n            <img class=\"blog-post__img\" src=\"").concat(post.featured_image, "\" alt=\"").concat(post.title, " img\">\n          </div>\n          ").concat(post.excerpt, "\n        </li>\n      ");
      });
    })["catch"](function (error) {
      return console.warn('Fetch Error :-S', error.message);
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FETCH_BLOG_POSTS);

/***/ }),

/***/ "./_scripts/contact/contact-form.js":
/*!******************************************!*\
  !*** ./_scripts/contact/contact-form.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.service */ "./_scripts/contact/contact.service.js");
/*
 * Copyright 2021 Giovanni Orlando Rivera
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


var HYDRATE_CONTACT_FORM = function HYDRATE_CONTACT_FORM() {
  var form = document.querySelector('.contact-form');
  var contactService = new _contact_service__WEBPACK_IMPORTED_MODULE_0__.ContactService();

  function onSubmit(event) {
    event.preventDefault();
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
    button.disabled = true;
    contactService.sendMessage(message).then(function (result) {
      var success = result.success,
          error = result.error;

      if (success === true) {
        alert('Message sent successfully.');
        form.reset();
      } else {
        alert('Your message could not be sent at the moment.');
        console.warn(error);
      }
    }).then(function () {
      button.disabled = false;
    });
  }

  ;
  form.addEventListener('submit', onSubmit);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HYDRATE_CONTACT_FORM);

/***/ }),

/***/ "./_scripts/contact/contact.service.js":
/*!*********************************************!*\
  !*** ./_scripts/contact/contact.service.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactService": () => /* binding */ ContactService
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");






/**
 * @typedef {{ name: name, email: email, subject: subject, body: body }} Message
 * @typedef {Promise<{success: boolean, error: Error>} SendMessageResult
 */

var config = {
  authDomain: "giovanniorlandorivera.firebaseapp.com",
  databaseURL: "https://giovanniorlandorivera.firebaseio.com"
};

var ContactService = /*#__PURE__*/function () {
  function ContactService() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ContactService);

    firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.initializeApp(config);
    this.version = '/v0';
    this.api = firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.database().ref(this.version);
  }
  /**
   * @param {Message} message The message that will be sent
   * @returns {SendMessageResult} A promise that the message has been sent
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ContactService, [{
    key: "sendMessage",
    value: function () {
      var _sendMessage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(message) {
        var messageKey, name;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                messageKey = this._generateMessageKey();
                name = message.name.replace(/ /g, '').toLowerCase();
                _context.prev = 2;
                _context.next = 5;
                return this.api.child('/messages/' + messageKey + '/').set(message);

              case 5:
                _context.next = 7;
                return this.api.child('/user-messages/' + name + '/' + messageKey + '/').set(message);

              case 7:
                return _context.abrupt("return", {
                  success: true,
                  error: null
                });

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", {
                  success: false,
                  error: _context.t0
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 10]]);
      }));

      function sendMessage(_x) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
    /**
     * @returns {string} Message key reference generated
     */

  }, {
    key: "_generateMessageKey",
    value: function _generateMessageKey() {
      var messageKey = this.api.child('messages').push().key;
      return messageKey;
    }
  }]);

  return ContactService;
}();



/***/ }),

/***/ "./_scripts/repositories/github-repositories.service.js":
/*!**************************************************************!*\
  !*** ./_scripts/repositories/github-repositories.service.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubRepositoriesService": () => /* binding */ GithubRepositoriesService
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);






/**
 * A number, or a string containing a number.
 * @typedef {{ id: string, name: string, description: string, homepage: string, html_url: string, updated_at: string }} GithubRepo
 */
var GithubRepositoriesService = /*#__PURE__*/function () {
  function GithubRepositoriesService() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, GithubRepositoriesService);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "_userAccount", 'giovanni0918');
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(GithubRepositoriesService, [{
    key: "getAll",

    /**
     * @returns {Promise<GithubRepo[]|Error>} A promise containing a collection of github repos
     */
    value: function () {
      var _getAll = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response, json, errorMessage;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://api.github.com/users/".concat(this._userAccount, "/repos"));

              case 2:
                response = _context.sent;

                if (!(response.status === 200)) {
                  _context.next = 10;
                  break;
                }

                _context.next = 6;
                return response.json();

              case 6:
                json = _context.sent;
                return _context.abrupt("return", this._mapRepositoryCollection(json));

              case 10:
                errorMessage = "Unable to get list of github repos. An error occurred. Status code: ".concat(response.status);
                throw new Error(errorMessage);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
    /**
     * 
     * @param {any[]} json Array of objects returned by api
     * @returns {GithubRepo[]} A collection of github repos
     */

  }, {
    key: "_mapRepositoryCollection",
    value: function _mapRepositoryCollection(json) {
      return json.map(function (repo) {
        return {
          "id": repo.id,
          "name": repo.name,
          "description": repo.description,
          "homepage": repo.homepage,
          "html_url": repo.html_url,
          "updated_at": new Date(repo.updated_at)
        };
      }).sort(function (a, b) {
        return b.updated_at - a.updated_at;
      });
    }
  }]);

  return GithubRepositoriesService;
}();



/***/ }),

/***/ "./_scripts/repositories/repositories.js":
/*!***********************************************!*\
  !*** ./_scripts/repositories/repositories.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _github_repositories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-repositories.service */ "./_scripts/repositories/github-repositories.service.js");
/*
 * Copyright 2021 Giovanni Orlando Rivera
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
  if (window.location.pathname === '/') {
    var githubRepositoriesService = new _github_repositories_service__WEBPACK_IMPORTED_MODULE_0__.GithubRepositoriesService();
    var container = document.querySelector(".repo__list");

    if (navigator.onLine) {
      githubRepositoriesService.getAll().then(function (repos) {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FETCH_REPOS);

/***/ }),

/***/ "./_scripts/standalone.js":
/*!********************************!*\
  !*** ./_scripts/standalone.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/*
 * Copyright 2021 Giovanni Orlando Rivera
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SUPPORTS_STANDALONE);

/***/ }),

/***/ "./app.entry.js":
/*!**********************!*\
  !*** ./app.entry.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_standalone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_scripts/standalone */ "./_scripts/standalone.js");
/* harmony import */ var _scripts_blog_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_scripts/blog/blog */ "./_scripts/blog/blog.js");
/* harmony import */ var _scripts_repositories_repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_scripts/repositories/repositories */ "./_scripts/repositories/repositories.js");
/* harmony import */ var _scripts_contact_contact_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_scripts/contact/contact-form */ "./_scripts/contact/contact-form.js");
/*
 * Copyright 2021 Giovanni Orlando Rivera
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




(0,_scripts_standalone__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_scripts_blog_blog__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_scripts_repositories_repositories__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_scripts_contact_contact_form__WEBPACK_IMPORTED_MODULE_3__.default)();
console.log('imports', [_scripts_standalone__WEBPACK_IMPORTED_MODULE_0__.default, _scripts_blog_blog__WEBPACK_IMPORTED_MODULE_1__.default, _scripts_contact_contact_form__WEBPACK_IMPORTED_MODULE_3__.default, _scripts_repositories_repositories__WEBPACK_IMPORTED_MODULE_2__.default]);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app.bundle": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./app.entry.js","vendors.bundle"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgiovanni0918_github_io"] = self["webpackChunkgiovanni0918_github_io"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map