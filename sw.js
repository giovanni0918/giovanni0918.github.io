importScripts('/dist/sw-toolbox.js');
toolbox.options.debug = false;

toolbox.precache([
    '/',
    '/pages/blog/',
    '/pages/contact/',
    '/pages/services/',
    '/pages/twitter/',
    '/dist/app.bundle.js',
    '/dist/style.bundle.js',
    '/dist/images/avatar__img.jpg',
    '/dist/images/food-lover.svg',
    '/dist/images/tech-enthusiast.svg',
    '/dist/images/web-developer.svg'
]);

// Pages
toolbox.router.get('/', toolbox.fastest);
toolbox.router.get('/pages/blog/', toolbox.fastest);
toolbox.router.get('/pages/contact/', toolbox.fastest);
toolbox.router.get('/pages/services/', toolbox.fastest);
toolbox.router.get('/pages/twitter/', toolbox.fastest);

// Scripts and Styles
toolbox.router.get('/dist/app.bundle.js', toolbox.fastest);
toolbox.router.get('/dist/style.bundle.css', toolbox.fastest);

// Images
toolbox.router.get('/dist/images/avatar__img.jpg', toolbox.fastest);
toolbox.router.get('/dist/images/food-lover.svg', toolbox.fastest);
toolbox.router.get('/dist/images/tech-enthusiast.svg', toolbox.fastest);
toolbox.router.get('/dist/images/web-developer.svg', toolbox.fastest);