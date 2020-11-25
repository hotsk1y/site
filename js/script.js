$(document).ready(function(){

  const animItems = document.querySelectorAll('._anim-items');
  if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
      for (let index = 0; index < animItems.length; index++){
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        animStart = 4;
  
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight){
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
  
        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
          animItem.classList.add('_active');
        }else{
          if(!animItem.classList.contains('_anim-no-hide')){
            animItem.classList.remove('_active');
          }
        }
      }
    }
    function offset(el){
      const rect = el.getBoundingClientRect(),
       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll();
  }

    $('a[href^="#"]').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top-50
      }, 800)
    });

    $('.slider').slick({
        slidesToShow: 2,
        variableWidth: false,
        speed: 800,
        infinite: true,
        draggable: true,
        responsive: [
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
    });

    $('[data-fancybox]').fancybox({
        keyboard: true,
        closeExisting: false,
        loop: false,
        infobar: false,
        toolbar: false,
        animationEffect: "zoom-in-out",
        transitionEffect: "tube",
        media : {
            youtube : {
              params : {
                autoplay : 0
              }
            }
          },
        mobile: {smallBtn: true}
    });

    $('.header__burger').click(function(enent){
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
    })

    $('.header__menu').click(function(event) {
      $('.header__burger,.header__menu').removeClass('active')
      $('body').removeClass('lock');
    })

    $('.social-icons').hover(function(){
      $(this).toggleClass('active');
    })
});