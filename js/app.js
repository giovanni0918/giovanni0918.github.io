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
      this._tabList = document.querySelectorAll('.navbar__tab');
      this._tabArray = Array.from(this._tabList);

      this._listItemsEl = document.querySelectorAll('.list-group-item');
      this._listItemsArray = Array.from(this._listItemsEl);

      this._onLoad = this._onLoad.bind(this);
      this.addEventListeners();
    }
    addEventListeners() {
      console.debug({'init':'App'});
      document.addEventListener('DOMContentLoaded', this._onLoad);
    }
    _onLoad(event) {
      console.log('tabs', this._tabArray);
      console.log('li', this._listItemsArray);
    }
  }
  new App();
})(window, document);
