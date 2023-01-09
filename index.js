// tabs changes
jQuery(document).ready(function ($) {
  jQuery(".nft-tab-content:nth-of-type(1)").show();
  jQuery(".tabs-menu .tabs").on("click", function (event) {
    var target = $(this).attr("id");
    console.log(target);
    jQuery(".nft-tab-content").hide();
    jQuery("[data-section=" + target + "]").show();
  });
});

// Slick slider

$(document).ready(function ($) {
  $(".brands-slider").slick({
    slidesToShow: 10,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    pauseOnHover: false,
    cssEase: "linear",
  });
});
// Testimonal slider
$(document).ready(function ($) {
  $(".testimonal-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: false,
    variableWidth: true,
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
});

// //Developer Tool Tab change
$(document).ready(function ($) {
  $(".show-content").hide();
  $(".first").show();
  $(".click-tab").click(function () {
    $(".show-content").hide();
    var target = $(this).attr("id");
    $("[data-tab=" + target + "]").show();
  });
});

// Resources  To Scale Drop-down

// step-1 toggle the menu drop-down
$(document).ready(function () {
  $(".value").html($(".menu-items.first").data("text"));
  $(".drop-down-menu").hide();
  $(".drop-down-header").click(function () {
    $(".drop-down-menu").toggle();
  });

  // step-2 when select the active li rest will hide.
  $(".drop-down-menu li").click(function () {
    var text = $(this).data("text");
    $(".value").html(text);
    $(".drop-down-menu").hide();
  });
});

//------------------**** Nav Bar menu Drop down show on hover*****------------------//

// $(function () {
//   // $(".drop-down").hide();
//   $(".product-menu").hover(function () {
//     var target = $(this).attr("id");
//     $("[data-text=" + target + "]").show();
//     console.log("hover ho rha ha bhai");
//     // $(".drop-down").show();
//     $(".product-menu").addClass("active-bg");
//   });
//   $(".product-menu").mouseleave(function () {
//     var target = $(this).attr("id");
//     $("[data-text=" + target + "]").hide();
//     console.log("hover-end");
//     // $(".drop-down").hide();
//     $(".product-menu").removeClass("active-bg");
//   });
// });

// tab2 NFT API Tools for everything section
$(".tool-card-onhover").hover(
  function () {
    $(this).addClass("tool-change-card-border");
  },
  function () {
    $(this).removeClass("tool-change-card-border");
  }
);

$(document).ready(function ($) {
  $(".developer-code-tab-content").hide();
  $(".first").show();
  $(".tab").hover(function () {
    $(".developer-code-tab-content").hide();
    var target = $(this).attr("id");
    $("[data-tab=" + target + "]").show();
  });
});

// For Tab2 NFT
$(".tab").hover(function () {
  $(this).addClass("active-tab").siblings().removeClass("active-tab");
});

// For SDK tab (copy text btn)***************************************//
function copyme() {
  var copyelement = document.getElementById("myTooltip");
  copyelement.innerHTML = "Copied!";
}
function outFunc() {
  var copyelement = document.getElementById("myTooltip");
  copyelement.innerHTML = "copy!";
}
var btn = document.getElementById("btn");
var clipboard = new ClipboardJS(btn);
// / For sdk NPM btn script end*************************************//
