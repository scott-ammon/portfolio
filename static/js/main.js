$(document).ready(function(){
  console.log('ready!');

  $('.navbar').click(function() {
    $(this).toggleClass('is-active');
    $("#nav-menu").slideToggle("slow");
    // $("#nav-menu").toggle("slide");
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

});