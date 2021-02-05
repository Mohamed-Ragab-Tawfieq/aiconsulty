AOS.init();


// ------------- navbar animation
$("[data-trigger]").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  var offcanvas_id = $(this).attr('data-trigger');
  $(offcanvas_id).toggleClass("show");
  $('body').toggleClass("offcanvas-active");
  $(".screen-overlay").toggleClass("show");
});

$(".btn-close, .screen-overlay").click(function (e) {
  $(".screen-overlay").removeClass("show");
  $(".mobile-offcanvas").removeClass("show");
  $("body").removeClass("offcanvas-active");
});

// $('#dropdownMenuButton').mouseenter(function () {
//   $('.navbar .bi-chevron-down').removeClass('bi-chevron-down').addClass('bi-chevron-up');
// });
// $('#dropdownMenuButton').mouseleave(function () {
//   $('.navbar .bi-chevron-down').removeClass('bi-chevron-up').addClass('bi-chevron-down');
// });


// --------- navbar animation
$('#navbar_main a').css('color', '#fff');
$('#navbar_main a').css('padding-top', '20px');
$('#navbar_main a').css('padding-bottom', '20px');
$('#navbar_main .nav-link').click(function () {
  $(this).find('.bi-chevron-down').toggleClass('rotate');
});
$(".training > a:first").mouseenter(function () {
  $(".nested2").css('display', 'block');
});
$(".training > a:first").mouseleave(function () {
  $(".nested2").css('display', 'none');
});


$(window).scroll(function animate() {
  $('.navbar-brand img').css('display', 'inline-block');
});

$(window).scroll(function animate() {
  if ($(window).scrollTop() >= 50) {
    $('#navbar_main, header').addClass('animate');
    $('#navbar_main, header').css('color', '#fff');
    $('#navbar_main, header').addClass('navbar-light').removeClass('navbar-dark');
    $('#navbar_main a').css('padding-top', '5px');
    $('#navbar_main a').css('padding-bottom', '5px');
    $('.navbar-brand img').css('display', 'inline-block');
    $('nav .btn-close').css('margin-top', '20px');
    $('.navbar-brand h3').css('display', 'none');
  } else {
    $('#navbar_main a, header').css('color', '#fff');
    $('#navbar_main, header').removeClass('animate');
    $('#navbar_main a').css('padding-top', '20px');
    $('#navbar_main a').css('padding-bottom', '20px');
    $('.navbar-brand img').css('display', 'none');
    $('nav .btn-close').css('margin-top', '0px');
    $('.navbar-brand h3').css('display', 'inline-block');
  }
});


$(window).scroll(function animate() {
  if ($(window.outerWidth < 992)) {
    if ($(window).scrollTop() >= 50) {
      $('.first-header').css('padding-top', '0px');
      $('.first-header').css('padding-bottom', '0px');
      $('.first-header .menu-button').css('padding-top', '15px');
      $('.first-header .menu-button').css('color', '#333');
      $('.navbar-brand img').css('display', 'inline-block');
      $('nav .btn-close').css('margin-top', '20px');
      $('.navbar-brand h3').css('display', 'none');
    } else {
      $('.first-header').css('padding-top', '20px');
      $('.first-header').css('padding-bottom', '20px');
      $('.first-header .menu-button').css('padding-top', '0px');
      $('.first-header .menu-button').css('color', '#fff');
      $('.navbar-brand img').css('display', 'none');
      $('nav .btn-close').css('margin-top', '0px');
    }
  }
});


// ------ solutions section
$('.solutions #carousel-example').on('slide.bs.carousel', function (e) {
  /*
      CC 2.0 License Iatek LLC 2018 - Attribution required
  */
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 5;
  var totalItems = $('.solutions .carousel-item').length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $('.solutions .carousel-item').eq(i).appendTo('.solutions .carousel-inner');
      }
      else {
        $('.solutions .carousel-item').eq(0).appendTo('.solutions .carousel-inner');
      }
    }
  }
});


// ------ solutions section
// $('.solutions #recipeCarousel').carousel({
//   interval: 5000
// })

// $('.solutions .carousel .carousel-item').each(function () {
//   var minPerSlide = 3;
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));

//   for (var i = 0; i < minPerSlide; i++) {
//     next = next.next();
//     if (!next.length) {
//       next = $(this).siblings(':first');
//     }

//     next.children(':first-child').clone().appendTo($(this));
//   }
// });


// ------ stay-in-touch section
let button = document.querySelector('.stay .button');
let buttonText = document.querySelector('.stay .tick');

const tickMark = "<svg width=\"35\" height=\"35\" viewBox=\"-12 -5 65 60\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Submit";

button.addEventListener('click', function () {
  if ($('.stay .swing').val().length > 0) {
    if (buttonText.innerHTML !== "Submit") {
      buttonText.innerHTML = "Submit";
    } else if (buttonText.innerHTML === "Submit") {
      buttonText.innerHTML = tickMark;
    }
    this.classList.toggle('button__circle');
    $('.stay .has-error').addClass('invisible');
  } else {
    $('.stay .has-error').removeClass('invisible');
  }
});


// -------------- clients section
$('.clients .carousel[data-type="multi"] .item').each(function () {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < 2; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});


// ------------- go-to-top button 
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.scrolltop:hidden').stop(true, true).fadeIn();
  } else {
    // $('.scrolltop').stop(true, true).fadeOut();
  }
});
$(function () {
  $(".scroll").click(function () {
    $("html,body").animate({ scrollTop: $(".top").offset().top }, "1000");
    return false
  });
});




// -------------------- mobile layout -----------------
// --- navbar
// $(document).ready(function () {
//   if ($(window).outerWidth < 768) {
//     $('nav.fixed-top').addClass('navbar-light bg-light');
//   }
// });
