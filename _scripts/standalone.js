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
const SUPPORTS_STANDALONE = () => {
  
  if (('standalone' in window.navigator) && window.navigator['standalone']) {

    let currentNode, location = document.location, stop = /^(a|html)$/i;
    let onClickHandler = (event) => {

      currentNode = event.target;
      while (!(stop).test(currentNode.nodeName)) {
        currentNode = currentNode.parentNode;
      }

      if ('href' in currentNode
        && (currentNode.href.indexOf('http') || currentNode.href.indexOf(location.host))) {
        event.preventDefault();
        location.href = currentNode.href;
      }
    };

    document.addEventListener('click', onClickHandler, false);
  }
  console.log('init', 'App');
};

export default SUPPORTS_STANDALONE;