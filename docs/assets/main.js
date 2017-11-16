require.config({
    paths: {
        'keymaster': 'https://cdnjs.cloudflare.com/ajax/libs/keymaster/1.6.1/keymaster.min',  
        'domReady': 'https://cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady.min'
    },
    shim: {
        'keymaster': {
            exports: 'key'
        }
    }
});

    
function gotoLink(l) {
    location.href = l   
}


require(['domReady!'], function(doc) {
    var postList     = document.querySelectorAll('.post-list a');
    var prevPostHref = document.querySelector('.prev');
    var nextPostHref = document.querySelector('.next');
    
    if (prevPostHref && nextPostHref) {
        require(['keymaster'], function(key) {
        
            key('left, h', function() {
                gotoLink(prevPostHref.querySelector('a').href)
            });
        
            key('right, l', function() {
                gotoLink(nextPostHref.querySelector('a').href)
            })
        })
    }
    
})

