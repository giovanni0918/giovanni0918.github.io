---
layout: page  
title: Contact  
permalink: /pages/contact/  
group: "navigation"  
excerpt: Contact page for https://giovanni-orlando.com • Built by Giovanni Orlando, Powered by Jekyll. Computer Engineer • Food Lover • Tech Enthusiast • @giovanni0918  
---
<style>
    .page-content, .post-content{margin: 0; padding: 0;}
    .wrapper{max-width: none; margin: 0; padding:0; }
</style>
<div class="container social" id="social">
<h2>Follow me on
    <nav class="nav">
    <ul class="social-link__list">
        {% for profile in site.profiles %}
        <li class="social-link__list-item">
        <a href="https://{{profile.account}}.com/{{profile.username}}/" title="Link to {{profile.account}}.com/{{profile.username}}/"
            target="_blank" rel="noopener">{{profile.account}}: {{profile.username}}</a>
        </li>
        {% endfor %}
    </ul>
    </nav>
</h2>
</div>