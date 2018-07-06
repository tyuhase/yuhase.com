// yuhase.com js 

$(document).ready(function() {
    $(window).scroll( function(){
        $('.scroll-in').each( function(i){
          
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                
                $(this).addClass("fade-in");
              $(this).removeClass("scroll-in");
                    
            }
            
        }); 
    
    });
    var classCycle=['bg1','bg2','bg3'];

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];

    $('header').addClass(classToAdd);
    
});