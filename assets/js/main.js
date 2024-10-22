
//Navbar toggle icon
function navbar_toggler() {
    $('.navbar-toggler[data-toggle=collapse]').click(function () {
        if ($(".navbar-toggler[data-bs-toggle=collapse] i").hasClass('fa-bars')) {
        } else {
            $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
        }
    });
  }
  navbar_toggler();
  
// Navbar clone in mobile device
function navClone() {
    $('.js-clone-nav').each(function () {
        var $this = $(this);
        $this.clone().attr('class', 'navbar-nav ml-auto').appendTo('.d2c_mobile_view_body');
    });

    $('.d2c_mobile_view .nav-link').click(function () {
        $(".nav-link").removeClass("active");
        $('.d2c_mobile_view').removeClass('show');
        $(this).toggleClass('active');
    });
    }
    navClone();

// JS for fancybox Slide & button

function fancybox() {
    $('[data-fancybox]').fancybox({
        protect: true,
        buttons: [
            "fullScreen",
            "thumbs",
            "share",
            "slideShow",
            "close"
        ],
        image: {
            preload: false
        },
    });
  }
  fancybox();

// Partner Slider
$('.d2c_partner_slider').slick({
centerMode: true,
centerPadding: '0px',
dots: false,
arrows: false,
infinite: true,
autoplay:true,
speed: 2000,
slidesToShow: 6,
slidesToScroll: 1,
responsive: [
    {
    breakpoint: 1500,
    settings: {
        slidesToShow: 5,
    }
    },
    {
    breakpoint: 992,
    settings: {
        slidesToShow: 3,
    }
    },
    {
    breakpoint: 480,
    settings: {
        slidesToShow: 2,
    }
    }
]
});

// Team Slider
$('.d2c_team_slider').slick({
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    arrows: true,
    infinite: true,
    autoplay:true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
        }
        },
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
        }
        }
    ]
});

// Testimonial Slider
$('.d2c_testimonial_slider').slick({
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    arrows: true,
    infinite: true,
    autoplay:true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1400,
        settings: {
            slidesToShow: 1,
        }
        },
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
        }
        },
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
        }
        }
    ]
});

// Form Validation Js
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
    })
})();

// WOW JS
    new WOW().init();

// Preloader JS
window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');
});

// ScrollBtn JS
window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
}



// Template Name: {{ArtistaXpress – Free Bootstrap Creative Agency Website Template}}
// Template URL: {{https://www.designtocodes.com/product/artistaxpress-free-bootstrap-website-template}}
// Description: {{ArtistaXpress is a free Bootstrap website template specially designed for creative agencies. This template is perfect for creative agencies, business startups, web agencies, and digital agencies.}}
// Author: DesignToCodes
// Author URL: https://www.designtocodes.com
// Text Domain: {{ ArtistaXpress }}
