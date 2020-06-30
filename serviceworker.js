//set up cache name and files to add to it
const CACHE_NAME = 'aaron-v1';
const CACHE_URLS =  ['index.html',                      
                     'qualifications.html',
                     'skills.html',
                     'demo1.html',
                     'demo2.html',
                     'coffeeStore.html',

                     'style/demo1.css',
                     'style/demo2.css',
                     'style/styleMain.css',
                     'style/normalize.css',
                     'style/styleCoffee.css',

                     'images/Aaron.jpg',
                     'images/americano.jpg',
                     'images/coffee.png',
                     'images/Coffee.jpg',
                     'images/coffeeCup.png',
                     'images/css1.png',
                     'images/css2.png',
                     'images/css3.png',
                     'images/cuppuccino.jpg',
                     'images/ecma1.png',
                     'images/ecma2.png',
                     'images/ecma3.png',
                     'images/email-gray.svg',
                     'images/espresso.jpg',
                     'images/flatwhite.jpg',
                     'images/ICanHelp.svg',
                     'images/latte.jpg',
                     'images/phone-gray.svg',
                     'images/protection.svg',
                     'images/Qualifications.jpg',
                     'images/Security.png',
                     'images/Skills.jpg',
                     'images/WhatICanDo.svg',
                     'images/WhoAmI.svg', 
                                    
                     'scripts/coffeestore.js',
                     'serviceworker.js'];

//set up cache and files to add to it
//...

//add all URLs to cache when installed
self.addEventListener("install", function(event){
    console.log("Service worker installed");
    event.waitUntil(
        //create and open cache
        caches.open(CACHE_NAME)
            .then(function(cache){
                console.log("Cache opened");
                //add all URLs to cache
                return cache.addAll(CACHE_URLS);
        })
    );
});

//On activate update the cache with the new version and clean out old caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName.startsWith('aaron-') && CACHE_NAME !== cacheName) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

  //add all URLs to cache when installed
//...
//user has navigated to page - fetch required assets
self.addEventListener("fetch", function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            //check whether asset is in cache
            if(response){
                //asset in cache, so return it
                console.log(`Return ${event.request.url} from cache`);
                return response;
            }
            //asset not in cache so fetch asset from network
            console.log(`Fetch ${event.request.url} from network`);
            return fetch(event.request);
        })
    );
});

  
