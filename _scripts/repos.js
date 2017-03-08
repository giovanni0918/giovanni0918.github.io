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
    class Repos {
        constructor() {
            this._repos = [];
            this._xhr = new XMLHttpRequest();
            this.onLoadHandler = this.onLoadHandler.bind(this);
            this.onErrorHandler = this.onErrorHandler.bind(this);
            this._onLoad = this._onLoad.bind(this);
            this.addEventListeners();
        }
        addEventListeners() {
            console.debug('init', 'Repos');
            document.addEventListener('DOMContentLoaded', this._onLoad);
        }
        _onLoad(event) {
            this._xhr.open('GET', 'https://api.github.com/users/giovanni0918/repos', true);
            this._xhr.onload = this.onLoadHandler;
            this._xhr.onerror = this.onErrorHandler;
            this._xhr.send();
        }

        onLoadHandler() {
            const data = JSON.parse(this._xhr.responseText);
            this._repos = data.map((repo) => {
                return { id: repo.id, name: repo.name, description: repo.description, homepage: repo.homepage, html_url: repo.html_url }
            }).sort((a, b) => b.id - a.id);

            let container = document.querySelector(".repo__list");

            container.innerHTML = this._repos.map((repo) => {

                if (repo.homepage) {
                    return `<li class="repo__list-item" title="${repo.name.replace(/[-_]+/g, ' ')}">
                        <a href="${repo.html_url}" class="list-item__heading repo-title" target="_blank" rel="noopener">${repo.name.replace(/[-_]+/g, ' ')}</a>
                        <p class="list-item__text">${repo.description}</p>
                        <p class="list-item__text">Link: <a href="${repo.homepage}">${repo.homepage}</a></p>
                    </li>`;
                } else {
                    return `<li class="repo__list-item" title="${repo.name.replace(/[-_]+/g, ' ')}">
                        <a href="${repo.html_url}" class="list-item__heading repo-title" target="_blank" rel="noopener">${repo.name.replace(/[-_]+/g, ' ')}</a>
                        <p class="list-item__text">${repo.description}</p>			            
                    </li>`;
                }

            }).join('');
        }

        onErrorHandler(err) {
            console.log('Fetch Error :-S', err);
        }

    }
    new Repos();
})(window, document);