$(document).ready(function(){

  /*------------------работа заглушки--------------*/
    $('.product-img').click(function(){
      
      $('.zagl').slideToggle(300);
    });


  
  /* -------------- прокрутка ссылок-------------*/
  $(function(){
      $("a[href^='#']").click(function(){
              var _href = $(this).attr("href");
              $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
              return false;
      });
  });

  $('.owl-carousel').owlCarousel({ // слайдер
      items: 1,
      margin:30,
      dots:true,
      nav:false,
      loop:true,
      dotsEach: 1,
      autoplay: true,
      smartSpeed:500,
      autoplayTimeout:3000,
       
  });

  var touch = $('.touch-menu');         // выпадающее меню
  var nav = $('.nav-popup');

  $(touch).on('click',function(event){
    event.preventDefault();
    var title = $(this).attr('title') 
    if (nav.css('display')=='none') {
      $(this).attr('title','Скрыть меню');
      $(this).attr('aria-label','Скрыть меню');
      $('.touch-menu').empty();
      $('.touch-menu').append('<div class="cross"><i class="fa fa-times " aria-hidden="true"></i></div>');
      $(nav).fadeIn(400)
    }
   
   else {
     $(this).attr('title','Открыть меню');
    $(this).attr('aria-label','Открыть меню');
    $('.touch-menu').empty();
    $('.touch-menu').append('<i class="fa fa-bars" aria-hidden="true"></i>');
    $(nav).fadeOut(400)
   }	
    
})


$('.hidden-a, .icon-box, .nav-popup').click(function(){
    $('.nav-popup').hide(300);
    $('.touch-menu').empty();
    $('.touch-menu').append('<i class="fa fa-bars" aria-hidden="true"></i>');
});

/*  показ документов */

  $('.block-document img').click(function() {
      // Получаем адрес картинки
      var imgAddr = $(this).attr("src");
      // Задаем свойство SRC картинке, которая в скрытом диве.
      $('#img-document img').attr({src: imgAddr});
      // Показываем скрытый контейнер
      $('#img-document').fadeIn('slow');
      });
      // Обрабатывает клик по большой картинке
      $('#img-document').click(function() {
      $(this).fadeOut();
  });


  $('#usernumber').inputmask({"mask": "+7(999) 999-99-99"}); //маска телефона


  $('.order_call').click(function() {    // откр-закр попапа с обратным звонком
      $('.fon-popup').show(500, "swing");
  }); 
      $('.cross, .nav-show-a, .icon-box').click(function(){                   
      $('.fon-popup').hide(500, "swing");
  });


  $('.feedback-bell').each(function(){
      $(this).validate({                                   // валидация и отправка формы звонка
        errorPlacement: function(error, element) {
          return true;
        },
        rules: {
            username:{
              required: true,
              minlength: 2,
            },
            usernumber:{
              required: true,
              },
            check:{
              required: true,
            },
          }, //rules
       
        submitHandler(form) {
          let th = $(form);
  
          $.ajax({
            type: 'POST',
            url: 'send.php',
            data: th.serialize(),
            
          }).done(() => {
            
            th.trigger('reset');
            $(".fon-popup").hide();
            $("body").removeClass("fixed");
            alert("Ваше сообщение успешно отправлено. Спасибо! Мы свяжемся с вами в бижайшее время. ")
          });
  
          return false;
        }
      })
    })


    $('.big-zakaz').each(function(){
      $(this).validate({                                   // валидация и отправка формы ЗАЯВКИ
        errorPlacement: function(error, element) {
          return true;
        },
        rules: {
            u_name:{
              required: true,
              minlength: 2,
            },
            usermail:{
              required: true,
              email: true
              },
            check_zakaz:{
              required: true,
            },
          }, //rules
       
        submitHandler(form) {
          let th = $(form);
  
          $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: th.serialize(),
            
          }).done(() => {
            
            th.trigger('reset');
            alert("Ваше сообщение успешно отправлено. Спасибо! Мы ответим на ваш запрос в кратчайшее время")
          });
  
          return false;
        }
      })
    })











});