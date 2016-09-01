'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright 2016 Giovanni Orlando Rivera
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
(function (window, document, undefined) {
    'use strict';

    var Blog = function () {
        function Blog() {
            _classCallCheck(this, Blog);

            this._posts = [];
            this._xhr = new XMLHttpRequest();
            this.onLoadHandler = this.onLoadHandler.bind(this);
            this.onErrorHandler = this.onErrorHandler.bind(this);
            this._onLoad = this._onLoad.bind(this);
            this.addEventListeners();
        }

        _createClass(Blog, [{
            key: 'addEventListeners',
            value: function addEventListeners() {
                console.debug('init', 'Blog');
                document.addEventListener('DOMContentLoaded', this._onLoad);
            }
        }, {
            key: '_onLoad',
            value: function _onLoad(event) {
                this._xhr.open('GET', 'https://public-api.wordpress.com/rest/v1.1/sites/giovanni0918.wordpress.com/posts', true);
                this._xhr.onload = this.onLoadHandler;
                this._xhr.onerror = this.onErrorHandler;
                this._xhr.send();
            }
        }, {
            key: 'onLoadHandler',
            value: function onLoadHandler() {
                var data = JSON.parse(this._xhr.responseText);
                this._posts = data.posts;
                this._posts.forEach(function (post) {
                    document.querySelector('#blog-post__list').innerHTML += '\n                  <li class="blog-post__listitem">\n                    <a href="' + post.short_URL + '" target="_blank" title="' + post.title + '">' + post.title + '</a>\n                    <span class="date">' + new Date(post.date).toDateString() + '</span>\n                    ' + post.excerpt + '\n                  </li>\n                ';
                });
            }
        }, {
            key: 'onErrorHandler',
            value: function onErrorHandler(err) {
                console.log('Fetch Error :-S', err);
            }
        }]);

        return Blog;
    }();

    new Blog();
})(window, document);