"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();!function(e,t,n){var o=function(){function n(){_classCallCheck(this,n),this._tabList=t.querySelectorAll("a[role=tab]"),this._tabArray=Array.from(this._tabList),this._onLoad=this._onLoad.bind(this),this.addEventListeners()}return _createClass(n,[{key:"addEventListeners",value:function(){console.debug({init:"App"}),t.addEventListener("DOMContentLoaded",this._onLoad)}},{key:"_onLoad",value:function(t){this._tabArray.forEach(function(t){return t.addEventListener("click",function(n){n.preventDefault(),e.location.href=t.href})}),console.debug({tabs:this._tabArray})}}]),n}();new o}(window,document);var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();!function(e,t,n){var o=function(){function e(){_classCallCheck(this,e),this._posts=[],this._xhr=new XMLHttpRequest,this.onLoadHandler=this.onLoadHandler.bind(this),this.onErrorHandler=this.onErrorHandler.bind(this),this._onLoad=this._onLoad.bind(this),this.addEventListeners()}return _createClass(e,[{key:"addEventListeners",value:function(){console.debug("init","Blog"),t.addEventListener("DOMContentLoaded",this._onLoad)}},{key:"_onLoad",value:function(e){this._xhr.open("GET","https://public-api.wordpress.com/rest/v1.1/sites/giovanni0918.wordpress.com/posts",!0),this._xhr.onload=this.onLoadHandler,this._xhr.onerror=this.onErrorHandler,this._xhr.send()}},{key:"onLoadHandler",value:function(){var e=JSON.parse(this._xhr.responseText);this._posts=e.posts,this._posts.forEach(function(e){t.querySelector(".blog").innerHTML+='\n                  <li class="blog-post flex-center">\n                    <a class="blog-post__title" href="'+e.short_URL+'" target="_blank" rel="noopener" title="'+e.title+'">'+e.title+'</a>\n                    <span class="blog-post__date">'+new Date(e.date).toDateString()+'</span>\n                    <div class="blog-post__img-wrapper">\n                      <img class="blog-post__img" src="'+e.featured_image+'" alt="'+e.title+' img">\n                    </div>\n                    '+e.excerpt+"\n                  </li>\n                "})}},{key:"onErrorHandler",value:function(e){console.log("Fetch Error :-S",e)}}]),e}();new o}(window,document),function(e,t,n){}(window,document),function(e,t,n){fetch("https://api.github.com/users/giovanni0918/repos",{method:"GET"}).then(function(e){return 200!==e.status?void console.log("Looks like there was a problem. Status Code: "+e.status):void e.json().then(function(e){var n=e.map(function(e){return{id:e.id,name:e.name,description:e.description,homepage:e.homepage,html_url:e.html_url}}).sort(function(e,t){return t.id-e.id}),o=t.querySelector("#repos .list");o.innerHTML=n.map(function(e){return e.homepage?'<li class="list-item" title="'+e.name.replace(/[-_]+/g," ")+'">\n                                <a href="'+e.html_url+'" class="list-item__heading repo-title" target="_blank" rel="noopener">'+e.name.replace(/[-_]+/g," ")+'</a>\n                                <p class="list-item__text">'+e.description+'</p>\n                                <p class="list-item__text">Demo link: <a href="'+e.homepage+'">'+e.homepage+"</a></p>\n                            </li>":'<li class="list-item repo-title" title="'+e.name.replace(/[-_]+/g," ")+'">\n                                <a href="'+e.html_url+'" class="list-item__heading repo-title" target="_blank" rel="noopener">'+e.name.replace(/[-_]+/g," ")+'</a>\n                                <p class="list-item__text">'+e.description+"</p>\t\t\t            \n                            </li>"}).join("")})}).catch(function(e){return console.warn(e)})}(window,document);