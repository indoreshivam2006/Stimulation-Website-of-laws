const canvas = document.getElementById('keplerCanvas');
const ctx = canvas.getContext('2d');

const semiMajorInput = document.getElementById('semiMajor');
const eccentricityInput = document.getElementById('eccentricity');
const earthSpeedInput = document.getElementById('earthSpeed');
const moonSpeedInput = document.getElementById('moonSpeed');

const semiMajorValue = document.getElementById('semiMajorValue');
const eccentricityValue = document.getElementById('eccentricityValue');
const earthSpeedValue = document.getElementById('earthSpeedValue');
const moonSpeedValue = document.getElementById('moonSpeedValue');

const distanceOutput = document.getElementById('distanceOutput');
const distanceFromSun = document.getElementById('distanceFromSun');

let time = 0; // Time in days
let interval = null;

const timeElapsed = document.getElementById('timeElapsed');
const startStopwatch = document.getElementById('startStopwatch');
const resetStopwatch = document.getElementById('resetStopwatch');

// Update Stopwatch Display
function updateStopwatchDisplay() {
    const years = Math.floor(time / 365); // Convert days to years (integer part)
    const days = time % 365; // Remaining days after converting to years
    timeElapsed.textContent = `${years} years, ${days} days`;
}

// Start/Pause Stopwatch
startStopwatch.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
        startStopwatch.textContent = 'Start';
    } else {
        interval = setInterval(() => {
            time += 1; // Increment time by 1 day every second
            updateStopwatchDisplay(); // Update the display
        }, 1000);
        startStopwatch.textContent = 'Pause';
    }
});

// Reset Stopwatch
resetStopwatch.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    time = 0;
    updateStopwatchDisplay(); // Reset display to 0 years, 0 days
    startStopwatch.textContent = 'Start';
});

semiMajorInput.addEventListener('input', () => {
    semiMajorValue.textContent = semiMajorInput.value;
    updateOrbit();
});

eccentricityInput.addEventListener('input', () => {
    eccentricityValue.textContent = eccentricityInput.value;
    updateOrbit();
});

earthSpeedInput.addEventListener('input', () => {
    earthSpeedValue.textContent = earthSpeedInput.value;
    updateSpeed();
});

moonSpeedInput.addEventListener('input', () => {
    moonSpeedValue.textContent = moonSpeedInput.value;
    updateSpeed();
});

let orbit = {
    semiMajor: 200,
    eccentricity: 0.1,
    angleEarth: 0,
    angleMoon: 0,
    earthSpeed: 1,
    moonSpeed: 1
};

function calculateSemiMinorAxis(a, e) {
    return a * Math.sqrt(1 - e * e);
}

function drawSun() {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
}

function drawOrbit(semiMajor, semiMinor) {
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2, canvas.height / 2, semiMajor, semiMinor, 0, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawMoonAndEarth() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const semiMinor = calculateSemiMinorAxis(orbit.semiMajor, orbit.eccentricity);

    const earthX = centerX + orbit.semiMajor * Math.cos(orbit.angleEarth);
    const earthY = centerY + semiMinor * Math.sin(orbit.angleEarth);

    ctx.beginPath();
    ctx.arc(earthX, earthY, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();

    const moonX = earthX + 40 * Math.cos(orbit.angleMoon);
    const moonY = earthY + 40 * Math.sin(orbit.angleMoon);

    ctx.beginPath();
    ctx.arc(moonX, moonY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'gray';
    ctx.fill();

    const distance = Math.sqrt((earthX - centerX) ** 2 + (earthY - centerY) ** 2).toFixed(2);
    distanceOutput.textContent = `Distance: ${distance} km`;
    distanceFromSun.textContent = `${distance} km`;
}

function addGrid() {
    const gridSpacing = 50;
    ctx.strokeStyle = "#444";
    ctx.lineWidth = 0.5;

    for (let x = 0; x <= canvas.width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    for (let y = 0; y <= canvas.height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

function updateOrbit() {
    orbit.semiMajor = parseFloat(semiMajorInput.value);
    orbit.eccentricity = parseFloat(eccentricityInput.value);
    redraw();
}

function updateSpeed() {
    orbit.earthSpeed = parseFloat(earthSpeedInput.value);
    orbit.moonSpeed = parseFloat(moonSpeedInput.value);
}

function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    addGrid();
    drawSun();
    const semiMinor = calculateSemiMinorAxis(orbit.semiMajor, orbit.eccentricity);
    drawOrbit(orbit.semiMajor, semiMinor);
    drawMoonAndEarth();
}

function updateSimulation() {
    orbit.angleEarth += 0.01 * orbit.earthSpeed;
    orbit.angleMoon += 0.02 * orbit.moonSpeed;
    redraw();
}

function startSimulation() {
    function animate() {
        updateSimulation();
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

function calculateYears() {
    const earthOrbitTime = 365.25 / orbit.earthSpeed; 
    const years = (time / 60 / 60 / 24 / earthOrbitTime).toFixed(4);
    alert(`Elapsed time in simulation: ${years} Earth years`);
}

document.getElementById('stopwatch').insertAdjacentHTML(
    'beforeend',
    `<br><button id="calculateYears">Calculate Years</button>`
);

document.getElementById('calculateYears').addEventListener('click', calculateYears);
startSimulation();
