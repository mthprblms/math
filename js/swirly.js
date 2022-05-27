//Settings
var elementsCount =2000
var increment = 1/ elementsCount;  
var sizeX = 4;
var sizeY =4;
var color = "rgba(245,9,156, 1)"
//Global props
var getDimensions = function() {
  var offsetHeight = 70; // Codepen fix
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    offsetHeight: offsetHeight
  }
}

var dimensions = getDimensions();
var canvas = document.getElementById('canvas');
var time = 1;
var radius = Math.min(dimensions.width / 2.2, (dimensions.height - dimensions.offsetHeight) / 2.2) /
 elementsCount;

function init() {
  if (canvas.getContext) {
    window.requestAnimationFrame(draw);
  }
  canvas.width = dimensions.width;
  //We dont want any offset here
  canvas.height = dimensions.height;
}

function draw() {
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'hsla('+ Math.floor(Math.random()*0)+Math.ceil(2) +',100%,50%, .3)';
  var dimensions = getDimensions();
  var width = dimensions.width;
  var height = dimensions.height;
  
  ctx.clearRect(0, 0, width, height);

  for (var i = 0; i < elementsCount; i += Math.abs(.61)) {
    var x = (width - sizeX / 2) / 2 + Math.cos(time % 70 * i) * radius * i;
    var y = (height - sizeY / 2) / 2 + Math.sin(time % 360 * i) * radius * i;	
    
    ctx.fillRect(x, y, sizeX, sizeY);
  }
  
  time += increment;
  window.requestAnimationFrame(draw);
}

init();


