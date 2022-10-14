var cacheName = 'piac-pwa';
var filesToCache = [
'/',
'/index.html',
'/style.css',
'/js/main.js'
];
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open(cacheName).then(function(cache) {
return cache.addAll(filesToCache);
})
);
});
self.addEventListener('fetch', function(e) {
e.respond
With(
caches.match(e.request).then(function(response) {
return response || fetch(e.request);
})
);
});