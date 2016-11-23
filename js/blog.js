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
                document.querySelector('.blog').innerHTML += `
                  <li class="blog-post flex-center">
                    <a class="blog-post__title" href="${post.short_URL}" target="_blank" rel="noopener" title="${post.title}">${post.title}</a>
                    <span class="blog-post__date">${new Date(post.date).toDateString()}</span>
                    <div class="blog-post__img-wrapper">
                      <img class="blog-post__img" src="${post.featured_image}" alt="${post.title} img">
                    </div>
                    ${post.excerpt}
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
