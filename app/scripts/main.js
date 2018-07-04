$(document).ready(function(){
  $('.header-slider').owlCarousel({
  	items:1,
  	dots:true,
  	autoplay: true,
  	autoplaySpeed:500
  });
$('.about-slider').owlCarousel({
    items:1,
    // autoplay: true,
    autoplaySpeed:500,
    dots:false,
    nav:true,
    responsive:{
        992:{
            items:4
        },
        770:{
            items:3
        },
        440:{
            items:2
        }
    }
});
  // map icon

  $('.info-map__map__ic li').mouseenter(function(){
  	var thisHover = $(this).attr('id');
  	$('.'+thisHover).addClass('hover');
  	$(this).mouseleave(function(){
  	$('.'+thisHover).removeClass('hover');
  	})
  })
  $('.info-map__list li').mouseenter(function(){
  	var thisHover = $(this).attr('maptab');  
  	$('#'+thisHover).addClass('hover');
  	$(this).mouseleave(function(){
  	$('#'+thisHover).removeClass('hover');
  	})
  });
  $('.header__menu__mob__butt').on('click', function(){
  	$('.header__menu__mob').addClass('active');
  });
  $('.menu-exit').on('click', function(){
  	$('.header__menu__mob').removeClass('active');
  });
  $('.modal-form__load input').on('change',function(){
	  var myFile = $('.modal-form__load input').prop('files');
	  if(myFile.length != 0){
	  	$(this).parent().addClass('active');
	  }
  });
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if(wScroll >= 35){
      $('.header__inner').addClass('active');
    }else{
      $('.header__inner').removeClass('active');
    }
  });
  $('.contacts__block__open').on('click',function(){
      if($(this).parent().hasClass('open')){
          $(this).parent().removeClass('open');
      }else{
          $('.contacts__block').removeClass('open');
          $(this).parent().addClass('open');
      }
  })
});