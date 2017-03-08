(function (window, document, undefined) {
    'use strict';

    fetch('https://api.github.com/users/giovanni0918/repos', { method: 'GET' })
        .then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
            response.json()
                .then(data => {
                    let repos = data.map((repo) => {
                        return { id: repo.id, name: repo.name, description: repo.description, homepage: repo.homepage, html_url: repo.html_url }
                    }).sort((a, b) => b.id - a.id);

                    let container = document.querySelector(".repo__list");

                    container.innerHTML = repos.map((repo) => {

                        if (repo.homepage) {
                            return `<li class="repo__list-item" title="${repo.name.replace(/[-_]+/g, ' ')}">
                                <a href="${repo.html_url}" class="list-item__heading repo-title" target="_blank" rel="noopener">${repo.name.replace(/[-_]+/g, ' ')}</a>
                                <p class="list-item__text">${repo.description}</p>
                                <p class="list-item__text">Link: <a href="${repo.homepage}">${repo.homepage}</a></p>
                            </li>`;
                        } else {
                            return `<li class="repo__list-item" title="${repo.name.replace(/[-_]+/g, ' ')}">
                                <a href="${repo.html_url}" class="list-item__heading repo-title" target="_blank" rel="noopener">${repo.name.replace(/[-_]+/g, ' ')}</a>
                                <p class="list-item__text">${repo.description}</p>			            
                            </li>`;
                        }

                    }).join('');


                });

        }).catch((error) => console.warn(error));

})(window, document);