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
const FETCH_BLOG_POSTS = (url = 'https://public-api.wordpress.com/rest/v1.1/sites/giovanni0918.wordpress.com/posts') => {

  if (window.location.pathname === '/pages/blog/') {
    fetch(url)
      .then(response => response.json()
        .then(data => {
          data.posts.forEach((post, index, arr) => {
            document.querySelector('.blog').innerHTML += `
          <li class="blog-post flex-center" id="blog-post--${index}">
            <a class="blog-post__title" href="${post.short_URL}" target="_blank" rel="noopener" title="${post.title}">${post.title}</a>
            <p class="blog-post__date">${new Date(post.date).toDateString()}</p>
            <div class="blog-post__img-wrapper">
              <img class="blog-post__img" src="${post.featured_image}" alt="${post.title} img">
            </div>
            ${post.excerpt}
          </li>
        `;
          });
        }))
      .catch(error => console.warn('Fetch Error :-S', error.message));
  }
};
export default FETCH_BLOG_POSTS;