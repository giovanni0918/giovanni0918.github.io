"use strict";!function(e,n,t){if("standalone"in n&&n.standalone){var i=void 0,o=e.location,a=/^(a|html)$/i,r=function(e){for(i=e.target;!a.test(i.nodeName);)i=i.parentNode;"href"in i&&(i.href.indexOf("http")||i.href.indexOf(o.host))&&(e.preventDefault(),o.href=i.href)};e.addEventListener("click",r,!1)}console.debug({App:"init"})}(document,window.navigator);