importScripts('/dist/workbox-sw.js');
workbox.setConfig({
    debug: true,
});
// Revisioned files added via a glob
workbox.precaching.precache([
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

workbox.routing.registerRoute(new RegExp('/'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('index.html'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('/pages/blog/'), new workbox.strategies.StaleWhileRevalidate());
workbox.routing.registerRoute(new RegExp('/pages/contact/'), new workbox.strategies.StaleWhileRevalidate());
workbox.routing.registerRoute(new RegExp('/pages/services/'), new workbox.strategies.StaleWhileRevalidate());
workbox.routing.registerRoute(new RegExp('/pages/twitter/'), new workbox.strategies.StaleWhileRevalidate());
workbox.routing.registerRoute(new RegExp('/'), new workbox.strategies.StaleWhileRevalidate());

// Scripts and Styles
workbox.routing.registerRoute(
    new RegExp('/dist/app.bundle.js'),
    new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
    new RegExp('/dist/style.bundle.css'),
    new workbox.strategies.StaleWhileRevalidate()
);

// Images
workbox.routing.registerRoute(
    new RegExp('/dist/images/avatar__img.jpg'),
    new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
    new RegExp('/dist/images/food-lover.svg'),
    new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
    new RegExp('/dist/images/tech-enthusiast.svg'),
    new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
    new RegExp('/dist/images/web-developer.svg'),
    new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(new RegExp('manifest.json'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('/dist/images/icons/.*.png'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('/dist/workbox-sw.js'), new workbox.strategies.StaleWhileRevalidate());