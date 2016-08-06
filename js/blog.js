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
(function(window, document, undefined) {
    'use strict';
    class Blog {
        constructor() {
            this._posts = [];
            this._xhr = new XMLHttpRequest();
            this.onLoadHandler = this.onLoadHandler.bind(this);
            this.onErrorHandler = this.onErrorHandler.bind(this);
            this._onLoad = this._onLoad.bind(this);
            this.addEventListeners();
        }
        addEventListeners() {
            console.debug('init', 'Blog');
            document.addEventListener('DOMContentLoaded', this._onLoad);
        }
        _onLoad(event) {
            this._xhr.open('GET', 'https://public-api.wordpress.com/rest/v1.1/sites/giovanni0918.wordpress.com/posts', true);
            this._xhr.onload = this.onLoadHandler;
            this._xhr.onerror = this.onErrorHandler;
            this._xhr.send();
        }

        onLoadHandler() {
            const data = JSON.parse(this._xhr.responseText);
            this._posts = data.posts;
            this._posts.forEach((post) => {
                document.querySelector('#blog-post__list').innerHTML += `
                  <li class="blog-post__listitem" role="listitem">
                    <div class="col-xs-8">
                      <a href="${post.short_URL}" target="_blank" title="${post.title}">${post.title}</a>
                    </div>
                    <div class="col-xs-4">
                      <span class="date">${new Date(post.date).toDateString()}</span>
                    </div>
                    <div class="col-xs-12">
                      <p>${post.excerpt}</p>
                    </div>
                  </li>
                `;
            });
        }

        onErrorHandler(err) {
            console.log('Fetch Error :-S', err);
        }

    }
    new Blog();
})(window, document);
