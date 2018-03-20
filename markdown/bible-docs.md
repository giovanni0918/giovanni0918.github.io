---
layout: page  
title: bible  
permalink: /pages/bible-docs/  
excerpt: Bible Docs page for https://giovanni-orlando.com • Built by Giovanni Orlando, Powered by Jekyll. Computer Engineer • Food Lover • Tech Enthusiast • @giovanni0918  
---

<div id="bible-docs">
    <form id="bible-form">
        <label>Search the bible: <input type="search" name="q" id="q" placeholder="Search"></label>
        <button type="submit">Search</button>
    </form>
    <div class="bible-wrapper">
        <p id="book">Book:</p>
        <p id="dir">Dir:</p>
        <p id="type">Type:</p>
        <p id="version">Version:</p>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script>
    (function ($) {
        document.getElementById('bible-form').addEventListener('submit', (event) => {
            event.preventDefault();
            let q = document.getElementById('q').value;
            $.ajax({
                url: `https://getbible.net/json?passage=${q}&version=valera`,
                contentType: "application/json",
                dataType: "jsonp"
            }).then((response) => {
                let { book, book_name, book_nr, chapter, chapter_nr, direction, type, version } = response;
                if (book) {
                    bookHandler(book, direction, type, version);
                } else {
                    verseHandler(book_name, book_nr, chapter, chapter_nr, direction, type, version);
                }
            });
        });
        function bookHandler(book, direction, type, version) {
            $('.bible-wrapper').html(`
            <div id="book">
                <p>Book: ${ book[0].book_name + book[0].chapter_nr + ':' + Object.keys(book[0].chapter)}</p>
                <p>Book Ref: ${book[0].book_ref}</p>
                <p>${ Object.keys(book[0].chapter)
                    .map(key => book[0].chapter[key].verse_nr + '. ' + book[0].chapter[key].verse + ' ')
                    .join('')}<br></p>
            </div>
            <p id="dir">Dir: ${direction}</p>
            <p id="type">Type: ${type}</p>
            <p id="version">Version: ${version}</p>
        `);
        }
        function verseHandler(book_name, book_nr, chapter, chapter_nr, direction, type, version) {
            $('.bible-wrapper').html(`
            <div id="book">
                <p>Book: ${book_name + ' ' + chapter_nr}</p>
                <p>${
                Object.keys(chapter)
                    .map(key => chapter[key].verse_nr + '. ' + chapter[key].verse + ' ').join('')}<br></p>                 
            </div>
            <p id="dir">Dir: ${direction}</p>
            <p id="type">Type: ${type}</p>
            <p id="version">Version: ${version}</p>                
        `);
        }
    })(jQuery);

</script>