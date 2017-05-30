self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('offlinestore').then(function(cache) {
         return cache.addAll([
            '/',
           '/index.html',
           '/page1.html',
           '/node_modules/bootstrap/dist/css/bootstrap.css',
           '/node_modules/bootstrap/dist/js/bootstrap.min.js',
           '/node_modules/jquery/dist/jquery.min.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});