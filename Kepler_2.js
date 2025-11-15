const canvas = document.getElementById("orbitCanvas");
const ctx = canvas.getContext("2d");
const speedSlider = document.getElementById("speed");
const eccentricitySlider = document.getElementById("eccentricity");
const angularSweepDisplay = document.getElementById("angularSweep");
const areaCoveredDisplay = document.getElementById("areaCovered");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

// Canvas size for orbit visualization
canvas.width = 600;
canvas.height = 600;

// Parameters for the orbit
let semiMajorAxis = 250; // Semi-major axis of the ellipse
let eccentricity = parseFloat(eccentricitySlider.value); // Eccentricity
let semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity); // Semi-minor axis
let planetAngle = 0;
let baseSpeed = parseFloat(speedSlider.value); // Base orbital speed
let areaCovered = 0; // Swept area
let isPaused = false; // Animation pause state

// Sun position (focus of the ellipse, on the right side)
const sunOffset = eccentricity * semiMajorAxis;
const sunX = canvas.width / 2 + sunOffset;
const sunY = canvas.height / 2;

// Initialize area graph (Bar Chart)
const areaGraphCtx = document.getElementById("areaGraph").getContext("2d");
const areaChart = new Chart(areaGraphCtx, {
  type: "bar",
  data: {
    labels: ["Division 1", "Division 2", "Division 3", "Division 4"],
    datasets: [
      {
        label: "Swept Area (sq. units)",
        data: [0, 0, 0, 0],
        backgroundColor: "#33C1FF",
        borderColor: "#33C1FF",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        title: { text: "Orbit Divisions", display: true },
      },
      y: {
        title: { text: "Area (sq. units)", display: true },
        suggestedMin: 0,
      },
    },
  },
});

// Calculate the planet's position on the elliptical orbit
// Calculate the planet's position on the elliptical orbit (around the sun at one focus)
function getPlanetPosition(angle) {
    // Parametric equations for an ellipse, adjusted for the sun at one focus
    const x = semiMajorAxis * Math.cos(angle) - sunOffset; // X position relative to the sun
    const y = semiMinorAxis * Math.sin(angle); // Y position
    return {
        x: x + canvas.width / 2 + sunOffset, // Shift to account for canvas position
        y: y + canvas.height / 2,           // Center on canvas height
    };
}


// Calculate speed based on Kepler's second law
function calculateSpeed(angle) {
  const planetPos = getPlanetPosition(angle);
  const distanceToSun = Math.sqrt(
    Math.pow(planetPos.x - sunX, 2) + Math.pow(planetPos.y - sunY, 2)
  );
  return baseSpeed * (semiMajorAxis / distanceToSun); // Speed inversely proportional to distance
}

// Update the graph with the latest swept area data
function updateGraph() {
  const divisionIndex = Math.floor((planetAngle / (2 * Math.PI)) * 4);
  if (divisionIndex >= 0 && divisionIndex < 4) {
    areaChart.data.datasets[0].data[divisionIndex] = areaCovered.toFixed(2);
    areaChart.update();
  }
}

// Animation loop
function animate() {
  if (!isPaused) {
    const speed = calculateSpeed(planetAngle); // Adjust speed dynamically
    const angleDelta = speed * (Math.PI / 180); // Convert speed to radians
    planetAngle += angleDelta;

    if (planetAngle >= 2 * Math.PI) {
      planetAngle = 0; // Reset to start of orbit
      areaCovered = 0; // Reset area at the start of a full revolution
      areaChart.data.datasets[0].data = [0, 0, 0, 0];
      areaChart.update();
    }

    // Calculate the area swept (Kepler's 2nd Law)
    const areaDelta = 0.5 * semiMajorAxis * semiMinorAxis * angleDelta;
    areaCovered += areaDelta;

    // Update the graph with the new area covered
    updateGraph();

    // Update real-time data displays
    angularSweepDisplay.textContent = ((planetAngle * 180) / Math.PI).toFixed(2); // Convert to degrees
    areaCoveredDisplay.textContent = areaCovered.toFixed(2);

    // Draw the scene
    drawOrbit();
  }

  // Request the next frame
  requestAnimationFrame(animate);
}

// Event listeners for interactive controls
speedSlider.addEventListener("input", () => {
  baseSpeed = parseFloat(speedSlider.value);
});

eccentricitySlider.addEventListener("input", () => {
  eccentricity = parseFloat(eccentricitySlider.value);
  semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity);
});

pauseButton.addEventListener("click", () => {
  isPaused = !isPaused;
  pauseButton.textContent = isPaused ? "Resume" : "Pause";
});

resetButton.addEventListener("click", () => {
  planetAngle = 0;
  areaCovered = 0;
  isPaused = true;
  areaChart.data.datasets[0].data = [0, 0, 0, 0];
  areaChart.update();
  angularSweepDisplay.textContent = "0";
  areaCoveredDisplay.textContent = "0";
  pauseButton.textContent = "Resume";
  drawOrbit();
});

// Draw the orbit on canvas
function drawOrbit() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the star (central body)
  ctx.beginPath();
  ctx.arc(sunX, sunY, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFEB3B";
  ctx.fill();

  // Draw the orbit (ellipse)
  ctx.beginPath();
  ctx.ellipse(
    canvas.width / 2,
    canvas.height / 2,
    semiMajorAxis,
    semiMinorAxis,
    0,
    0,
    2 * Math.PI
  );
  ctx.strokeStyle = "#33C1FF";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Get planet position based on current angle
  const planetPos = getPlanetPosition(planetAngle);

  // Draw the planet
  ctx.beginPath();
  ctx.arc(planetPos.x, planetPos.y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "#FF5733";
  ctx.fill();

  // Draw the line from the sun to the planet (radius vector)
  ctx.beginPath();
  ctx.moveTo(sunX, sunY);
  ctx.lineTo(planetPos.x, planetPos.y);
  ctx.strokeStyle = "#33C1FF";
  ctx.lineWidth = 2;
  ctx.stroke();
}

// Start the animation
animate();
