const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Mover el punto de origen al centro inferior y aplicar escala
ctx.translate(canvas.width / 2, canvas.height * 0.75);
ctx.scale(1.2, 1.2);
ctx.lineWidth = 2;

function animateSteps(steps, delay = 400) {
  let i = 0;
  function next() {
    if (i < steps.length) {
      steps[i++]();
      setTimeout(next, delay);
    }
  }
  next();
}

function drawTulip() {
  const steps = [];

  // Hoja izquierda
  steps.push(() => {
    ctx.beginPath();
    ctx.fillStyle = "#00FF00";
    ctx.moveTo(0, 150);
    ctx.bezierCurveTo(-120, 60, -90, -80, 0, -160);
    ctx.lineTo(0, 150);
    ctx.fill();
  });

  // Hoja derecha
  steps.push(() => {
    ctx.beginPath();
    ctx.moveTo(0, 150);
    ctx.bezierCurveTo(120, 60, 90, -80, 0, -160);
    ctx.lineTo(0, 150);
    ctx.fill();
  });

  // Tallo
  steps.push(() => {
    ctx.beginPath();
    ctx.fillStyle = "#00AA00";
    ctx.moveTo(-6, -160);
    ctx.lineTo(-6, -320);
    ctx.lineTo(6, -320);
    ctx.lineTo(6, -160);
    ctx.closePath();
    ctx.fill();
  });

  // Pétalo izquierdo
  steps.push(() => {
    ctx.beginPath();
    ctx.fillStyle = "#FF00FF";
    ctx.moveTo(0, -320);
    ctx.bezierCurveTo(-30, -370, -50, -430, 0, -480);
    ctx.bezierCurveTo(-20, -440, -10, -380, 0, -320);
    ctx.fill();
  });

  // Pétalo derecho
  steps.push(() => {
    ctx.beginPath();
    ctx.moveTo(0, -320);
    ctx.bezierCurveTo(30, -370, 50, -430, 0, -480);
    ctx.bezierCurveTo(20, -440, 10, -380, 0, -320);
    ctx.fill();
  });

  // Pétalo central
  steps.push(() => {
    ctx.beginPath();
    ctx.moveTo(0, -320);
    ctx.bezierCurveTo(-10, -400, -10, -440, 0, -470);
    ctx.bezierCurveTo(10, -440, 10, -400, 0, -320);
    ctx.fill();
  });

  animateSteps(steps, 400);
}

drawTulip();
