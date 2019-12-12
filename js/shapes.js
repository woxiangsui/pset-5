window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
    // write your exercise 1 code here
  var box = document.getElementById("student-canvas-1");
  var ctx = box.getContext("2d");

  input = window.prompt("Message:");
  if (input == null) {
    ctx.clearRect(0, 0, box.width, box.height);
    input = "";
  }
  else {
    while (input.length > 50) {
      window.alert("Your message is too long. Keep it under 50 characters.");
      input = window.prompt("Message:");
    }
  }

  ctx.font = "48px Sans-serif";
  ctx.clearRect(0, 0, box.width, box.height);
  ctx.strokeText(input, 30, 70, 1024);
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
    // write your exercise 2 code here
  var canvas = document.getElementById("student-canvas-2");
  var ctx = canvas.getContext("2d");
  cont = true;

  width = window.prompt("Width:");
  height = window.prompt("Height:");
  x = window.prompt("X:");
  y = window.prompt("Y:");

  while (cont) {
    if ((width == null) || (height == null) || (x == null) || (y == null)) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cont = false;
    } else if (1 > width > canvas.width) {
      window.alert("Your width must be between 1 and 1024.");
      width = window.prompt("Width:");
    } else if (1 > height > canvas.height) {
      window.alert("Your height must be between 1 and 512.");
      height = window.prompt("Height:");
    } else if (x < 1) {
      window.alert("Your x-coordinate must be between 1 and 1024.");
      x = window.prompt("X:");
    } else if (y < 1) {
      window.alert("Your y-coordinate must be between 1 and 512.");
      y = window.prompt("Y:");
    } else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
      window.alert("One of your values is not a number.");
      width = window.prompt("Width:");
      height = window.prompt("Height:");
      x = window.prompt("X:");
      y = window.prompt("Y:");
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.rect(x, y, width, height);
      ctx.stroke();
      cont = false;
    }
  }
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    // write your exercise 3 code here
  var canvas = document.getElementById("student-canvas-3");
  var ctx = canvas.getContext("2d");

  let cont = true;
  color = window.prompt("Color:");
  if (color == null) {
    ctx.clearRect(0, 0, canvas.height, canvas.width);
  }
  color = color.toLowerCase();
  while (cont) {
    if (color === "black") {
      ctx.fillStyle = "black";
      ctx.clearRect(0, 0, 1024, 128);
      ctx.fillRect(10, 10, 100, 50);
      cont = false;
    } else if (color === "blue") {
      ctx.fillStyle = "blue";
      ctx.clearRect(0, 0, 1024, 128);
      ctx.fillRect(10, 10, 100, 50);
      cont = false;
    } else if (color === "green") {
      ctx.fillStyle = "Green";
      ctx.clearRect(0, 0, 1024, 128);
      ctx.fillRect(10, 10, 100, 50);
      cont = false;
    } else if (color === "orange") {
      ctx.fillStyle = "orange";
      ctx.clearRect(0, 0, 1024, 128);
      ctx.fillRect(10, 10, 100, 50);
      cont = false;
    } else if (color === "purple") {
      ctx.fillStyle = "purple";
      ctx.clearRect(0, 0, 1024, 128);
      ctx.fillRect(10, 10, 100, 50);
      cont = false;
    } else if (color === "red") {
      ctx.fillStyle = "red";
      ctx.clearRect(0, 0, 1024, 128);
      ctx.fillRect(10, 10, 100, 50);
      cont = false;
    } else if (color === "yellow") {
      ctx.fillStyle = "yellow";
      ctx.clearRect(0, 0, 1024, 128);
      ctx.fillRect(10, 10, 100, 50);
      cont = false;
    } else if (color == null){
      cont = false;
    } else {
      window.alert(color + " is not a supported color.");
      color = window.prompt("Color:");
    }
  }
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
  var canvas = document.getElementById("student-canvas-4");
  var ctx = canvas.getContext("2d");
  let cont = true;

    a = Number(window.prompt("Side 1:"));
    b = Number(window.prompt("Side 2:"));
    c = Number(window.prompt("Side 3:"));

    while (cont) {
      if ((a == null) || (b == null) || (c == null)) {
        ctx.clearRect(0, 0, 1024, 128);
        cont = false;
    } else if ((1 > a > canvas.height) || (1 > b > canvas.height) || (1 > c > canvas.height)) {
        window.alert("Your sides should be between 1 and 1024.");
        a = Number(window.prompt("Side 1:"));
        b = Number(window.prompt("Side 2:"));
        c = Number(window.prompt("Side 3:"));
    } else if (isNaN(a) || isNaN(b) || isNaN(c)) {
      window.alert("One of your sides is not a number.")
      a = Number(window.prompt("Side 1:"));
      b = Number(window.prompt("Side 2:"));
      c = Number(window.prompt("Side 3:"));
    }
    if (a>b){
      temp = a;
      a = b;
      b = temp;
    } if (a>c){
      temp = a;
      a = c;
      c = temp;
    } if (c<b){
      temp = c;
      c = b;
      b = temp;
    } if (a*a+b*b == c*c) {
      x = 25
      y = 25;

      ctx.clearRect(0, 0, 1024, 128);
      ctx.beginPath();
      ctx.moveTo(x, y);
      y += a;
      ctx.lineTo(x, y);
      x += b;
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.stroke();
      cont = false;
    }
    else if (a*a+b*b != c*c) {
      window.alert("That's not a valid right triangle.");
      a = Number(window.prompt("Side 1:"));
      b = Number(window.prompt("Side 2:"));
      c = Number(window.prompt("Side 3:"));
    }
  }
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 5 code here
  var canvas = document.getElementById("student-canvas-5");
  var ctx = canvas.getContext("2d");
  var radius = null;

  var radius = Number(window.prompt("Radius:"));

  ctx.clearRect(0, 0, 1024, 128);

  if (radius == null) {
    ctx.clearRect(0, 0, canvas.height, canvas.width);
  }
  while (radius != null) {
    if (radius == null) {
      ctx.clearRect(0, 0, canvas.height, canvas.width);
      radius == null;
    }
   else if (isNaN(radius)) {
        window.alert("Your radius is not a number.");
        radius = Number(window.prompt("Radius:"));
    } else if (radius < 32) {
        window.alert("Your radius must be at least 32.");
        radius = Number(window.prompt("Radius:"));
    } else if (radius > (canvas.height/2)) {
        window.alert("Your smiley face won't fit on the canvas.");
        radius = Number(window.prompt("Radius:"));
    } else if (radius != null) {
        eye = 0.15 * radius;
        mouth = 0.7 * radius;
        x = canvas.width/2;
        y = canvas.height/2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        ctx.moveTo(x + mouth, y);
        ctx.arc(x, y, mouth, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo((x - (radius * 0.4)) + eye, y - (radius * 0.4));
        ctx.arc(x - (radius * 0.4), y - (radius * 0.4), eye, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo((x + (radius * 0.4)) + eye, y - (radius * 0.4));
        ctx.arc(x + (radius * 0.4), y - (radius * 0.4), eye, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();
        radius = null;
      }
    }
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 6 code here
    window.prompt("Side:");
};
