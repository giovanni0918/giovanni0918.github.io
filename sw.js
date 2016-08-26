importScripts('/dist/sw-toolbox.js');
toolbox.options.debug = false;

toolbox.precache([
    '/',
    '/dist/styles.css',
    '/dist/images/avatar--contact.jpeg',
    '/dist/images/gmail__icon.svg',
    '/dist/images/phone__icon.svg',
    '/dist/images/Octocat.png',
    '/dist/images/instagram__icon.png',
    '/dist/images/facebook__icon.svg',
    '/dist/images/twitter__icon.svg',
    '/dist/images/googleplus__icon.svg',
    '/js/app.js',
    '/pages/blog/',
    '/pages/contact/',
    '/pages/twitter/'
]);
toolbox.router.get('/', toolbox.fastest);
toolbox.router.get('/dist/styles.css', toolbox.fastest);
toolbox.router.get('/dist/images/avatar--contact.jpeg', toolbox.fastest);
toolbox.router.get('/dist/images/gmail__icon.svg', toolbox.fastest);
toolbox.router.get('/dist/images/phone__icon.svg', toolbox.fastest);
toolbox.router.get('/dist/images/Octocat.png', toolbox.fastest);
toolbox.router.get('/dist/images/instagram__icon.png', toolbox.fastest);
toolbox.router.get('/dist/images/facebook__icon.svg', toolbox.fastest);
toolbox.router.get('/dist/images/twitter__icon.svg', toolbox.fastest);
toolbox.router.get('/dist/images/googleplus__icon.svg', toolbox.fastest);
toolbox.router.get('/js/app.js', toolbox.fastest);
toolbox.router.get('/pages/blog/', toolbox.fastest);
toolbox.router.get('/pages/contact/', toolbox.fastest);
toolbox.router.get('/pages/twitter/', toolbox.fastest);
