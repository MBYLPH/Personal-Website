
var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Programmer", "Designer", "Gamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer", "Programmer", "Designer", "Gamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


  $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

function notify(){
alert(" You Will Be Directed Into Another Link ");
}

  $(document).ready(function(){
         $(".btn .fa-play-circle-o").on('click', function(){
           $(this).hide();
            $(".fa-pause-circle-o").fadeIn();
            $("#myMusic") [0].play();
       });
  

      $(".btn .fa-pause-circle-o").on('click', function(){
           $(this).hide();
            $(".fa-play-circle-o").fadeIn();
            $("#myMusic") [0].play();
       });
   });

 
 