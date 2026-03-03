function calculate() {
    let angle = Number(document.getElementById("angle").value);
    let length = Number(document.getElementById("length").value) / 100; // Convert cm to meters

    if (angle >= 90) angle = 89.99;

    const Cou = 8.99e9; // Coulomb's constant
    const rad = angle * (Math.PI / 180);

    const Fg = (9.80 * 0.00035); // Gravity force
    const Fe = Math.tan(rad) * Fg; // Electric force
    const d = Math.sin(rad) * length;
    const twoD = d * 2;
    const q = Math.sqrt((Fe * twoD * twoD) / Cou);
    const num = q * 6.2e18;

    // Format values for better readability
    updateWithAnimation("gravity", formatForce(Fg));
    updateWithAnimation("e", formatForce(Fe));
    updateWithAnimation("D", formatDistance(d));
    updateWithAnimation("2D", formatDistance(twoD));
    updateWithAnimation("charge", formatCharge(q));
    updateWithAnimation("number", formatElectrons(num));

    updateGraph(angle, Fe);
}

function updateWithAnimation(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.style.opacity = "0";
    setTimeout(() => {
        element.innerHTML = newValue;
        element.style.opacity = "1";
    }, 300);
}

// Convert force to readable format
function formatForce(value) {
    return (value * 1000).toFixed(2) + " mN";
}

// Convert distance to cm
function formatDistance(value) {
    return (value * 100).toFixed(2) + " cm";
}

// Convert charge to nC
function formatCharge(value) {
    return (value * 1e9).toFixed(2) + " nC";
}

// Convert number of electrons to billions
function formatElectrons(value) {
    return (value / 1e9).toFixed(2) + " billion e⁻";
}

// Chart.js graph
const ctx = document.getElementById('forceChart').getContext('2d');
const forceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Electric Force (mN)',
            data: [],
            borderColor: '#007BFF',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: true
        }]
    },
    options: { responsive: true, animation: { duration: 800, easing: 'easeOutQuad' } }
});

function updateGraph(angle, Fe) {
    if (forceChart.data.labels.length >= 10) {
        forceChart.data.labels.shift();
        forceChart.data.datasets[0].data.shift();
    }
    forceChart.data.labels.push(angle + "°");
    forceChart.data.datasets[0].data.push(Fe * 1000); // Convert to mN
    forceChart.update();
}

function updateAngleValue(value) {
    document.getElementById("angleValue").innerText = value + "°";
}

function updateLengthValue(value) {
    document.getElementById("lengthValue").innerText = value + "cm";
}
function createBalloons() {
    for (let i = 0; i < 5; i++) { // Create multiple balloons
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");

        // Random positioning
        balloon.style.left = Math.random() * 80 + "vw";
        balloon.style.animationDuration = (Math.random() * 2 + 4) + "s"; // Random float speed

        document.body.appendChild(balloon);

        // Remove balloon after animation
        setTimeout(() => {
            balloon.remove();
        }, 5000);
    }
}


// Function to generate random colors
function getRandomColor() {
    const colors = ["#ff0000", "#ff6600", "#ffcc00", "#00ccff", "#9900ff"];
    return colors[Math.floor(Math.random() * colors.length)];
}
function updateLengthValue(value) {
    document.getElementById("lengthValue").innerText = `${value} cm`; // Ensure "cm" is displayed
}
