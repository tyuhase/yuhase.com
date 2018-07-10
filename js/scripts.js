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

    $('.hero').addClass(classToAdd);
    
});
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

  // menu stuff

  $(document).ready(function() {
    $('#menu-toggle, #menu > ul > li > a').click(function(e) { 
        var $toggle = $(this); 
        var $menu = $('#' + $(this).attr('aria-controls')); 
    
        if ($menu.attr('aria-hidden') == 'true') {
            $('body').addClass('open');
            $menu.attr('aria-hidden', 'false');
            $toggle.attr('aria-expanded', 'true');
        }
        else if ($menu.attr('aria-hidden') == 'false') {
            $('body').removeClass('open');
            $menu.attr('aria-hidden', 'true');
            $toggle.attr('aria-expanded', 'faremove'); 
        }
    });
    // Set button to click.
var button = document.getElementById( 'menu-toggle' );

// Click the button.
button.onclick = function() {
	
  // Toggle class "opened". Set also aria-expanded to true or false.
  if ( -1 !== button.className.indexOf( 'opened' ) ) {
    button.className = button.className.replace( ' opened', '' );
    button.setAttribute( 'aria-expanded', 'false' );
  } else {
     button.className += ' opened';
    button.setAttribute( 'aria-expanded', 'true' );
   }
    
 };
});

