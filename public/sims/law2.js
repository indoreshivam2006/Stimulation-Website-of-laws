const { Engine, Render, Runner, Bodies, World, Body, Events } = Matter;

// Create engine and world with gravity
const engine = Engine.create();
engine.gravity.y = 1; // Normal gravity for realistic demonstration
const { world } = engine;

// Renderer setup
const width = window.innerWidth;
const height = window.innerHeight;
const render = Render.create({
    element: document.body,
    engine,
    options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
        pixelRatio: window.devicePixelRatio
    }
});

Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);

// Create static ground
const groundY = height - 80;
const ground = Bodies.rectangle(width / 2, height - 20, width, 80, {
    isStatic: true,
    render: {
        fillStyle: '#1e293b',
        strokeStyle: '#6366f1',
        lineWidth: 3
    }
});

const leftWall = Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true, render: { visible: false } });
const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true, render: { visible: false } });

World.add(world, [ground, leftWall, rightWall]);

// Ball parameters
let mass1 = 1;
let mass2 = 3;
let appliedForce = 0.15;

// Create balls with different masses
let ball1, ball2;
let initialX1, initialX2;

function createBalls() {
    // Remove existing balls
    if (ball1) World.remove(world, ball1);
    if (ball2) World.remove(world, ball2);

    // Size proportional to mass (radius ∝ √mass for visual clarity)
    const radius1 = Math.sqrt(mass1) * 30;
    const radius2 = Math.sqrt(mass2) * 30;

    initialX1 = width * 0.25;
    initialX2 = width * 0.65;

    ball1 = Bodies.circle(initialX1, groundY - radius1 - 5, radius1, {
        mass: mass1,
        restitution: 0.6,
        friction: 0.05,
        frictionAir: 0.01,
        render: {
            fillStyle: '#3b82f6',
            strokeStyle: '#ffffff',
            lineWidth: 3
        },
        label: 'ball1'
    });

    ball2 = Bodies.circle(initialX2, groundY - radius2 - 5, radius2, {
        mass: mass2,
        restitution: 0.6,
        friction: 0.05,
        frictionAir: 0.01,
        render: {
            fillStyle: '#ef4444',
            strokeStyle: '#ffffff',
            lineWidth: 3
        },
        label: 'ball2'
    });

    World.add(world, [ball1, ball2]);
}

createBalls();

// Track data for visualization
let forceApplied = false;
let appliedTime = 0;

// Apply same force to both balls - demonstrate F = ma
function applyForceToBalls() {
    // Reset balls to starting position
    Body.setPosition(ball1, { x: initialX1, y: groundY - ball1.circleRadius - 5 });
    Body.setPosition(ball2, { x: initialX2, y: groundY - ball2.circleRadius - 5 });
    Body.setVelocity(ball1, { x: 0, y: 0 });
    Body.setVelocity(ball2, { x: 0, y: 0 });
    Body.setAngularVelocity(ball1, 0);
    Body.setAngularVelocity(ball2, 0);

    // Apply SAME force to both balls
    // F = ma, so a = F/m
    // Same F, different m → different acceleration!
    Body.applyForce(ball1, ball1.position, { x: appliedForce, y: 0 });
    Body.applyForce(ball2, ball2.position, { x: appliedForce, y: 0 });

    forceApplied = true;
    appliedTime = Date.now();

    setTimeout(() => {
        forceApplied = false;
    }, 1000);
}

// UI Controls
document.getElementById('mass1Slider').addEventListener('input', (e) => {
    mass1 = parseFloat(e.target.value);
    document.getElementById('mass1Value').textContent = mass1;
    createBalls();
});

document.getElementById('mass2Slider').addEventListener('input', (e) => {
    mass2 = parseFloat(e.target.value);
    document.getElementById('mass2Value').textContent = mass2;
    createBalls();
});

document.getElementById('forceSlider').addEventListener('input', (e) => {
    appliedForce = parseFloat(e.target.value);
    document.getElementById('forceValue').textContent = appliedForce.toFixed(2);
});

document.getElementById('applyForceBtn').addEventListener('click', applyForceToBalls);

document.getElementById('resetBtn').addEventListener('click', () => {
    Body.setPosition(ball1, { x: initialX1, y: groundY - ball1.circleRadius - 5 });
    Body.setPosition(ball2, { x: initialX2, y: groundY - ball2.circleRadius - 5 });
    Body.setVelocity(ball1, { x: 0, y: 0 });
    Body.setVelocity(ball2, { x: 0, y: 0 });
    Body.setAngularVelocity(ball1, 0);
    Body.setAngularVelocity(ball2, 0);
});

