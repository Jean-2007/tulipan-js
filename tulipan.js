const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let animationId;
let time = 0;
let isAnimating = false;

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animateSteps(steps, delay = 300) {
  let i = 0;
  function next() {
    if (i < steps.length) {
      steps[i++]();
      setTimeout(next, delay);
    }
  }
  next();
}

function drawTulipFlower(x, y, size = 1, rotation = 0, windOffset = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation + windOffset);
  ctx.scale(size, size);
  
  // Pétalo izquierdo
  ctx.fillStyle = '#d63384';
  ctx.beginPath();
  ctx.moveTo(-25, 0);
  ctx.bezierCurveTo(-35, -15, -35, -40, -25, -55);
  ctx.bezierCurveTo(-15, -65, -5, -65, 0, -55);
  ctx.bezierCurveTo(-5, -35, -10, -15, -25, 0);
  ctx.fill();
  
  // Sombra interna pétalo izquierdo
  ctx.fillStyle = '#b02a5b';
  ctx.beginPath();
  ctx.moveTo(-25, 0);
  ctx.bezierCurveTo(-30, -10, -30, -25, -25, -35);
  ctx.bezierCurveTo(-20, -40, -15, -40, -12, -35);
  ctx.bezierCurveTo(-15, -25, -18, -10, -25, 0);
  ctx.fill();
  
  // Pétalo central
  ctx.fillStyle = '#e83e8c';
  ctx.beginPath();
  ctx.moveTo(0, -5);
  ctx.bezierCurveTo(-8, -20, -8, -50, 0, -70);
  ctx.bezierCurveTo(8, -50, 8, -20, 0, -5);
  ctx.fill();
  
  // Pétalo derecho
  ctx.fillStyle = '#d63384';
  ctx.beginPath();
  ctx.moveTo(25, 0);
  ctx.bezierCurveTo(35, -15, 35, -40, 25, -55);
  ctx.bezierCurveTo(15, -65, 5, -65, 0, -55);
  ctx.bezierCurveTo(5, -35, 10, -15, 25, 0);
  ctx.fill();
  
  // Sombra interna pétalo derecho
  ctx.fillStyle = '#b02a5b';
  ctx.beginPath();
  ctx.moveTo(25, 0);
  ctx.bezierCurveTo(30, -10, 30, -25, 25, -35);
  ctx.bezierCurveTo(20, -40, 15, -40, 12, -35);
  ctx.bezierCurveTo(15, -25, 18, -10, 25, 0);
  ctx.fill();
  
  ctx.restore();
}

function drawLeaf(x, y, width, height, rotation, color, windOffset = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation + windOffset);
  
  // Hoja principal
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-width/3, -height/4, -width/2, -height/2, -width/4, -height);
  ctx.bezierCurveTo(0, -height + 10, width/4, -height);
  ctx.bezierCurveTo(width/2, -height/2, width/3, -height/4, 0, 0);
  ctx.fill();
  
  // Nervadura central
  ctx.strokeStyle = color === '#7fb069' ? '#6a994e' : '#7fb069';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -height/3, 0, -height/2, 0, -height + 15);
  ctx.stroke();
  
  ctx.restore();
}

function drawStem(startX, startY, endX, endY, windOffset = 0) {
  ctx.save();
  ctx.translate(0, windOffset * 2);
  ctx.fillStyle = '#588157';
  ctx.beginPath();
  ctx.moveTo(startX - 3, startY);
  ctx.lineTo(endX - 2, endY);
  ctx.lineTo(endX + 4, endY);
  ctx.lineTo(startX + 3, startY);
  ctx.fill();
  ctx.restore();
}

