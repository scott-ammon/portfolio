$(document).ready(function(){
  console.log('ready!');
  M.AutoInit();

  function setup() {
    var myCanvas = createCanvas(600, 400);
    myCanvas.parent('myCanvas');
    line(15, 25, 70, 90);
  }
});