/*
 * Copyright 2017 Giovanni Orlando Rivera
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
const FETCH_REPOS = (url = 'https://api.github.com/users/giovanni0918/repos') => {

  if (window.location.pathname === '/') {

    let container = document.querySelector(".repo__list");

    if (navigator.onLine) {

      fetch(url)
        .then(response => response.json()
          .then(data => {

            const repos = data.map(repo => {
              return {
                "id": repo.id,
                "name": repo.name,
                "description": repo.description,
                "homepage": repo.homepage,
                "html_url": repo.html_url
              }
            }).sort((a, b) => b.id - a.id);

            repos.forEach((repo, index, arr) => {

              let li = document.createElement('li');
              li.className = 'repo__list-item';
              li.id = `repo--${index}`;
              li.title = repo.name.replace(/[-_]+/g, ' ');

              if (repo.homepage) {
                li.innerHTML = `
                <a href="${repo.html_url}" class="list-item__heading"
                  target="_blank" rel="noopener">${repo.name.replace(/[-_]+/g, ' ')}</a>
                <p class="list-item__text">${repo.description}</p>
                <p class="list-item__text">Link: <a href="${repo.homepage}">${repo.homepage}</a></p>`;
              } else {
                li.innerHTML = `
                <a href="${repo.html_url}" class="list-item__heading"
                  target="_blank" rel="noopener">${repo.name.replace(/[-_]+/g, ' ')}</a>
                <p class="list-item__text">${repo.description}</p>`;
              }

              container.appendChild(li);

            });

          }))
        .catch(error => console.warn('Fetch Error :-S', error.message));

    } else {
      let li = document.createElement('li');
      li.className = 'repo__list-item';
      li.id = `repo--offline`;
      li.textContent = 'Unable to fetch for repos. Try again later.';
      container.appendChild(li);
    }

  }
};
export default FETCH_REPOS;
