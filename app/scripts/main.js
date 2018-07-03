$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	items:1,
  	dots:true,
  	// autoplay: true,
  	autoplaySpeed:500
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
  })
  $('.menu-exit').on('click', function(){
  	$('.header__menu__mob').removeClass('active');
  })
  $('.modal-form__load input').on('change',function(){
	  var myFile = $('.modal-form__load input').prop('files');
	  if(myFile.length != 0){
	  	$(this).parent().addClass('active');
	  }
  })
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if(wScroll >= 35){
      $('.header__inner').addClass('active');
    }else{
      $('.header__inner').removeClass('active');
    }
  })
});