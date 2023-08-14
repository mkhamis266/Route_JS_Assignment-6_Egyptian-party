/* home */
let menuTotalWidth = $(".menu").outerWidth();

$(".side-menu").css("left", -menuTotalWidth);
$(".icon").click(function () {
  $(".side-menu").animate({ left: "0" });
});
$(".close").click(function () {
  $(".side-menu").animate({ left: `${-menuTotalWidth}` });
});

/* details */
$(".desc").eq(0).show();
$(".title").click(function () {
  $(".desc").slideUp(500);
  if ($(this).next().css("display") == "none") {
    $(this).next().slideDown(500);
  }
});

/* count */
let eventDate = new Date(2023, 9, 27, 8);
let interval = setInterval(function () {
  let remaining = eventDate - new Date();
  if (remaining <= 0) {
    clearInterval(interval);
    return
  }
  let days = remaining / 86400000;
  let hours = (days % 1) * 24;
  let minutes = (hours % 1) * 60;
  let seconds = (minutes % 1) * 60;
  $(".days").html(Math.floor(days));
  $(".hours").html(Math.floor(hours));
  $(".minutes").html(Math.floor(minutes));
  $(".seconds").html(Math.floor(seconds));
}, 1000);

/* contact */
$("#message").on("input",function () {
  if($(this).val().length >= 100){
    $(".chars").html("you have exceeded the maximum allowed")
    return
  }
  $(".chars").html(100 - $(this).val().length);
})