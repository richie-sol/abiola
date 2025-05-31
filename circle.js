const circle = document.getElementById('circle');
    
let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // Smooth interpolation (lerp)
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  circle.style.left = `${currentX}px`;
  circle.style.top = `${currentY}px`;

  requestAnimationFrame(animate);
}

animate(); // Start animation loop

if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  // Hide the circle on touch devices
  document.getElementById('circle').style.display = 'none';
}