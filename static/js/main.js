$(document).ready(function(){
  console.log('ready!');

  $( ".proj-text" ).mouseenter(function() {
    $(".proj-text p").css("display", "inline-block");
  }).mouseleave(function() {
    $(".proj-text p").css("display", "none");
  });
});