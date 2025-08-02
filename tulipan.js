
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.lineWidth = 3;

function animateSteps(steps, delay = 350) {
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

  // Paso 1: hoja izquierda
  steps.push(() => {
    ctx.beginPath();
    ctx.fillStyle = "#00FF00";
    ctx.moveTo(0, 250);
    ctx.bezierCurveTo(-150, 100, -100, -100, 0, -200);
    ctx.lineTo(0, 250);
    ctx.fill();
  });

  // Paso 2: hoja derecha
  steps.push(() => {
    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.bezierCurveTo(150, 100, 100, -100, 0, -200);
    ctx.lineTo(0, 250);
    ctx.fill();
  });

  // Paso 3: tallo
  steps.push(() => {
    ctx.beginPath();
    ctx.fillStyle = "#00CC00";
    ctx.moveTo(-7, -200);
    ctx.lineTo(-7, -400);
    ctx.lineTo(7, -400);
    ctx.lineTo(7, -200);
    ctx.lineTo(0, -180);
    ctx.closePath();
    ctx.fill();
  });

  // Paso 4: pétalo izquierdo
  steps.push(() => {
    ctx.beginPath();
    ctx.fillStyle = "#FF00FF";
    ctx.moveTo(0, -400);
    ctx.bezierCurveTo(-40, -460, -60, -520, 0, -560);
    ctx.bezierCurveTo(-20, -500, -10, -440, 0, -400);
    ctx.fill();
  });

  // Paso 5: pétalo derecho
  steps.push(() => {
    ctx.beginPath();
    ctx.moveTo(0, -400);
    ctx.bezierCurveTo(40, -460, 60, -520, 0, -560);
    ctx.bezierCurveTo(20, -500, 10, -440, 0, -400);
    ctx.fill();
  });

  // Paso 6: pétalo central
  steps.push(() => {
    ctx.beginPath();
    ctx.moveTo(0, -400);
    ctx.bezierCurveTo(-10, -480, -10, -520, 0, -550);
    ctx.bezierCurveTo(10, -520, 10, -480, 0, -400);
    ctx.fill();
  });

  animateSteps(steps, 400);
}

drawTulip();
