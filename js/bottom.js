   $('.toBottom').click(function(){
      $('html,body').animate({scrollTop: $(document).height()}, 600);
      return false;
   });