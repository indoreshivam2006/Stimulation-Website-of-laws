// Snell's Law Animation - Modern Implementation
const canvas = document.getElementById('canvas');
const angleSlider = document.getElementById('angleSlider');
const n1Slider = document.getElementById('n1Slider');
const n2Slider = document.getElementById('n2Slider');
const angleValue = document.getElementById('angleValue');
const n1Value = document.getElementById('n1Value');
const n2Value = document.getElementById('n2Value');
const refractionAngle = document.getElementById('refractionAngle');
const criticalAngle = document.getElementById('criticalAngle');
const totalReflection = document.getElementById('totalReflection');

let n1 = 1.0;
let n2 = 1.5;
let theta1 = 30;

const svg = d3.select('#canvas');
const width = 700;
const height = 500;

// Clear any existing content
svg.selectAll('*').remove();

// Create main groups
const mainGroup = svg.append('g');

// Draw interface (horizontal line separating media)
mainGroup.append('line')
  .attr('x1', 0)
  .attr('y1', height / 2)
  .attr('x2', width)
  .attr('y2', height / 2)
  .attr('stroke', '#fff')
  .attr('stroke-width', 2)
  .attr('stroke-dasharray', '10,5');

// Add medium labels
mainGroup.append('text')
  .attr('x', 20)
  .attr('y', 30)
  .attr('fill', '#fff')
  .attr('font-size', '16px')
  .attr('id', 'n1Label')
  .text('Medium 1 (n₁ = 1.0)');

mainGroup.append('text')
  .attr('x', 20)
  .attr('y', height - 20)
  .attr('fill', '#fff')
  .attr('font-size', '16px')
  .attr('id', 'n2Label')
  .text('Medium 2 (n₂ = 1.5)');

// Draw normal line (perpendicular to interface)
mainGroup.append('line')
  .attr('x1', width / 2)
  .attr('y1', 0)
  .attr('x2', width / 2)
  .attr('y2', height)
  .attr('stroke', '#888')
  .attr('stroke-width', 1)
  .attr('stroke-dasharray', '5,5');

// Create incident ray
const incidentRay = mainGroup.append('line')
  .attr('id', 'incidentRay')
  .attr('stroke', '#ff4444')
  .attr('stroke-width', 3)
  .attr('marker-end', 'url(#arrowRed)');

// Create reflected ray
const reflectedRay = mainGroup.append('line')
  .attr('id', 'reflectedRay')
  .attr('stroke', '#ffaa00')
  .attr('stroke-width', 3)
  .attr('marker-end', 'url(#arrowOrange)');

// Create refracted ray
const refractedRay = mainGroup.append('line')
  .attr('id', 'refractedRay')
  .attr('stroke', '#44ff44')
  .attr('stroke-width', 3)
  .attr('marker-end', 'url(#arrowGreen)');

// Create arrow markers
const defs = svg.append('defs');

['Red', 'Orange', 'Green'].forEach((color, i) => {
  const colors = ['#ff4444', '#ffaa00', '#44ff44'];
  defs.append('marker')
    .attr('id', `arrow${color}`)
    .attr('markerWidth', 10)
    .attr('markerHeight', 10)
    .attr('refX', 8)
    .attr('refY', 3)
    .attr('orient', 'auto')
    .append('polygon')
    .attr('points', '0 0, 10 3, 0 6')
    .attr('fill', colors[i]);
});

// Event listeners
angleSlider.addEventListener('input', (e) => {
  theta1 = parseFloat(e.target.value);
  angleValue.textContent = theta1;
  updateVisualization();
});

n1Slider.addEventListener('input', (e) => {
  n1 = parseFloat(e.target.value);
  n1Value.textContent = n1.toFixed(1);
  updateVisualization();
});

n2Slider.addEventListener('input', (e) => {
  n2 = parseFloat(e.target.value);
  n2Value.textContent = n2.toFixed(1);
  updateVisualization();
});

function updateVisualization() {
  const theta1Rad = (theta1 * Math.PI) / 180;
  const centerX = width / 2;
  const centerY = height / 2;
  const rayLength = 200;

  // Update medium labels
  d3.select('#n1Label').text(`Medium 1 (n₁ = ${n1.toFixed(1)})`);
  d3.select('#n2Label').text(`Medium 2 (n₂ = ${n2.toFixed(1)})`);

  // Calculate incident ray endpoint
  const incidentX = centerX - rayLength * Math.sin(theta1Rad);
  const incidentY = centerY - rayLength * Math.cos(theta1Rad);

  // Draw incident ray
  incidentRay
    .attr('x1', incidentX)
    .attr('y1', incidentY)
    .attr('x2', centerX)
    .attr('y2', centerY);

  // Calculate reflected ray (same angle, opposite side)
  const reflectedX = centerX + rayLength * Math.sin(theta1Rad);
  const reflectedY = centerY - rayLength * Math.cos(theta1Rad);

  // Draw reflected ray
  reflectedRay
    .attr('x1', centerX)
    .attr('y1', centerY)
    .attr('x2', reflectedX)
    .attr('y2', reflectedY);

  // Calculate critical angle
  const criticalAngleRad = n1 < n2 ? Math.PI / 2 : Math.asin(n2 / n1);
  const criticalAngleDeg = (criticalAngleRad * 180) / Math.PI;

  if (n1 >= n2) {
    criticalAngle.textContent = `${criticalAngleDeg.toFixed(2)}°`;
  } else {
    criticalAngle.textContent = 'N/A (n₁ < n₂)';
  }

  // Check for total internal reflection
  if (n1 > n2 && theta1 > criticalAngleDeg) {
    // Total internal reflection
    refractedRay.attr('opacity', 0);
    reflectedRay.attr('stroke-width', 4);
    totalReflection.style.display = 'block';
    refractionAngle.textContent = 'N/A';
  } else {
    // Calculate refraction using Snell's Law: n1 * sin(theta1) = n2 * sin(theta2)
    const sinTheta2 = (n1 / n2) * Math.sin(theta1Rad);

    if (sinTheta2 <= 1) {
      const theta2Rad = Math.asin(sinTheta2);
      const theta2Deg = (theta2Rad * 180) / Math.PI;

      // Draw refracted ray
      const refractedX = centerX + rayLength * Math.sin(theta2Rad);
      const refractedY = centerY + rayLength * Math.cos(theta2Rad);

      refractedRay
        .attr('x1', centerX)
        .attr('y1', centerY)
        .attr('x2', refractedX)
        .attr('y2', refractedY)
        .attr('opacity', 1);

      reflectedRay.attr('stroke-width', 2);
      totalReflection.style.display = 'none';
      refractionAngle.textContent = `${theta2Deg.toFixed(2)}°`;
    } else {
      // Should not happen, but handle edge case
      refractedRay.attr('opacity', 0);
      totalReflection.style.display = 'block';
      refractionAngle.textContent = 'N/A';
    }
  }
}

// Initial visualization
updateVisualization();
