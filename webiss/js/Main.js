/*global signInScreen: false */

// Will only be run once when the screen load
  // This function makes it so the divs do not get smaller when keyboard appears
  // This function does not cause the bug
function resizeWindow()
{
  "use strict";

  var canvas = document.getElementById('canvas');

  canvas.setAttribute("width", canvas.offsetWidth);
  canvas.setAttribute("height", canvas.offsetHeight);

  // .99 is to give it some extra space  
  var width = canvas.width * 0.99;
  var height = canvas.height * 0.99;
  
  var xOffset = (canvas.width  - width) / 2;
  var yOffset = (canvas.height - height) / 2;

  signInScreen.resize(xOffset, yOffset, width, height);
}


window.onload = function() 
{
  "use strict";
  resizeWindow();
};
