$(function(){
    //header//
    $(function() {
        setTimeout(function(){
            $('#button-about').fadeIn(1000);
        },500);
        setTimeout(function(){
            $('#button-works').fadeIn(1000);
        },1500);
        setTimeout(function(){
            $('#button-contact').fadeIn(1000);
        },2500);
        setTimeout(function(){
            $('.header h1').fadeIn(1000);
        },3500);
    });  
    //fotterからtopへ戻る//
    $('#p').click(function(){
        $('html, body').animate({ 
          'scrollTop': 0 
        }, 1500);
      });

      });

