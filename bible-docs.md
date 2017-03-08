---
layout: page
title: bible
permalink: /pages/bible-docs/
---
<style>.header .nav {display:none;} .bible-wrapper{padding: 1em 0;}</style>
<div id="bible-docs" style="margin: 1em; text-align: justify;">
    <form id="bible-form" class="contact-form" style="max-width: none;">
        <label style="margin: 0;">Search the bible:<input type="search" name="q" id="q" placeholder="search"></label>
    </form>
    <div class="bible-wrapper">
        <p id="book"></p>
        <p id="dir"></p>
        <p id="type"></p>
        <p id="version"></p>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>
(function( $ ) {
    'use strict';
    $('#bible-form').submit((event) => {
        event.preventDefault();
        let q = $("#q").val();
        $.ajax({
            url: `https://getbible.net/json?passage=${q}&version=valera`,
            contentType: "application/json",
            dataType: "jsonp",        
        }).then(function(response){
            let {book, book_name, book_nr, chapter, chapter_nr, direction, type, version} = response;
            
            if(book) {
                bookHandler(book, direction, type, version);
            } else {
                verseHandler(book_name, book_nr, chapter, chapter_nr, direction, type, version)
            }        
            
        });

    });
    function bookHandler(book, direction, type, version) {
        $('.bible-wrapper').html(`
            <div id="book">
                <p>Book: ${ book[0].book_name + book[0].chapter_nr + ':' +Object.keys(book[0].chapter) }</p>
                <p>Book Ref: ${book[0].book_ref}</p>
                <p>${ Object.keys(book[0].chapter)
                        .map(key => book[0].chapter[key].verse_nr + '. ' + book[0].chapter[key].verse + ' ')
                        .join('') }<br></p>
            </div>
            <p id="dir">direction: ${direction}</p>
            <p id="type">type: ${type}</p>
            <p id="version">version: ${version}</p>
            
        `);
    }
    function verseHandler(book_name, book_nr, chapter, chapter_nr, direction, type, version) {
        $('.bible-wrapper').html(`
            <div id="book">
                <p>Book: ${book_name + ' ' + chapter_nr}</p>
                <p>${ 
                    Object.keys(chapter)
                    .map(key => chapter[key].verse_nr + '. ' + chapter[key].verse + ' ').join('') }<br></p>                 
            </div>
            <p id="dir">direction: ${direction}</p>
            <p id="type">type: ${type}</p>
            <p id="version">version: ${version}</p>                
        `);
    }    
 
})( jQuery );
    
</script>