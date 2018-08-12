$(document).ready(function(){
  console.log('ready!');

  $('.hamburger').click(function() {
    $(this).toggleClass('is-active');
    $("#nav-menu").slideToggle("slow");
  });

});