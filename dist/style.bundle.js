!function(e){function t(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,o){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=17)}([function(e,t){function i(e,t){var i=e[1]||"",n=e[3];if(!n)return i;if(t&&"function"==typeof btoa){var r=o(n);return[i].concat(n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"})).concat([r]).join("\n")}return[i].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=i(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(o[r]=!0)}for(n=0;n<e.length;n++){var a=e[n];"number"==typeof a[0]&&o[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},function(e,t,i){function o(e,t){for(var i=0;i<e.length;i++){var o=e[i],n=g[o.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](o.parts[r]);for(;r<o.parts.length;r++)n.parts.push(d(o.parts[r],t))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(d(o.parts[r],t));g[o.id]={id:o.id,refs:1,parts:a}}}}function n(e,t){for(var i=[],o={},n=0;n<e.length;n++){var r=e[n],a=t.base?r[0]+t.base:r[0],c=r[1],s=r[2],l=r[3],d={css:c,media:s,sourceMap:l};o[a]?o[a].parts.push(d):i.push(o[a]={id:a,parts:[d]})}return i}function r(e,t){var i=u(e.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=b[b.length-1];if("top"===e.insertAt)o?o.nextSibling?i.insertBefore(t,o.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function c(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),r(e,t),t}function s(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),r(e,t),t}function l(e,t){Object.keys(t).forEach(function(i){e.setAttribute(i,t[i])})}function d(e,t){var i,o,n,r;if(t.transform&&e.css){if(!(r=t.transform(e.css)))return function(){};e.css=r}if(t.singleton){var l=x++;i=v||(v=c(t)),o=h.bind(null,i,l,!1),n=h.bind(null,i,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=s(t),o=p.bind(null,i,t),n=function(){a(i),i.href&&URL.revokeObjectURL(i.href)}):(i=c(t),o=f.bind(null,i),n=function(){a(i)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}function h(e,t,i,o){var n=i?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,n);else{var r=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t){var i=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}function p(e,t,i){var o=i.css,n=i.sourceMap,r=void 0===t.convertToAbsoluteUrls&&n;(t.convertToAbsoluteUrls||r)&&(o=y(o)),n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var a=new Blob([o],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var g={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),u=function(e){var t={};return function(i){return void 0===t[i]&&(t[i]=e.call(this,i)),t[i]}}(function(e){return document.querySelector(e)}),v=null,x=0,b=[],y=i(32);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},void 0===t.singleton&&(t.singleton=m()),void 0===t.insertInto&&(t.insertInto="head"),void 0===t.insertAt&&(t.insertAt="bottom");var i=n(e,t);return o(i,t),function(e){for(var r=[],a=0;a<i.length;a++){var c=i[a],s=g[c.id];s.refs--,r.push(s)}if(e){o(n(e,t),t)}for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete g[s.id]}}}};var w=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},,,,,,,,function(e,t,i){var o=i(18);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;i(1)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,i){var o=i(19);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;i(1)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,i){var o=i(20);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;i(1)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,i){var o=i(21);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;i(1)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,i){var o=i(22);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;i(1)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,i){var o=i(23);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;i(1)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,i){var o=i(24);"string"==typeof o&&(o=[[e.i,o,""]]);var n={};n.transform=void 0;i(1)(o,n);o.locals&&(e.exports=o.locals)},,function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=i(13),r=(o(n),i(12)),a=(o(r),i(9)),c=(o(a),i(10)),s=(o(c),i(11)),l=(o(s),i(14)),d=(o(l),i(15));o(d)},function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,".blog{list-style-type:none;width:100%;margin:0;padding:0}.blog-post{max-width:768px;padding:1rem;margin:1rem 1.25rem;background-color:#fff;font:1.1rem Arial,Helvetica,sans-serif;color:#000;clear:both;overflow-y:auto;box-shadow:0 3px 6px rgba(0,0,0,.3)}.blog-post.blog-post.flex-center p{margin:1rem 0}.blog-post__date{font-size:.75em;color:#000}.blog-post__title{display:inline-block;word-wrap:normal;font:1.25rem Arial,Helvetica,sans-serif;color:#3d5afe;font-weight:600;text-decoration:none}.blog-post__title:hover{text-decoration:underline}.blog-post__img{width:100%}.blog-post__img-wrapper{background:#fdfdfd;max-height:300px;overflow-y:hidden}.blog-post p{margin-top:.5rem;font:.875rem Arial,Helvetica,sans-serif}",""])},function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,'*{box-sizing:border-box}body,html{width:100%;min-height:100vh;margin:0;padding:0;border:0;font-size:1rem;font-family:Arial,Helvetica,sans-serif}.page-content{min-height:80vh}.content-wrapper{max-width:992px;margin:1em;padding:1em}div.container{width:100%;min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column}div.container:nth-of-type(odd){background-color:rgba(0,0,0,.8);color:#fff}div.container:nth-of-type(odd) a:focus,div.container:nth-of-type(odd) a:hover{color:#e91e63;text-decoration:underline}div.container:nth-of-type(2n){background-color:rgba(85,85,221,.6);color:#000}div.container:nth-of-type(2n) a:focus,div.container:nth-of-type(2n) a:hover{text-decoration:underline}div.container.food-lover{background-image:url("/dist/images/food-lover.svg");background-color:#25d197;background-repeat:no-repeat;background-position:100% 0}div.container.tech-enthusiast{background-image:url("/dist/images/tech-enthusiast.svg");background-color:#1985a1;background-repeat:no-repeat;background-position:100% 0}div.container.container.web-developer{background-color:#8d5a97;background-position:100% 0}div.container.container.web-developer,div.container.social{background-image:url("/dist/images/web-developer.svg");background-repeat:no-repeat}div.container.social{background-position:0 0}div.container.social h2{font-size:1rem;text-transform:capitalize}div.container.social h2 .social-link__list{list-style-type:none;width:100%;margin:0;padding:0}div.container.social h2 .social-link__list-item{margin:.5rem 0}div.container.social h2 .social-link__list-item a{font-size:1rem}div.container.social h2 .social-link__list-item a:link,div.container.social h2 .social-link__list-item a:visited{color:#fff}div.container.social h2 .social-link__list-item a:active,div.container.social h2 .social-link__list-item a:focus,div.container.social h2 .social-link__list-item ahover{color:#e91e63}@media only screen and (min-width:768px){div.container.social h2 .social-link__list-item a{font-size:1.125rem}}@media only screen and (min-width:992px){div.container.social h2 .social-link__list-item a{font-size:1.25rem}}@media only screen and (min-width:992px){div.container.iam{flex-direction:row}}div.container.iam div.container:nth-of-type(2n),div.container.iam div.container:nth-of-type(odd){flex:1}@media only screen and (max-width:768px){div.container.iam div.container:nth-of-type(2n),div.container.iam div.container:nth-of-type(odd){min-height:33vh}}@media only screen and (min-width:992px){div.container.iam div.container:nth-of-type(2n),div.container.iam div.container:nth-of-type(odd){background-size:80%;background-position:top}}div.container.iam a:hover,div.container.iam div.container.iam a:focus{color:#fff}div.container h2{width:100%;margin:0;padding:0;background-color:rgba(0,0,0,.4);color:#fff;flex-grow:1;flex-shrink:1;flex-basis:auto;text-align:center;font-weight:700;display:flex;align-items:center;justify-content:center;flex-direction:column;font-family:Courier New,Courier,monospace}.section.section--about-me p{text-align:justify}.section.section--about-me h1,.section.section--certifications h1,.section.section--education h1,.section.section--experience h1,.section.section--repos h1,.section.section--skills h1{margin:.75em 0;color:#0655bc;font-size:1rem;font-weight:700;padding-left:.75em;border-left:.25em solid #0655bc}@media only screen and (min-width:425px){.section.section--about-me h1,.section.section--certifications h1,.section.section--education h1,.section.section--experience h1,.section.section--repos h1,.section.section--skills h1{font-size:1.1rem}}@media only screen and (min-width:768px){.section.section--about-me h1,.section.section--certifications h1,.section.section--education h1,.section.section--experience h1,.section.section--repos h1,.section.section--skills h1{font-size:1.3rem}}.section.section--about-me p,.section.section--certifications p,.section.section--education p,.section.section--experience p,.section.section--repos p,.section.section--skills p{margin:.5em .5em 0}@media only screen and (min-width:768px){.section.section--about-me p,.section.section--certifications p,.section.section--education p,.section.section--experience p,.section.section--repos p,.section.section--skills p{margin:.5em .5em 0}}.section.section--about-me a,.section.section--certifications a,.section.section--education a,.section.section--experience a,.section.section--repos a,.section.section--skills a{color:#0655bc}.post-header .post-title{font-size:2rem}.post-content a:link,.post-content a:visited{text-align:left;font-size:1.1em;font-weight:700;font-family:Courier New,Courier,monospace}.post-content blockquote p{letter-spacing:1px;word-wrap:break-word}.post-content em{letter-spacing:1px}.post-content p{margin:.75em;color:#000;font-size:14px}@media only screen and (min-width:425px){.post-content p{font-size:1rem}}.post-content li{font-size:14px}.post-content li p{text-align:left}@media only screen and (min-width:425px){.post-content li p{font-size:1rem}}',""])},function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,"footer .container .contact-form{width:100%;max-width:480px;font-family:Arial,Helvetica,sans-serif;text-align:center;letter-spacing:1px}footer .container .contact-form label{margin:.5rem 1rem;border-radius:.25rem;display:flex;flex-direction:column;justify-content:center;font-size:1rem;text-align:left}footer .container .contact-form__control{min-height:1rem;padding:.5rem;border-radius:.125rem;border:1px solid #000;font-size:.875rem}footer .container .contact-form__control:focus{border:.1rem solid #e91e63;outline:0}footer .container .contact-form__control input[type=email]{text-transform:lowercase}footer .container .contact-form__control input[name=name],footer .container .contact-form__control input[name=subject]{text-transform:capitalize}footer .container .contact-form__button{height:2rem;border:0;border-radius:.125rem;font-size:.875rem;background:rgba(0,0,0,.6);color:#fff;text-transform:uppercase;letter-spacing:1px;font-weight:700}footer .container .contact-form__button:focus{border:.1rem solid #e91e63;outline:0}footer .container .contact-form__button:active{background:rgba(0,0,0,.6)}",""])},function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,":root{--base-color-plus-5:#3f51b5;--base-color-plus-10:#3949ab;--base-color-plus-15:#303f9f}.flex-vertically{flex-direction:column}.flex-horizontally,.flex-vertically{display:flex;align-items:center;justify-content:center}.flex-horizontally{flex-direction:row}.header{width:100%;margin:0;padding:0;border:none;background-color:#3f51b5;color:#fff;font-weight:700;line-height:3em;text-align:center;z-index:3}.header__link{padding:.5rem;font-size:1.25rem;will-change:transform;transition:transform .25s ease-in-out}.header__link:link,.header__link:visited{color:#fff}.header__link:active,.header__link:focus,.header__link:hover{color:#ffd54f;transform:scale(1.125)}@media only screen and (min-width:425px){.header__link{font-size:1.375rem}}@media only screen and (min-width:768px){.header__link{font-size:1.5rem}}.header__nav{display:flex;width:100%;min-height:56px;text-align:center;background-color:#3f51b5;color:#fff;position:sticky;-webkit-position:sticky;top:0;z-index:3}.header__nav .nav__link{flex:1;color:#fff;font-size:1rem;will-change:transform;transition:transform .25s ease-in-out;line-height:56px}.header__nav .nav__link:link,.header__nav .nav__link:visited{color:#fff}.header__nav .nav__link.active{background-color:rgba(0,0,0,.125)}.header__nav .nav__link:active,.header__nav .nav__link:focus,.header__nav .nav__link:hover{color:#ffd54f;transform:scale(1.1);text-decoration:underline}@media only screen and (min-width:425px){.header__nav .nav__link{font-size:1.125rem}}@media only screen and (min-width:768px){.header__nav .nav__link{font-size:1.25rem}}",""])},function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,'blockquote,body,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,ol,p,pre,ul{margin:0;padding:0}body{font:400 16px/1.5 Helvetica Neue,Helvetica,Arial,sans-serif;color:#111;background-color:#fdfdfd;-webkit-text-size-adjust:100%;-webkit-font-feature-settings:"kern" 1;-moz-font-feature-settings:"kern" 1;-o-font-feature-settings:"kern" 1;font-feature-settings:"kern" 1;font-kerning:normal}.highlight,blockquote,dl,figure,h1,h2,h3,h4,h5,h6,ol,p,pre,ul{margin-bottom:15px}img{max-width:100%;vertical-align:middle}figure>img{display:block}figcaption{font-size:14px}ol,ul{margin-left:30px}li>ol,li>ul{margin-bottom:0}h1,h2,h3,h4,h5,h6{font-weight:400}a{color:#2a7ae2;text-decoration:none}a:visited{color:#1756a9}a:hover{color:#111;text-decoration:underline}blockquote{color:#828282;border-left:4px solid #e8e8e8;padding-left:15px;font-size:18px;letter-spacing:-1px;font-style:italic}blockquote>:last-child{margin-bottom:0}code,pre{font-size:15px;border:1px solid #e8e8e8;border-radius:3px;background-color:#eef}code{padding:1px 5px}pre{padding:8px 12px;overflow-x:auto}pre>code{border:0;padding-right:0;padding-left:0}.wrapper{max-width:740px;margin-right:auto;margin-left:auto;padding-right:30px;padding-left:30px}@media screen and (max-width:800px){.wrapper{max-width:770px;padding-right:15px;padding-left:15px}}.footer-col-wrapper:after,.wrapper:after{content:"";display:table;clear:both}.icon>svg{display:inline-block;vertical-align:middle}.icon>svg path{fill:#828282}.site-header{border-top:5px solid #424242;border-bottom:1px solid #e8e8e8;min-height:56px;position:relative}.site-title{font-size:26px;font-weight:300;line-height:56px;letter-spacing:-1px;margin-bottom:0;float:left}.site-title,.site-title:visited{color:#424242}.site-nav{float:right;line-height:56px}.site-nav .menu-icon{display:none}.site-nav .page-link{color:#111;line-height:1.5}.site-nav .page-link:not(:last-child){margin-right:20px}@media screen and (max-width:600px){.site-nav{position:absolute;top:9px;right:15px;background-color:#fdfdfd;border:1px solid #e8e8e8;border-radius:5px;text-align:right}.site-nav .menu-icon{display:block;float:right;width:36px;height:26px;line-height:0;padding-top:10px;text-align:center}.site-nav .menu-icon>svg path{fill:#424242}.site-nav .trigger{clear:both;display:none}.site-nav:hover .trigger{display:block;padding-bottom:5px}.site-nav .page-link{display:block;padding:5px 10px;margin-left:20px}.site-nav .page-link:not(:last-child){margin-right:0}}.site-footer{border-top:1px solid #e8e8e8;padding:30px 0}.footer-heading{font-size:18px;margin-bottom:15px}.contact-list,.social-media-list{list-style:none;margin-left:0}.footer-col-wrapper{font-size:15px;color:#828282;margin-left:-15px}.footer-col{float:left;margin-bottom:15px;padding-left:15px}.footer-col-1{width:-webkit-calc(35% - 15px);width:calc(35% - 15px)}.footer-col-2{width:-webkit-calc(20% - 15px);width:calc(20% - 15px)}.footer-col-3{width:-webkit-calc(45% - 15px);width:calc(45% - 15px)}@media screen and (max-width:800px){.footer-col-1,.footer-col-2{width:-webkit-calc(50% - 15px);width:calc(50% - 15px)}.footer-col-3{width:-webkit-calc(100% - 15px);width:calc(100% - 15px)}}@media screen and (max-width:600px){.footer-col{float:none;width:-webkit-calc(100% - 15px);width:calc(100% - 15px)}}.page-content{padding:30px 0}.page-heading{font-size:20px}.post-list{margin-left:0;list-style:none}.post-list>li{margin-bottom:30px}.post-meta{font-size:14px;color:#828282}.post-link{display:block;font-size:24px}.post-header{margin-bottom:30px}.post-title{font-size:42px;letter-spacing:-1px;line-height:1}@media screen and (max-width:800px){.post-title{font-size:36px}}.post-content{margin-bottom:30px}.highlight{background:#fff}.highlighter-rouge .highlight{background:#eef}.highlight .c{color:#998;font-style:italic}.highlight .err{color:#a61717;background-color:#e3d2d2}.highlight .k,.highlight .o{font-weight:700}.highlight .cm{color:#998;font-style:italic}.highlight .cp{color:#999;font-weight:700}.highlight .c1{color:#998;font-style:italic}.highlight .cs{color:#999;font-weight:700;font-style:italic}.highlight .gd{color:#000;background-color:#fdd}.highlight .gd .x{color:#000;background-color:#faa}.highlight .ge{font-style:italic}.highlight .gr{color:#a00}.highlight .gh{color:#999}.highlight .gi{color:#000;background-color:#dfd}.highlight .gi .x{color:#000;background-color:#afa}.highlight .go{color:#888}.highlight .gp{color:#555}.highlight .gs{font-weight:700}.highlight .gu{color:#aaa}.highlight .gt{color:#a00}.highlight .kc,.highlight .kd,.highlight .kp,.highlight .kr,.highlight .kt{font-weight:700}.highlight .kt{color:#458}.highlight .m{color:#099}.highlight .s{color:#d14}.highlight .na{color:teal}.highlight .nb{color:#0086b3}.highlight .nc{color:#458;font-weight:700}.highlight .no{color:teal}.highlight .ni{color:purple}.highlight .ne,.highlight .nf{color:#900;font-weight:700}.highlight .nn{color:#555}.highlight .nt{color:navy}.highlight .nv{color:teal}.highlight .ow{font-weight:700}.highlight .w{color:#bbb}.highlight .mf,.highlight .mh,.highlight .mi,.highlight .mo{color:#099}.highlight .s2,.highlight .sb,.highlight .sc,.highlight .sd,.highlight .se,.highlight .sh,.highlight .si,.highlight .sx{color:#d14}.highlight .sr{color:#009926}.highlight .s1{color:#d14}.highlight .ss{color:#990073}.highlight .bp{color:#999}.highlight .vc,.highlight .vg,.highlight .vi{color:teal}.highlight .il{color:#099}',""])},function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,".repo__list-item{margin:1em 0}.repo__list-item .repo-title{text-transform:capitalize}.repo__list-item a{white-space:pre-wrap;word-wrap:break-word}",""])},function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,"*{box-sizing:border-box}body,html{width:100%;min-height:100vh;margin:0;padding:0;border:none;font-family:Arial,Helvetica,sans-serif;font-size:1rem;font-weight:500}.flex-vertically{flex-direction:column}.flex-horizontally,.flex-vertically{display:flex;align-items:center;justify-content:center}.flex-horizontally{flex-direction:row}.services{display:flex;flex-direction:column;align-items:center;justify-content:center}@media only screen and (min-width:992px){.services{flex-direction:row}}.services .service{flex:1;width:100%;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.services .service h2{height:220px;line-height:220px;margin:0;padding:0;text-align:center}.services #content-creation{background-color:#00a6fb}.services #content-creation .paper{width:135px;height:180px;border:1px solid #000;background-color:#fff;transform:rotate(-5deg)}.services #content-creation .paper__copy{margin:.5rem}.services #content-creation p{opacity:0;font-size:.55rem}.services #content-creation p:first-of-type{will-change:transform;transition:transform .2s ease-in-out;animation:fade-in-out 2s 1s infinite}.services #content-creation p:last-of-type{will-change:transform;transition:transform .2s ease-in-out;animation:fade-in 2s 2s infinite}.services #content-creation .pencil{will-change:transform;transition:transform .2s ease-in-out;animation:tilt 2s infinite}.services #content-creation .pencil__tip{border-right:20px solid #faebd7;border-top:10px solid transparent;border-bottom:10px solid transparent}.services #content-creation .pencil__tip-lead{border-right:8px solid #000;border-top:4px solid transparent;border-bottom:4px solid transparent}.services #content-creation .pencil__core{width:4rem;height:28px;border-left:1px solid #000;background-color:#ff0}.services #content-creation .pencil__top{width:20px;height:27px;border:1px solid #000;background-color:#ef476f}@keyframes fade-in{0%{opacity:0}50%{opacity:1}}@keyframes fade-in-out{0%{opacity:0}to{opacity:1}}.services #design{background-color:#d2ff96}.services #design ul{list-style-type:none;margin:0;padding:0}.services #design #square{width:9rem;height:9rem;background:hotpink;z-index:0;will-change:transform;transition:transform .2s ease-in-out;animation:spinner 4s infinite}.services #design #circle{width:8rem;height:8rem;border-radius:4.5rem;background:#ffd972;animation:paint 5s infinite;left:3.875rem;bottom:7rem;z-index:1}.services #design #circle,.services #design #triangle{will-change:transform;transition:transform .2s ease-in-out;position:relative}.services #design #triangle{width:0;height:0;border-bottom:7rem solid #8b80f9;border-left:4rem solid transparent;border-right:4rem solid transparent;animation:spinner 2s infinite;bottom:12rem;z-index:2}@keyframes tilt{0%{transform:rotate(0deg)}50%{transform:rotate(-45deg)}}@keyframes spinner{to{transform:rotate(0deg)}0%{transform:rotate(1turn)}}@keyframes paint{0%{background:#ffd972}50%{background:#00b2ca}}.services #tutoring-and-development{background-color:#fafad2}.services #tutoring-and-development pre{height:40vh}",""])},,,,,,,,function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var i=t.protocol+"//"+t.host,o=i+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(n))return e;var r;return r=0===n.indexOf("//")?n:0===n.indexOf("/")?i+n:o+n.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}}]);