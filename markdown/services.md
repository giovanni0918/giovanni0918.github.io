---
layout: page  
title: Services  
permalink: /pages/services/  
group: "navigation"  
excerpt: Services page for https://giovanni-orlando.com • Built by Giovanni Orlando, Powered by Jekyll. Computer Engineer • Food Lover • Tech Enthusiast • @giovanni0918  
---

<style>
.page-content { padding: 0; }
.wrapper { width: 100%; max-width: none; margin: 0; padding: 0; }
.post-content { margin: 0; }
</style>

<div class="services" markdown="1">

<section class="service" id="content-creation" markdown="1">

## Content Creation

<div class="flex-horizontally">

<div class="paper">
    <div class="paper__copy">
        <p>Lorem ipsum dolor sit amet, consectetur quo adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
    </div>
</div>

<div class="pencil flex-horizontally">
    <div class="pencil__tip">
        <div class="pencil__tip-lead"></div>
    </div>
    <div class="pencil__core"></div>
    <div class="pencil__top"></div>
</div>

</div>

</section>

<section class="service" id="design" markdown="1">

## Design 

* {: #square }
* {: #circle }
* {: #triangle }

</section>


<section class="service" id="tutoring-and-development" markdown="1">

## Tutoring and Development

```javascript
(function (window, document) {
'use strict';
class Salad {
    constructor(fruits, veggies,
                dairy, meat) {

        this._fruits = fruits;
        this._veggies = veggies;
        this._dairy = dairy;
        this._meat = meat;
    }

    set fruits (fruits) {
        _fruits = fruits;
    }
    get fruits () {
        return this._fruits;
    }

    set veggies (veggies) {
        _veggies = veggies;
    }
    get veggies () {
        return this._veggies;
    }

    set dairy (dairy) {
        _dairy = dairy;
    }
    get dairy () {
        return this._dairy;
    }

    set meat (meat) {
        _meat = meat;
    }
    get meat () {
        return this._meat;
    }

    get ingredients () {
        return {
            'fruits': this.fruits,
            'veggies': this.veggies,
            'dairy': this.dairy,
            'meat': this.meat
        }
    }
}

let fruits = ['apple', 'berry',
        'cherry'];

let veggies = ['lettuce',
        'spinach'];

let dairy = ['cheese'];
let meat = 'chicken';

let salad = new Salad(fruits,
veggies, dairy, meat);

console.log(salad.ingredients);

} (window, document));
```

</section>

</div>