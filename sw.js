importScripts('dist/libs.js');
toolbox.options.debug = false;

toolbox.precache([
    '/',
    '/dist/styles.css',
    '/js/app.js',
    '/pages/blog/',
    '/pages/contact/',
    '/pages/twitter/'
]);
toolbox.router.get('/', toolbox.fastest);
toolbox.router.get('/dist/styles.css', toolbox.fastest);
toolbox.router.get('/js/app.js', toolbox.fastest);
toolbox.router.get('/pages/blog/', toolbox.fastest);
toolbox.router.get('/pages/contact/', toolbox.fastest);
toolbox.router.get('/pages/twitter/', toolbox.fastest);
