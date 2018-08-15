$(document).ready(function(){
  $('.nav-button').click(function() {
    // Add class to fill in menu circle
    $(this).toggleClass('is-active');
    // Display menu div by sliding down
    $("#nav-menu").slideToggle("slow");
    // Scroll to top of page if menu clicked
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});