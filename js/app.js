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
  class App {
    constructor() {
      this._tabList = document.querySelectorAll('a[role=tab]');
      this._tabArray = Array.from(this._tabList);
      this._onLoad = this._onLoad.bind(this);
      this.addEventListeners();
    }
    addEventListeners() {
      console.debug({'init':'App'});
      document.addEventListener('DOMContentLoaded', this._onLoad);
    }
    _onLoad(event) {
      this._tabArray.forEach((tab)=> tab.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = tab.href;
      }));
      console.debug({'tabs': this._tabArray});
    }
  }
  new App();
})(window, document);