// Enhanced rendering showing Newton's Second Law: F = ma
Events.on(render, 'afterRender', () => {
    const context = render.context;

    // Calculate velocities and accelerations
    const velocity1 = Math.sqrt(ball1.velocity.x ** 2 + ball1.velocity.y ** 2);
    const velocity2 = Math.sqrt(ball2.velocity.x ** 2 + ball2.velocity.y ** 2);

    // a = F/m - Newton's Second Law!
    const acceleration1 = appliedForce / mass1;
    const acceleration2 = appliedForce / mass2;

    // Draw information for Ball 1
    context.textAlign = 'center';
    context.font = 'bold 22px Poppins';
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#0f172a';
    context.lineWidth = 5;

    // Mass label
    context.strokeText(`Mass: ${mass1.toFixed(1)} kg`, ball1.position.x, ball1.position.y - ball1.circleRadius - 60);
    context.fillText(`Mass: ${mass1.toFixed(1)} kg`, ball1.position.x, ball1.position.y - ball1.circleRadius - 60);

    // Acceleration (a = F/m)
    context.font = '18px Poppins';
    context.fillStyle = '#10b981';
    context.strokeText(`a = ${acceleration1.toFixed(3)} m/s²`, ball1.position.x, ball1.position.y - ball1.circleRadius - 35);
    context.fillText(`a = ${acceleration1.toFixed(3)} m/s²`, ball1.position.x, ball1.position.y - ball1.circleRadius - 35);

    // Velocity
    context.font = '16px Poppins';
    context.fillStyle = '#fbbf24';
    context.strokeText(`v = ${velocity1.toFixed(2)} m/s`, ball1.position.x, ball1.position.y + ball1.circleRadius + 30);
    context.fillText(`v = ${velocity1.toFixed(2)} m/s`, ball1.position.x, ball1.position.y + ball1.circleRadius + 30);

    // Draw information for Ball 2
    context.font = 'bold 22px Poppins';
    context.fillStyle = '#ffffff';

    context.strokeText(`Mass: ${mass2.toFixed(1)} kg`, ball2.position.x, ball2.position.y - ball2.circleRadius - 60);
    context.fillText(`Mass: ${mass2.toFixed(1)} kg`, ball2.position.x, ball2.position.y - ball2.circleRadius - 60);

    context.font = '18px Poppins';
    context.fillStyle = '#10b981';
    context.strokeText(`a = ${acceleration2.toFixed(3)} m/s²`, ball2.position.x, ball2.position.y - ball2.circleRadius - 35);
    context.fillText(`a = ${acceleration2.toFixed(3)} m/s²`, ball2.position.x, ball2.position.y - ball2.circleRadius - 35);

    context.font = '16px Poppins';
    context.fillStyle = '#fbbf24';
    context.strokeText(`v = ${velocity2.toFixed(2)} m/s`, ball2.position.x, ball2.position.y + ball2.circleRadius + 30);
    context.fillText(`v = ${velocity2.toFixed(2)} m/s`, ball2.position.x, ball2.position.y + ball2.circleRadius + 30);

    // Draw force arrows when force is being applied
    if (forceApplied) {
        drawForceArrow(context, ball1.position.x - ball1.circleRadius - 15, ball1.position.y, appliedForce * 180);
        drawForceArrow(context, ball2.position.x - ball2.circleRadius - 15, ball2.position.y, appliedForce * 180);
    }

    // Draw main explanation
    context.font = 'bold 20px Poppins';
    context.fillStyle = '#6366f1';
    context.textAlign = 'center';

    context.strokeStyle = '#0f172a';
    context.lineWidth = 6;
    context.strokeText('Newton\'s Second Law: F = m × a', width / 2, 130);
    context.fillText('Newton\'s Second Law: F = m × a', width / 2, 130);

    // Show the key insight
    context.font = '17px Poppins';
    context.fillStyle = '#ffffff';
    const insight = `Same Force (F = ${appliedForce.toFixed(2)} N) → Different Masses → Different Accelerations!`;
    context.strokeText(insight, width / 2, 160);
    context.fillText(insight, width / 2, 160);

    // Show acceleration comparison
    if (velocity1 > 0.1 || velocity2 > 0.1) {
        const ratio = (acceleration1 / acceleration2).toFixed(2);
        context.font = 'bold 16px Poppins';
        context.fillStyle = '#10b981';
        const comparison = `Ball 1 (lighter) accelerates ${ratio}× faster than Ball 2 (heavier)`;
        context.strokeText(comparison, width / 2, 185);
        context.fillText(comparison, width / 2, 185);
    }
});

// Helper function to draw force arrow
function drawForceArrow(context, x, y, length, color = '#10b981') {
    context.strokeStyle = color;
    context.fillStyle = color;
    context.lineWidth = 5;

    // Arrow shaft
    context.beginPath();
    context.moveTo(x - length, y);
    context.lineTo(x, y);
    context.stroke();

    // Arrow head
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x - 18, y - 10);
    context.lineTo(x - 18, y + 10);
    context.closePath();
    context.fill();

    // Force label
    context.font = 'bold 16px Poppins';
    context.textAlign = 'center';
    context.strokeStyle = '#0f172a';
    context.lineWidth = 4;
    context.strokeText(`F = ${appliedForce.toFixed(2)} N`, x - length / 2, y - 20);
    context.fillText(`F = ${appliedForce.toFixed(2)} N`, x - length / 2, y - 20);
}
