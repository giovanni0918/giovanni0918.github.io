---
layout: post  
title: "New Web Features in Safari 10.1 and iOS 10.3"  
date:   2017-04-02 11:30:00 -0400  
categories: pages blog  
---

Welcome Aboard. A new update to WebKit, the Open Source Browser Engine powering Safari, came out on 03/29/2017 for Mac OS 10.12.4 and [iOS 10.3](http://wp.me/p7JhKF-mi). And with it, a lot of powerful web features were enabled to developers for use in their applications. Here are my Top 10 favorites!

# ECMAScript 2016 / 2017

[ECMAScript 2016](https://www.ecma-international.org/ecma-262/7.0/) brings two new features to the table:

- [Array.prototype.includes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/includes):
Allows you to check whether an element is present within the array.
```javascript
['apple', 'berry', 'cherry'].includes('berry'); // true
['apple', 'berry', 'cherry'].includes('grape'); // false
['apple', 'berry', 'cherry'].includes('apple', 0); // true
['apple', 'berry', 'cherry'].includes('apple', 1); // false
```
Parameters: searchElement, fromIndex

- [Exponentiation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation_(**)):
The operation of raising one quantity to the power of another.
```javascript
2 ** 3; // 8
5 ** 2; // 25
```

Any number, including NaN, powered to 0 exponent evaluates to 1:
```javascript
10 ** 0; // 1
NaN ** 0; // 1
Infinity ** 0 // 1
```

Any base, including NaN, powered to an exponent of value NaN evaluates to NaN:
```javascript
10 ** NaN; // NaN
NaN ** NaN; // NaN
Infinity ** NaN // NaN
```

If you have used Python or Ruby lang before, you'll likely be familiar to the syntax.

[ECMAScript 2017](https://tc39.github.io/ecma262/) brings features such as:

- async
- await

Sample usage:

```javascript
(async (url = 'https://api.github.com/users/giovanni0918/repos') => {
try {
const response = await fetch(url);
const data = await response.json();
console.log('repos', data.map((repo) => repo.name));
}
catch (error) {
console.warn('error', error);
}
})();
```

# [Fetch](https://fetch.spec.whatwg.org/)

A promised based API that allows you to make network requests similar to [XMLHttpRequest (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

Goals: To unify fetching across the web platform.

Unifying fetching provides consistent handling of:

- URL schemes
- Redirects
- Cross-Origin Resource Sharing semantics [CORS](https://www.w3.org/TR/cors/)
- Content Securty Policy [CSP](https://w3c.github.io/webappsec-csp/)
- Service workers [SW](https://www.w3.org/TR/service-workers-1/)
- Mixed Content [MIX](https://w3c.github.io/webappsec-mixed-content/)
- Referer Policy [REFERRER](https://www.w3.org/TR/referrer-policy/)

Sample Usage: Querying an API endpoint and logging the JSON response to the console.

```javascript
fetch('https://api.github.com/users/giovanni0918/repos')
.then((response) => response.json().then((data) => {
console.log('repos', data.map((repo) => repo.name));
}))
.catch((error) => console.warn(error));
```

# CSS Grid

If you are familiar to Flexbox, you are in for a treat. CSS Grid allows you to design complex layouts using declarative properties. This new layout system is based on grid of rows and columns within a container, which enables media to respond better to viewport changes.

For reference: [CSS Grid Layout:
A New Layout Module for the Web](https://webkit.org/blog/7434/css-grid-layout-a-new-layout-module-for-the-web/) by Manuel Rego

# Custom Elements

A part of the web components spec, that allows the user the capability for creating custom HTML elements, with their own unique scripted behavior and CSS styling.

Check out the component catalog at: [webcomponents.org/](https://www.webcomponents.org/)

# Interactive Form Validation

If you've build forms on Safari, you'll likely have noticed that attributes like "required" do not work correctly on it, and are completely ignored at the moment of validation.

Well as of Safari Technology Preview 19, WebKit officially supports HTML Interactive Form Validation. This allows the engine to check the validity of the form controls within a form, and notify when any of these violates one or more of the established constraints. WebKit will focus said element, scroll it into view, and display a bubble near it with a message explaining what the problem is.

For more details, check out: [HTML Interactive Form Validation](https://webkit.org/blog/7099/html-interactive-form-validation/) by Chris Dumez


# Input Events

According to the [Input Events Level 2 W3C spec](https://www.w3.org/TR/input-events-2/): Input events are sent before (beforeinput event) and after (input event) a user attempts to edit the markup. This includes characters, deletions, and other related edits.

Problems that it solves:

1. Browsers do not handle all editing operations the same way.
2. Browsers are often buggy in the way they handle certain editing operations.
3. Individual sites may have custom preferences for how they want to handle certain editing operations.
4. The development of high-level text editing features in browsers has not followed the principles laid out in the Extensible Web Manifesto in that development of these features has not always been in coordination with the needs of the web developer community.

This spec seeks to alleviate the problem by providing a simple way for web developers to both override browser handling of all user input related to text editing through the beforeinput event, and to monitor what browsers have changed in the DOM due to user input trough the input event.

Typical use cases:

1. Creating a JavaScript text editor in which the **strong**-tag is used instead of the **b**-tag to mark text that the user marks as bold, using any browser-builtin way to mark a text as bold, without having access to all existing browsers.
2. Working with a data model in the background where JavaScript takes care of rendering changes to the edited text to the DOM.
3. Allowing only a subset of richtext editing (for example: bold is allowed, but italic not).
4. Creating a collaborative editor in which JavaScript is used to render changes to the DOM, based on user intentions with users using different browsers with different ways of expressing specific intentions.
5. Creating a JavaScript editor with different user access options, where some users only can add or delete text and other users only can add or remove certain types of formatting.

# Indexed DB 2.0

A W3C recommended web browser standard interface for a transactional local database of JSON objects collections with indices.

IndexedDB 2.0 adds support for:

- Binary data types as index keys (meaning it is no longer required to serialize them into strings or array objects) 
- Object store and index renaming, getKey() on IDBObjectStore, and getPrimaryKey() on IDBIndex.

# Improved Sticky Element Positioning

[Sticky positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Sticky_positioning) is a hybrid of relative and fixed positioning. The browser treats the element as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioned.

Is commonly used for:

- headers
- navbars
- headings in an alphabetized listing

# HTML 5 Download Attribute

The download attribute for anchor elements is now available in Safari 10.1 on macOS. It indicates the link target is a download link that should download a file instead of navigating to the linked resource. The optional value of the download attribute can be used to provide a suggested name for the file.

Sample usage:

<a href="https://facebook.com/favicon.ico" download="facebook-favicon.ico">Download Facebook Favicon</a>


```html
<a href="https://facebook.com/favicon.ico" download="facebook-favicon.ico">Download Facebook Favicon</a>
```

# HTML Media Capture

The [HTML Media Capture spec](https://www.w3.org/TR/html-media-capture/) defines an HTML form extension that enables user access to a device's media capture mechanisms, such as a camera, or microphone, from within a file upload control.

The **capture** attribute is a boolean attribute that, if specified, indicates that the capture of media directly from the device's environment using a media capture mechanism is preferred. The user agent then invokes a file picker for the specific capture control type.

Has support for:

- image
- video
- audio

```html
<input name="imageCapture" type="file" accept="image/*" capture>
<input name="videoCapture" type="file" accept="video/*" capture>
<input name="audioCapture" type="file" accept="audio/*" capture>
```

For the complete feature list, checkout [@jonathandavis](https://twitter.com/jonathandavis)'s blog post on the WebKit site linked [here](https://webkit.org/blog/7477/new-web-features-in-safari-10-1/).

If you enjoyed this blog post or found it helpful in any way, make sure to follow me on Twitter to find out when a new one is available.

Twitter: [@giovanni0918](https://twitter.com/giovanni0918)

Github: [giovanni0918](https://github.com/giovanni0918)

Website: [giovanni-orlando.com](https://giovanni-orlando.com)