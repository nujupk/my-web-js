self.addEventListener('install',function(event){
console.log('SW Installed');
event.waitUntil(
    caches.open('static')
    .then(function(cache){
    
cache.add('/');
        cache.add('https://pscmod.blogspot.com');
       
       
    })
);

});

self.addEventListener('activate',function(){
    console.log('SW Activated');
    });
