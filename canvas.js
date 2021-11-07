console.log("help");

//First, create a variable called canvas, and select the html element.
//use document selector, and then a querySelector(), which selects the first element of the stated kind. or, getElementById()
var canvas = document.querySelector('canvas');

//now to alter the width of the canvas, select canvas.width, and set it to the window.innerWidth(self explanatory)
canvas.width = window.innerWidth; //makes canvas expand to full width, excluding the margin
canvas.height = window.innerHeight;

//about the lil space left, well, some elements have styles applied by default, so if you dont want that margin you can set the body's margin to 0, with css

//Now, create a new variable c, which stands for Context. It gives methods to draw 2d stuff.
var c = canvas.getContext('2d');

//first function, fillRect(), takes 4 arguments. x value, y value, width, heigh. x and y determine where the rectangle will be, blah bkh blah. Coodinates are relative to the top left of the screen. 
c.fillRect(100, 100, 100px, 100px);
//you can create multiple boxes.
