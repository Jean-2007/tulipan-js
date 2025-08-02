const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.translate(canvas.width / 2, canvas.height * 0.75);
ctx.lineWidth = 2;

function animateSteps(steps, delay = 450) {
  let i = 0;
  function next() {
    if (i < steps.length) {
      steps[i++]();
      setTimeout(next, delay);
    }
  }
  next();
}

function drawTulipan() {
  const steps = [];

  // Pétalos superiores (simplificados)
  steps.push(() => {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "#8B0000";
    ctx.beginPath();
    ctx.moveTo(24, -500);
    ctx.bezierCurveTo(0, -540, -30, -540, -24, -500);
    ctx.bezierCurveTo(-10, -480, 10, -480, 24, -500);
    ctx.fill();
  });

  steps.push(() => {
    ctx.beginPath();
    ctx.moveTo(0, -500);
    ctx.bezierCurveTo(-20, -550, -60, -520, -40, -470);
    ctx.bezierCurveTo(-10, -460, 10, -470, 0, -500);
    ctx.fill();
  });

  steps.push(() => {
    ctx.beginPath();
    ctx.moveTo(-48, -470);
    ctx.bezierCurveTo(-90, -420, -60, -380, -20, -400);
    ctx.bezierCurveTo(-10, -430, -30, -460, -48, -470);
    ctx.fill();
  });

  // Cáliz central
  steps.push(() => {
    ctx.beginPath();
    ctx.moveTo(12, -390);
    ctx.bezierCurveTo(40, -410, 40, -460, 10, -480);
    ctx.bezierCurveTo(-10, -470, -10, -430, 12, -390);
    ctx.fill();
  });

  // Flor inferior izquierda
  steps.push(() => {
    ctx.beginPath();
    ctx.moveTo(-53, -300);
    ctx.bezierCurveTo(-100, -250, -90, -200, -40, -220);
    ctx.bezierCurveTo(-30, -250, -30, -280, -53, -300);
    ctx.fill();
  });

  // Flor inferior derecha
  steps.push(() => {
    ctx.beginPath();
    ctx.moveTo(0, -300);
    ctx.bezierCurveTo(50, -250, 70, -200, 20, -180);
    ctx.bezierCurveTo(0, -200, -10, -250, 0, -300);
    ctx.fill();
  });

  // Hoja izquierda (verde)
  steps.push(() => {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(15, -5);
    ctx.bezierCurveTo(-20, -80, -80, -120, -60, -200);
    ctx.bezierCurveTo(-40, -160, -10, -100, 15, -5);
    ctx.fill();
  });

  // Hoja derecha
  steps.push(() => {
    ctx.beginPath();
    ctx.moveTo(10, -30);
    ctx.bezierCurveTo(60, -90, 80, -160, 10, -210);
    ctx.bezierCurveTo(5, -180, 5, -100, 10, -30);
    ctx.fill();
  });

  // Base y tallo
  steps.push(() => {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-5, -320);
    ctx.lineTo(5, -320);
    ctx.lineTo(0, 0);
    ctx.fill();
  });

  animateSteps(steps);
}

drawTulipan();
