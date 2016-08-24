importScripts('dist/libs.js');
toolbox.options.debug = false;

toolbox.precache([
    '/',
    '/css/styles.min.css',
    '/js/app.js',
    '/pages/blog/',
    '/pages/contact/',
    '/pages/twitter/'
]);
toolbox.router.get('/', toolbox.fastest);
toolbox.router.get('/css/styles.min.css', toolbox.fastest);
toolbox.router.get('/js/app.js', toolbox.fastest);
toolbox.router.get('/pages/blog/', toolbox.fastest);
toolbox.router.get('/pages/contact/', toolbox.fastest);
toolbox.router.get('/pages/twitter/', toolbox.fastest);
