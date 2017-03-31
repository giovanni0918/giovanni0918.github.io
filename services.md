---
layout: page  
title: Services  
permalink: /pages/services/  
group: "navigation"  
---
<style>
    html,
    body {
        background-color: rgba(0, 0, 0, .6);
    }
    
    .wrapper {
        width: auto;
        max-width: none;
        margin: auto;
        padding: inherit;
    }
    
    div.container:nth-of-type(even),
    div.container:nth-of-type(odd) {
        background-color: inherit;
    }
    
    div.container {
        min-height: initial;
    }
    
    .page-content {
        padding: 0;
    }
    
    footer div.container {
        min-height: 100vh;
    }
    
    .services .flex-vertically {
        justify-content: flex-start;
    }
    
    .service h1 {
        width: 100%;
        height: 240px;
        margin: 0;
        padding: 0;
        line-height: 240px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.75rem;
        font-weight: 700;
        text-align: center;  
    }
    @media only screen and (min-width: 768px) {
        .service h1 {
            font-size: 2rem;
        }
    }
</style>
<script async src="{{ site.url }}/dist/scripts/prism.js"></script>
<div class="container services">

    <section class="service flex-vertically">
        <h1>content creation</h1>
        <div class="flex-horizontally">
            <div class="paper">
                <div class="paper__copy">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                        <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit eau de voluptatem accusantium doloremque no du laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                        sunt explicabo. Foo em.</p>
                </div>
            </div>
            <div class="pencil flex-horizontally">
                <div class="pencil__tip">
                    <div class="pencil__tip__lead"></div>
                </div>
                <div class="pencil__core"></div>
                <div class="pencil__top"></div>
            </div>
        </div>
    </section>

    <section class="service flex-vertically">
        <h1>web design</h1>
        <div class="container flex-vertically">
            <div class="square"></div>
            <div class="circle"></div>
            <div class="triangle"></div>
        </div>
    </section>

    <section class="service flex-vertically">
        <h1>tutoring & development</h1>

        <div class="container flex-vertically">
            <div class="blackboard">
                <pre>
                <code class="highlight language-javascript">
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
        fruits: this.fruits,
        veggies: this.veggies,
        dairy: this.dairy,
        meat: this.meat
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
                </code>
                </pre>
            </div>
        </div>
    </section>
</div>