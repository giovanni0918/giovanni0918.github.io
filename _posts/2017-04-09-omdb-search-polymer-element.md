---
layout: post  
title:  "omdb-search Polymer Element: Find Movie, Series, and Episode data"  
date:   2017-04-09 16:08:00 -0400  
categories: pages blog
---

# What is omdb-search

omdb-search is a custom element, built by Giovanni Orlando using the [Polymer](https://www.polymer-project.org/) JavaScript library, that allows you to easily query for relevant movie, series, and episode data. This element is powered by the [Open Movie Database API](https://www.omdbapi.com/), and is published under the [MIT License](https://mit-license.org/).

## What is Polymer

Polymer is a JavaScript library that helps you create custom reusable HTML elements, and use them to build performant, maintainable apps. It's intention is to encourage developers to **Use The Platform**, instead of relying entirely on third party libraries and tooling.

## Tasks it accomplishes

When added to your project, it makes a request to the OMDb API and generates a collection of the Movie, Series, or Episode information found based on the parameters specified by the user.

The element takes as input two main parameters:

1. Title: Specifies the movie, series, or episode title to query for.

2. Result Type: Can be either movie, series, or episode.

It also supports three optional parameters:

- Year: Number representing the year in which the movie, series, or episode was released.

- Page: Specifies the results-list page number, since OMDb pages search results (10 results per page).

- API Version: Specifies the OMDb API version number, for future reference when said API updated. Is optional.

omdb-search is completely declarative, meaning that you can easily use this in your element, and have a full understanding of how it behaves.

## Getting Started

Make a project directory for your demo and change directories into it:

```bash
mkdir omdb-search-demo &amp;&amp; cd omdb-search-demo
```
Create an index.html

```bash
touch index.html
```

# Install or Download
Install the component using [bower](https://bower.io/).

```bash
bower install omdb-search --save
```

Or download the [.zip file](https://github.com/giovanni0918/omdb-search/archive/master.zip)

## Usage

In that index.html add the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>OMDb Search demo</title>
    <!-- Load the WebComponents polyfill: -->
    <script async src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.24/webcomponents-lite.js"></script>

    <!-- Import the omdb-search web component: -->
    <link rel="import" href="bower_components/omdb-search/omdb-search.html">

    <!-- Optionally, import the included omdb-search-theme stylesheet: -->
    <link rel="import" href="bower_components/omdb-search/omdb-search-theme.html">
</head>
<body>
    <!-- Use the element in your app:  -->
    <h1>Tarzan movies:</h1>
    <omdb-search q="Tarzan" type="movie" page="1"></omdb-search>
</body>
</html>
```

## Demo It

[https://giovanni-orlando.com/omdb-search/](https://giovanni-orlando.com/omdb-search/)

## Beneath the metal

This element depends on [iron-ajax](https://www.webcomponents.org/element/PolymerElements/iron-ajax) Polymer element, which exposes network request functionality to the user, and makes dealing with REST APIs a smooth experience. iron-ajax is licensed under [BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause).

## Available on [webcomponents.org](https://www.webcomponents.org/)

## Future goals

My intentions are to do a full re-write of the element once Polymer (2.x) is officially released. Polymer (2.x) brings features such as:

- [ES 2016 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) syntax for defining components

- Support for native [v1 Shadow DOM](https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom) and [v1 Custom Elements](https://developers.google.com/web/fundamentals/getting-started/primers/customelements) APIs

- Backwards compatibility with apps that rely on Polymer (1.x), meaning that developers can still use these new elements with little to no changes

I am currently developing a node web application that is built on top of this element, and plan on releasing soon to showcase what you can achieve by using it. Once it is released, I will link to it on this blog post so you can check it out.

## Repo

If you are interested in learning more about this element, make sure you checkout the [GitHub](https://github.com/giovanni0918/omdb-search) repository.

## Outro

If you enjoyed this blog post or found it helpful in any way, make sure to follow me on Twitter to find out when a new one is available.

Twitter: [@giovanni0918](https://twitter.com/giovanni0918 "@giovanni0918 on Twitter")

Github: [giovanni0918](https://github.com/giovanni0918 "@giovanni0918 on GitHub")

Website: [giovanni-orlando.com](https://giovanni-orlando.com/ "Giovanni Orlando on the Web")
