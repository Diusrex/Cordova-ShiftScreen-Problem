var signInScreen = new (function() 
{
  "use strict";

  // dimensions
  this.xPos = 0;
  this.yPos = 0;
  this.width = 100;
  this.height = 100;

  this.resize = function(xPos, yPos, width, height)
  {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;

    var screen = document.getElementById("signInScreen");
    screen.style.left   = this.xPos + "px";
    screen.style.top    = this.yPos + "px";
    screen.style.width  = this.width + "px";
    screen.style.height = this.height + "px";
  };
}
)();
