document
  .querySelector(".btn-topbar_close")
  .addEventListener("click", function () {
    document.querySelector(".announcement-bar").remove();
    document.documentElement.style.setProperty(
      "--sf-announcement-height",
      "0px"
    );
  });

// slider
$(".slide-nav").on("click", function (e) {
  e.preventDefault();
  // get current slide
  var current = $(".flex--active").data("slide"),
    // get button data-slide
    next = $(this).data("slide");

  $(".slide-nav").removeClass("active");
  $(this).addClass("active");

  if (current === next) {
    return false;
  } else {
    $(".slider__wrapper")
      .find(".flex__container[data-slide=" + next + "]")
      .addClass("flex--preStart");
    $(".flex--active").addClass("animate--end");
    setTimeout(function () {
      $(".flex--preStart")
        .removeClass("animate--start flex--preStart")
        .addClass("flex--active");
      $(".animate--end")
        .addClass("animate--start")
        .removeClass("animate--end flex--active");
    }, 800);
  }
});

// shop by category

var swiper = new Swiper(".slide-container", {
  slidesPerView: 5,
  sliderPerGroup: 5,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination-shop",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".slide-mini-product", {
  slidesPerView: 2,
  sliderPerGroup: 3,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination-mini-slide",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
  },
});

window.onscroll = function () {
  if (pageYOffset >= 200) {
    document.getElementById("scroll-to-top-button").style.visibility =
      "visible";
  } else {
    document.getElementById("scroll-to-top-button").style.visibility = "hidden";
  }
};

document.getElementById("scroll-to-top-button").onclick = function () {
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: "smooth",
  });
};
