
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.lineWidth = 5;

function draw() {
  const go = (x, y) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  // Hoja izquierda
  ctx.beginPath();
  ctx.fillStyle = "#00FF00";
  ctx.strokeStyle = "#008000";
  ctx.moveTo(0, -250);
  ctx.arc(0, -50, 200, Math.PI * 1.5, Math.PI * 1.5 + 1.22, false);
  ctx.arc(0, 80, 200, Math.PI * 1.5, Math.PI * 1.5 + 0.78, true);
  ctx.lineTo(0, -250);
  ctx.fill();

  // Hoja derecha
  ctx.beginPath();
  ctx.moveTo(0, -250);
  ctx.arc(0, -50, 200, Math.PI * 1.5, Math.PI * 1.5 - 1.22, true);
  ctx.arc(0, 80, 200, Math.PI * 1.5, Math.PI * 1.5 - 0.78, false);
  ctx.lineTo(0, -250);
  ctx.fill();

  // Tallo
  ctx.beginPath();
  ctx.moveTo(-10, -190);
  ctx.lineTo(-10, 70);
  ctx.lineTo(10, 70);
  ctx.lineTo(10, -190);
  ctx.lineTo(0, -225);
  ctx.closePath();
  ctx.fill();

  // Pétalos
  ctx.fillStyle = "#FF00FF";
  ctx.strokeStyle = "#800080";

  // Pétalo 1
  ctx.beginPath();
  ctx.arc(-80, 270, 120, Math.PI * 1.5, Math.PI * 1.5 + 0.785, true);
  ctx.arc(-80, 270, 120, Math.PI * 1.5, Math.PI * 1.5 + 0.785, true);
  ctx.fill();

  // Pétalo 2
  ctx.beginPath();
  ctx.arc(-6, 270, 120, Math.PI * 1.5, Math.PI * 1.5 + 0.785, true);
  ctx.arc(-6, 270, 120, Math.PI * 1.5, Math.PI * 1.5 + 0.785, true);
  ctx.fill();

  // Pétalo 3
  ctx.beginPath();
  ctx.arc(-45, 270, 120, Math.PI * 1.5, Math.PI * 1.5 + 0.785, true);
  ctx.arc(-45, 270, 120, Math.PI * 1.5, Math.PI * 1.5 + 0.785, true);
  ctx.lineTo(30, 220);
  ctx.fill();

  // Flor izquierda
  ctx.beginPath();
  ctx.moveTo(-10, 70);
  ctx.lineTo(15, 70);
  ctx.arc(15, 141, 71, Math.PI * 1.5, Math.PI * 1.5 + 1.4);
  ctx.arc(50, 275, 400, Math.PI * 1.5, Math.PI * 1.5 + 0.575);
  ctx.arc(-160, 290, 300, Math.PI * 1.25, Math.PI * 1.5);
  ctx.fill();

  // Flor derecha
  ctx.beginPath();
  ctx.moveTo(-10, 70);
  ctx.arc(-10, 90, 20, 0, Math.PI * 0.7);
  ctx.arc(40, 120, 60, 0, Math.PI * 0.87);
  ctx.arc(90, 200, 300, Math.PI * 1.5, Math.PI * 1.75);
  ctx.arc(-60, 250, 400, Math.PI * 1.3, Math.PI * 1.5);
  ctx.arc(10, 300, 71, Math.PI, Math.PI * 1.5);
  ctx.fill();
}

draw();
