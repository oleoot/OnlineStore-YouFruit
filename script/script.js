
$(document).ready(function () {
  $(".header__nav, .menu-ul, .text__wrap, .slider-block__headline").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});
$(document).ready(function () {
  $('.slider').slick({
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000000,
    arrows: false
  });
});
// Товары
let swiper = new Swiper('.s1', {
  slidesPerView: 2.5,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    375: {
      slidesPerView: 1.5,
    },
    425: {
      slidesPerView: 1.3,
    },
    768: {
      slidesPerView: 1.8,
    },
    1025: {
      slidesPerView: 2.8,
    },
    1280: {
      slidesPerView: 2.8,
    },
    1441: {
      slidesPerView: 3.7,
    }
  }
});
//

// ОТЗЫВЫ
let swiperRev = new Swiper('#s1', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  freeMode: false,
  loop: false,
  // loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '#js-next',
    prevEl: '#js-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,

    },
    425: {
      slidesPerView: 1,
      slidesPergroup: 0,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 1,
    },
    1025: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 2,
    },
    1441: {
      slidesPerView: 3,
    }
  }
});

let swiperHead = new Swiper('.s3', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 100000,
  },



});
//


$(document).ready(function () {
  $(".order__form, .box__form").submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "php/mail.php",
      data: th.serialize()
    }).done(function () {
      window.open("thankYou/thank-you.html");
      setTimeout(function () {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});

// // БЕКАП!!!!
// // VANILLA JS
const navSlide = () => {
  const menu = document.querySelector(".menu");
  const navBar = document.querySelector(".header__menu");
  const navLinks = document.querySelectorAll(".menu__li");
  const navLi = document.querySelectorAll(".menu__li");
  // Toggle Nav
  navBar.addEventListener("click", () => {
    menu.classList.toggle("menu-active");

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
      }

    });
    // Burger animation
    navBar.classList.toggle("toggle");

  });
  //  close navbar
  navLi.forEach(function (link) {
    link.addEventListener('click', () => {
      menu.classList.toggle("menu-active");
      navBar.classList.toggle("toggle");

      navLinks.forEach((link, index) => {
        link.style.animation = '';
      });
    })
  }


  )
}

navSlide();




let toTop = document.getElementById("backToTop");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 1500) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}


$('#backToTop').click(function () {
  $('html,body').animate({ scrollTop: 0 }, 800);
});












$(function () {
  'use strict';
  // инициализация плагина
  $.jqCart({
    buttons: '.add_item',
    handler: './php/handler.php',
    cartLabel: '.label-place',
    visibleLabel: true,
    openByAdding: false,
    currency: '&#8372;'
  });
  // Пример с дополнительными методами
  $('#open').click(function () {
    $.jqCart('openCart'); // открыть корзину
  });
  $('#clear').click(function () {
    $.jqCart('clearCart'); // очистить корзину
  });
});
