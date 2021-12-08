// https://developer.mozilla.org/ko/docs/Web/API/Canvas_API
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(canvas.width, canvas.height);

let size = 10;
let isPressed = false;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
  //   console.log(isPressed, x, y);
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
  //   console.log(isPressed, x, y);
});

canvas.addEventListener("mousemove", (e) => {
  const clientX = e.clientX;
  const clientY = e.clientY;
  console.log("currX : " + clientX, "currY : " + clientY);
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    console.log(x2, y2);

    if (e.offsetX < 0) {
      drawCircle(x2, y2);
      drawLine(x, y, x2, y2);

      x = x2;
      y = y2;
    }
  }
});

function drawCircle(x, y) {
  //https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true); // Outer circle
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
}

// drawCircle(100, 200);
// drawLine(300, 300, 300, 500);
