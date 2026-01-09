window.onload = function () {
  AOS.init();

  VANTA.BIRDS({
    el: ".home-container",
    color1: 0xb7e2e0,
    color2: 0x5b79c0,
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0xffffff,
    colorMode: "lerpGradient",
    birdSize: 3.1,
    separation: 50.0,
    wingSpan: 40.0,
    quantity: 2.0,
  });

  let scrollLink = $(".scroll");

  scrollLink.click(function (e) {
    e.preventDefault();
    let target = $(this).attr("href");
    scrollToTarget(target);
  });

  function scrollToTarget(target) {
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 99,
      },
      450
    );
  }

  const sections = document.querySelectorAll("section");
  const navItem = document.querySelectorAll(".header-btn");
  var current = "";

  $(window).scroll(function () {
    activeNav();
  });

  function activeNav() {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 101) {
        current = section.getAttribute("id");
      }
    });

    navItem.forEach((item) => {
      item.classList.remove("active");
      if (item.classList.contains(current)) {
        item.classList.add("active");
      }
    });
  }

  activeNav();

  $(window).scroll(function () {
    resizeHeader();
  });

  function resizeHeader() {
    const navItems = ["about", "work", "contact"];

    if ($(window).width() > 676) {
      if (
        document.body.scrollTop > 160 ||
        document.documentElement.scrollTop > 160
      ) {
        $("header").addClass("shrunk").css("transition", "0.4s");
        $("header .title-wrapper .base").css("fontSize", "55px");
        $("header .title-wrapper .gradient").css("fontSize", "55px");
        $("header .title-wrapper .base a").css("color", "#b8b8b8");
        $.each(navItems, function (i, item) {
          $(`header .${item}-wrapper:not(.title-wrapper) .base`).css(
            "fontSize",
            "28px"
          );
          $(`header .${item}-wrapper:not(.title-wrapper) .gradient`).css(
            "fontSize",
            "28px"
          );
          $(`header .${item}-wrapper:not(.title-wrapper) .base a`).css(
            "color",
            "#b8b8b8"
          );
        });
      } else {
        $("header").removeClass("shrunk");
        $("header .title-wrapper .base").css("fontSize", "120px");
        $("header .title-wrapper .gradient").css("fontSize", "120px");
        $("header .title-wrapper .base a").css("color", "transparent");
        $.each(navItems, function (i, item) {
          $(`header .${item}-wrapper:not(.title-wrapper) .base`).css(
            "fontSize",
            "36px"
          );
          $(`header .${item}-wrapper:not(.title-wrapper) .gradient`).css(
            "fontSize",
            "36px"
          );
          $(`header .${item}-wrapper:not(.title-wrapper) .base a`).css(
            "color",
            "transparent"
          );
        });
      }
    } else if ($(window).width() <= 676) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        $("header").addClass("shrunk").css("transition", "0.4s");
        $("header .title-wrapper .base").css("fontSize", "55px");
        $("header .title-wrapper .gradient").css("fontSize", "55px");
        $("header .title-wrapper .base a").css("color", "#b8b8b8");
        $.each(navItems, function (i, item) {
          $(`header .${item}-wrapper:not(.title-wrapper) .base`).css(
            "fontSize",
            "28px"
          );
          $(`header .${item}-wrapper:not(.title-wrapper) .gradient`).css(
            "fontSize",
            "28px"
          );
          $(`header .${item}-wrapper:not(.title-wrapper) .base a`).css(
            "color",
            "#b8b8b8"
          );
        });
      } else {
        $("header").removeClass("shrunk");
        $("header .title-wrapper .base").css("fontSize", "120px");
        $("header .title-wrapper .gradient").css("fontSize", "120px");
        $("header .title-wrapper .base a").css("color", "transparent");
        $.each(navItems, function (i, item) {
          $(`header .${item}-wrapper:not(.title-wrapper) .base`).css(
            "fontSize",
            "36px"
          );
          $(`header .${item}-wrapper:not(.title-wrapper) .gradient`).css(
            "fontSize",
            "36px"
          );
          $(`header .${item}-wrapper:not(.title-wrapper) .base a`).css(
            "color",
            "transparent"
          );
        });
      }
    }
  }

  resizeHeader();

  $("#gform").on("submit", function (e) {
    $(".contact-form-wrapper *").fadeOut(1000);
    setTimeout(() => {
      $("<p>Thank you, your message has been sent.</p>").appendTo(
        ".contact-form-wrapper"
      );
    }, 1000);
  });

  $(".thumbnail-wrapper").mouseenter(function () {
    $(this)
      .children(".thumbnail-overlay")
      .removeClass("slide-down")
      .addClass("slide-up");
  });

  $(".thumbnail-wrapper").mouseleave(function () {
    $(this)
      .children(".thumbnail-overlay")
      .removeClass("slide-up")
      .addClass("slide-down");
  });

  $("#submit").hover(
    function () {
      $(this).addClass("shine");
    },
    function () {
      $(this).removeClass("shine");
    }
  );
};
