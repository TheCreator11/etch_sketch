$(document).ready(function(){
  $('body').append("<div id='container'></div>");
  $('body').prepend("<button onclick='newGrid()'>Make New Grid</button></br>");

    for(var i=0; i < 256; i++){
      $('#container').append('<div></div>');
    }

  function randomIntFromInterval(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  };

    $('div div').hover(function() {
      var r = randomIntFromInterval(0,255);
      var g = randomIntFromInterval(0,255);
      var b = 255
      $(this).css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
    });
});