// PART ONE Creating the canvas
let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth; //width of the canvas screen
canvas.height = window.innerHeight; //width of the canvas screen

//
let context = canvas.getContext('2d'); // consider this a super method
let mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove', event => {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse);
})

let maxRadius = 60;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  let r = getRandomInt(100, 255);
  let g = getRandomInt(0, 155);
  let b = getRandomInt(90, 200);


  this.draw = () => {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.strokeStyle = `rgb(${r}, ${g}, ${b})`;
    context.stroke();
    context.fillStyle = `rgb(${r}, ${g}, ${b})`;
    context.fill();
  }

  this.update = () => {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx; // one pixel per frame refresh
    this.y += this.dy;

    // interactivity with the mousemove
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 && mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 3;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 2;
    }

    this.draw();
  }
}

let circleArray = [];

for (var i = 0; i < 470; i++) {
  let radius = getRandomInt(2, 15)
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 5; // Velocity of object right left;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dy = (Math.random() - 0.5) * 5; // Velocity of the the object up down
  circleArray.push(new Circle(x, y, dx, dy, radius))
  console.log(circleArray)
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
};

animate();


// drawing objects and lines on the screen
// context.fillStyle = 'rgb(238, 54, 190, 0.5)'
// context.fillRect(100, 100, 100, 100); // Rectangle property!
// context.fillRect(200, 200, 100, 100); // Rectangle property!
// context.fillStyle = 'rgb(126, 77, 176)'
// context.fillRect(400, 600, 100, 100); // Rectangle property!
// context.fillRect(350, 130, 100, 100); // Rectangle property!
// context.fillStyle = 'rgb(77, 128, 176)'
// context.fillRect(610, 330, 100, 100); // Rectangle property!
// // x & y are where it is placed on the sceen from left top of screen
//
// // PART TWO Drawing on the canvas.
//
// //LINES
// context.beginPath();
// context.moveTo(98, 300);
// context.lineTo(300, 100);
// context.lineTo(320, 400);
// context.strokeStyle = "rgb(9, 121, 129)"
// context.stroke();
//
// context.beginPath();
// context.moveTo(976, 600);
// context.lineTo(400, 34);
// context.lineTo(220, 700);
// context.strokeStyle = "rgb(41, 62, 153)"
// context.stroke();
//
// context.beginPath();
// context.moveTo(58, 200);
// context.lineTo(600, 434);
// context.lineTo(620, 660);
// context.strokeStyle = "rgb(190, 75, 193)"
// context.stroke();
// console.log(canvas);
//
// // Arcs to create a circle

// for (let i = 0; i < 80; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   let radius = getRandomInt(0, 100)
//   let r = getRandomInt(0, 255);
//   let g = getRandomInt(0, 255);
//   let b = getRandomInt(0, 255);
//   context.beginPath();
//   context.arc(x, y, radius, 0, Math.PI * 2, false);
//   context.strokeStyle = `rgb(${r}, ${g}, ${b})`;
//   context.stroke();
// }
//first two args are third is radius, fourth is start angle,
//and fifth is Float, sixth is endAngle, Float, drawCounterClockWise: Bool (false));
