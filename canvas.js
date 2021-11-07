console.log("help");
//First, create a variable called canvas, and select the html element.
//use document selector, and then a querySelector(), which selects the first element of the stated kind. or, getElementById()
var canvas = document.querySelector('canvas');
//now to alter the width of the canvas, select canvas.width, and set it to the window.innerWidth(self explanatory)
canvas.width = window.innerWidth; //makes canvas expand to full width, excluding the margin
