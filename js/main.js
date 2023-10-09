/*[ Back to top ]
   ===========================================================*/
$(".scrollup").hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
});
$('.scrollup').on('click', function () {
  $('body,html').animate({
    scrollTop: 0
  }, 800);
  return false;
});



/*[ Sticky Navbar ]
   ===========================================================*/
window.onscroll = function () { myFunction() };

var navbar = document.querySelector(".nav-scroll");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticking")
  } else {
    navbar.classList.remove("sticking");
  }
}

/*[ Show/hide sidebar ]
===========================================================*/
let sidebarShowBtn = document.querySelector('.sidebarButton');
let sidebar = document.querySelector('.mobileSidebar');
let sidebarOverlay = document.querySelector('.overlaySidebar');
let closeSidebarBtn = document.querySelector('.closeMenu');

sidebarShowBtn.addEventListener('click', function () {
  sidebar.classList.add('showSidebar');
  sidebarOverlay.classList.add('showOverlaySidebar')
})

closeSidebarBtn.addEventListener('click', function() {
  sidebar.classList.remove('showSidebar');
  sidebarOverlay.classList.remove('showOverlaySidebar')
})



/*[ Count Up ]
    ===========================================================*/
$('.count').counterUp({
  delay: 20,
  time: 5000
});

/*========================== SLIDER BANEER ============================*/
$(".carosoul-wrapper").owlCarousel({
  loop: true,
  center: true,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayHoverPause: false,
  navText: [`<i class="fa-solid fa-angle-left"></i>`,
    `<i class="fa-solid fa-angle-right"></i>`],
  autoplayTimeout: 8000,
  smartSpeed: 1200,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});


/*========================== TESTIMONIAL SLIDER ============================*/
$('.testimonial-slider').owlCarousel({
  loop: true,
  margin: 0,
  dots: false,
  nav: true,
  smartSpeed: 1200,
  autoplay: true,
  navText: [`<i class="fa-solid fa-arrow-left-long"></i>`, `<i class="fa-solid fa-arrow-right-long"></i>`],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    }
  }
});

/*========================== GALLARY SLIDER ============================*/
$('.gallary-slider').owlCarousel({
  loop: true,
  margin: 0,
  dots: false,
  autoplayHoverPause: false,
  smartSpeed: 1500,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 5,
    }
  }
});


/*[ Daterangepicker ]
    ===========================================================*/
$('.my-calendar').daterangepicker({
  "singleDatePicker": true,
  "showDropdowns": true,
  locale: {
    format: 'DD/MM/YYYY'
  },
});

var myCalendar = $('#my-calendar');
var isClick = 0;

$(window).on('click', function () {
  isClick = 0;
});

$(myCalendar).on('apply.daterangepicker', function () {
  isClick = 0;
});

$('.btn-calendar').on('click', function (e) {
  e.stopPropagation();

  if (isClick == 1) isClick = 0;
  else if (isClick == 0) isClick = 1;

  if (isClick == 1) {
    myCalendar.focus();
  }
});

$(myCalendar).on('click', function (e) {
  e.stopPropagation();
  isClick = 1;
});

$('.daterangepicker').on('click', function (e) {
  e.stopPropagation();
});



/* wow init 
======================================*/
new WOW({ mobile: false }).init();



/*[ parallax Init ]
======================================*/
$('.parallax100').parallax100();



/*[ active nav link ]
======================================*/
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.navbar-list li a').forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
})


/*[ magnificPopup video]
======================================*/
$(document).ready(function () {
  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
});


/*[ LOADERS ]
======================================*/
let loader = document.querySelector('.loader')
window.addEventListener('load', function () {
  loader.style.display = 'none';
})



/*[ magnificPopup trip image]
======================================*/
$(document).ready(function () {
  $('.popup-link').magnificPopup({ 
     type: 'image'
    });
});


/*[ accordion header background] 
======================================*/
let accordion = document.querySelectorAll('.accordion-header');
$(accordion).click(function() {
  $(".accordion-heading-bg").removeClass("accordion-heading-bg");
  $(this).addClass("accordion-heading-bg");
});