function drawTulipanes() {
  clearCanvas();
  
  const steps = [];
  
  // Hojas de fondo (más claras)
  steps.push(() => {
    drawLeaf(150, 600, 40, 200, -0.3, '#a3b18a');
    drawLeaf(450, 580, 45, 220, 0.4, '#a3b18a');
    drawLeaf(300, 620, 35, 180, -0.1, '#a3b18a');
  });
  
  // Hojas intermedias
  steps.push(() => {
    drawLeaf(200, 650, 50, 250, -0.2, '#7fb069');
    drawLeaf(400, 640, 48, 240, 0.25, '#7fb069');
    drawLeaf(320, 670, 42, 200, 0.1, '#588157');
  });
  
  // Tallos
  steps.push(() => {
    drawStem(152, 650, 155, 350);
    drawStem(302, 670, 305, 320);
    drawStem(452, 640, 455, 380);
  });
  
  // Hojas frontales
  steps.push(() => {
    drawLeaf(100, 600, 55, 280, -0.4, '#7fb069');
    drawLeaf(500, 590, 52, 270, 0.5, '#588157');
    drawLeaf(250, 680, 48, 230, -0.15, '#7fb069');
    drawLeaf(380, 685, 45, 220, 0.2, '#588157');
  });
  
  // Flores principales
  steps.push(() => {
    drawTulipFlower(155, 350, 0.9, -0.1);
  });
  
  steps.push(() => {
    drawTulipFlower(305, 320, 1.0, 0.05);
  });
  
  steps.push(() => {
    drawTulipFlower(455, 380, 0.95, 0.1);
  });
  
  // Flores adicionales más pequeñas
  steps.push(() => {
    drawTulipFlower(250, 450, 0.7, -0.2);
    drawTulipFlower(380, 480, 0.75, 0.15);
  });
  
  animateSteps(steps, 400);
}

function animateWind() {
  if (!isAnimating) return;
  
  time += 0.02;
  clearCanvas();
  
  // Calcular diferentes ondas de viento para cada elemento
  const wind1 = Math.sin(time) * 0.015;
  const wind2 = Math.sin(time + 0.5) * 0.012;
  const wind3 = Math.sin(time + 1.0) * 0.018;
  const wind4 = Math.sin(time + 1.5) * 0.010;
  const wind5 = Math.sin(time + 2.0) * 0.014;
  
  // Hojas de fondo (movimiento sutil)
  drawLeaf(150, 600, 40, 200, -0.3, '#a3b18a', wind1 * 0.5);
  drawLeaf(450, 580, 45, 220, 0.4, '#a3b18a', wind2 * 0.5);
  drawLeaf(300, 620, 35, 180, -0.1, '#a3b18a', wind3 * 0.5);
  
  // Hojas intermedias
  drawLeaf(200, 650, 50, 250, -0.2, '#7fb069', wind1 * 0.6);
  drawLeaf(400, 640, 48, 240, 0.25, '#7fb069', wind2 * 0.6);
  drawLeaf(320, 670, 42, 200, 0.1, '#588157', wind3 * 0.6);
  
  // Tallos con movimiento
  drawStem(152, 650, 155, 350, wind1);
  drawStem(302, 670, 305, 320, wind2);
  drawStem(452, 640, 455, 380, wind3);
  
  // Hojas frontales (más movimiento)
  drawLeaf(100, 600, 55, 280, -0.4, '#7fb069', wind1 * 0.8);
  drawLeaf(500, 590, 52, 270, 0.5, '#588157', wind2 * 0.8);
  drawLeaf(250, 680, 48, 230, -0.15, '#7fb069', wind3 * 0.8);
  drawLeaf(380, 685, 45, 220, 0.2, '#588157', wind4 * 0.8);
  
  // Flores (movimiento más pronunciado)
  drawTulipFlower(155, 350, 0.9, -0.1, wind1);
  drawTulipFlower(305, 320, 1.0, 0.05, wind2);
  drawTulipFlower(455, 380, 0.95, 0.1, wind3);
  drawTulipFlower(250, 450, 0.7, -0.2, wind4);
  drawTulipFlower(380, 480, 0.75, 0.15, wind5);
  
  animationId = requestAnimationFrame(animateWind);
}

function startWindAnimation() {
  if (isAnimating) return;
  isAnimating = true;
  animateWind();
}

function stopWindAnimation() {
  isAnimating = false;
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
}

// Dibujar automáticamente al cargar
window.addEventListener('load', () => {
  drawTulipanes();
  
  // Iniciar la animación de brisa después de un momento
  setTimeout(() => {
    startWindAnimation();
  }, 2500);
});
