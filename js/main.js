(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("nav-sticky");
    } else {
      $(".navbar").removeClass("nav-sticky");
    }
  });

  // Video

  $(".box-video").click(function () {
    $("iframe", this)[0].src += "&autoplay=1";
    $(this).addClass("open");
  });

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
    center: true,
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Blogs carousel
  $(".blog-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Class filter
  var classIsotope = $(".class-container").isotope({
    itemSelector: ".class-item",
    layoutMode: "fitRows",
  });

  $("#class-filter li").on("click", function () {
    $("#class-filter li").removeClass("filter-active");
    $(this).addClass("filter-active");
    classIsotope.isotope({ filter: $(this).data("filter") });
  });

  // Portfolio filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-filter li").on("click", function () {
    $("#portfolio-filter li").removeClass("filter-active");
    $(this).addClass("filter-active");
    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });
})(jQuery);

// Show the first tab by default
openTab("tab1");

function openTab(tabName) {
  // Hide all tab content
  var tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach(function (content) {
    content.style.display = "none";
  });

  // Show the selected tab content
  var selectedTabContent = document.getElementById(tabName);
  if (selectedTabContent) {
    selectedTabContent.style.display = "block";
  }

  // Remove 'active' class from all tab buttons
  var tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach(function (button) {
    button.classList.remove("active");
  });

  // Add 'active' class to the clicked tab button
  var activeTabButton = document.querySelector(
    ".tab-button[data-tab='" + tabName + "']"
  );
  console.log(activeTabButton);
  if (activeTabButton) {
    activeTabButton.classList.add("active");
  }
}
