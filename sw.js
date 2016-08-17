importScripts('node_modules/sw-toolbox/sw-toolbox.js');
toolbox.options.debug = false;

toolbox.precache([
	'/',
	'/css/styles.css',
	'/js/app.js'
]);
toolbox.router.get('/', toolbox.fastest);
toolbox.router.get('/css/styles.css', toolbox.fastest);
toolbox.router.get('/js/app.js', toolbox.fastest);