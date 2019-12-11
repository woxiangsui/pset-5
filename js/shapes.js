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
  }
  else {
    while (input.length > 50) {
      window.alert("Your message is too long. Keep it under 50 characters.");
      input = window.prompt("Message:");
    }
  }

  ctx.font = "48px Sans-serif";
  ctx.clearRect(0, 0, box.width, box.height);
  ctx.strokeText(input, 30, 70);
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
    // write your exercise 2 code here
    window.prompt("Width:");
    window.prompt("Height:");
    window.prompt("X:");
    window.prompt("Y:");
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    // write your exercise 3 code here
  var canvas = document.getElementById("student-canvas-3");
  var ctx = canvas.getContext("2d");

  color = window.prompt("Color:");
  if (color == null) {
    ctx.clearRect(0, 0, canvas.height, canvas.width);
  }
  else if (color === "black" || "Black" || "blue" || "Blue" || "green" || "Green" || "orange" || "Orange" || "purple" || "Purple" || "red" || "Red" || "yellow" || "Yellow") {
    if (color == "black" || "Black") {
      ctx.fillStyle = "black";
      ctx.clearRect(0, 0, 1024, 128);
      ctx.fillRect(10, 10, 100, 50);
    } if (color == "blue" || "Blue") {
      ctx.fillStyle = "blue";
      ctx.clearRect(0, 0, 1024, 128);
      ctx.fillRect(10, 10, 100, 50);
    } if (color == "green" || "Green") {
      ctx.fillStyle = "Green";
      ctx.clearRect(0, 0, 1024, 128);
      ctx.fillRect(10, 10, 100, 50);
    } if (color == "orange" || "Orange") {
      ctx.fillStyle = "orange";
      ctx.clearRect(0, 0, 1024, 128);
      ctx.fillRect(10, 10, 100, 50);
    } if (color == "purple" || "Purple") {
      ctx.fillStyle = "purple";
      ctx.clearRect(0, 0, 1024, 128);
      ctx.fillRect(10, 10, 100, 50);
    }if (color == "red" || "Red") {
      ctx.fillStyle = "red";
      ctx.clearRect(0, 0, 1024, 128);
      ctx.fillRect(10, 10, 100, 50);
    }if (color == "yellow" || "Yellow") {
      ctx.fillStyle = "yellow";
      ctx.clearRect(0, 0, 1024, 128);
      ctx.fillRect(10, 10, 100, 50);
    } else {
        while (color != "black" || "Black" || "blue" || "Blue" || "green" || "Green" || "orange" || "Orange" || "purple" || "Purple" || "red" || "Red" || "yellow" || "Yellow") {
          window.alert(color + " is not a supported color");
          window.prompt("Color:");
      }
  }
}
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
    window.prompt("Side 1:");
    window.prompt("Side 2:");
    window.prompt("Side 3:");
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
    window.prompt("Radius:");
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
    window.prompt("Side:");
};
