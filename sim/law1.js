const { Engine, Render, Runner, Bodies, World, Body, Events, Mouse, MouseConstraint } = Matter;

// Create engine and world with reduced gravity to show inertia better
const engine = Engine.create();
engine.gravity.y = 0.5; // Reduced gravity for better visualization
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

// Create static ground with better styling
const ground = Bodies.rectangle(width / 2, height - 60, width, 120, {
    isStatic: true,
    render: {
        fillStyle: '#1e293b',
        strokeStyle: '#6366f1',
        lineWidth: 3
    }
});

const leftWall = Bodies.rectangle(0, height / 2, 50, height, { isStatic: true, render: { visible: false } });
const rightWall = Bodies.rectangle(width, height / 2, 50, height, { isStatic: true, render: { visible: false } });

World.add(world, [ground, leftWall, rightWall]);

// Store all balls
let balls = [];

// Enhanced ball creation with visual feedback
const createBall = (x, y, vx = 0, color = '#3b82f6') => {
    const ball = Bodies.circle(x, y, 35, {
        restitution: 0.8,
        friction: 0.01,
        frictionAir: 0.001,
        render: {
            fillStyle: color,
            strokeStyle: '#ffffff',
            lineWidth: 3
        },
        label: 'ball'
    });

    // Apply initial velocity
    Body.setVelocity(ball, { x: vx, y: 0 });

    World.add(world, ball);
    balls.push(ball);
    return ball;
};

// Create initial balls
const ballAtRest = createBall(200, height - 200, 0, '#3b82f6');
const ballInMotion = createBall(width - 200, height - 200, 3, '#ef4444');

// Mouse interaction
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: { visible: false }
    }
});
World.add(world, mouseConstraint);

// Click to apply force
let selectedBall = null;
Events.on(mouseConstraint, 'mousedown', (event) => {
    const mousePosition = event.mouse.position;
    balls.forEach(ball => {
        const distance = Math.sqrt(
            Math.pow(ball.position.x - mousePosition.x, 2) +
            Math.pow(ball.position.y - mousePosition.y, 2)
        );

        if (distance < 35) {
            selectedBall = ball;
            const forceMagnitude = 0.08;
            const angle = Math.random() * Math.PI * 2;
            Body.applyForce(ball, ball.position, {
                x: Math.cos(angle) * forceMagnitude,
                y: Math.sin(angle) * forceMagnitude - 0.05
            });

            // Visual feedback
            ball.render.strokeStyle = '#fbbf24';
            setTimeout(() => {
                ball.render.strokeStyle = '#ffffff';
            }, 300);
        }
    });
});

// Button controls
document.getElementById('resetBtn').addEventListener('click', () => {
    balls.forEach(ball => World.remove(world, ball));
    balls = [];
    createBall(200, height - 200, 0, '#3b82f6');
    createBall(width - 200, height - 200, 3, '#ef4444');
});

document.getElementById('addBallBtn').addEventListener('click', () => {
    const x = Math.random() * (width - 200) + 100;
    const y = 100;
    const vx = (Math.random() - 0.5) * 6;
    const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    createBall(x, y, vx, color);
});

document.getElementById('applyForceBtn').addEventListener('click', () => {
    balls.forEach(ball => {
        const forceMagnitude = 0.1;
        const angle = Math.random() * Math.PI * 2;
        Body.applyForce(ball, ball.position, {
            x: Math.cos(angle) * forceMagnitude,
            y: Math.sin(angle) * forceMagnitude - 0.05
        });
    });
});

// Enhanced rendering with velocity indicators and labels
Events.on(render, 'afterRender', () => {
    const context = render.context;

    balls.forEach(ball => {
        const speed = Math.sqrt(ball.velocity.x ** 2 + ball.velocity.y ** 2);
        const isMoving = speed > 0.3;

        // Draw velocity vector
        if (isMoving && speed > 0.5) {
            context.beginPath();
            context.strokeStyle = '#fbbf24';
            context.lineWidth = 3;
            context.moveTo(ball.position.x, ball.position.y);
            const arrowLength = Math.min(speed * 20, 80);
            const angle = Math.atan2(ball.velocity.y, ball.velocity.x);
            context.lineTo(
                ball.position.x + Math.cos(angle) * arrowLength,
                ball.position.y + Math.sin(angle) * arrowLength
            );
            context.stroke();

            // Arrow head
            const headLength = 10;
            context.beginPath();
            context.moveTo(
                ball.position.x + Math.cos(angle) * arrowLength,
                ball.position.y + Math.sin(angle) * arrowLength
            );
            context.lineTo(
                ball.position.x + Math.cos(angle - Math.PI / 6) * (arrowLength - headLength),
                ball.position.y + Math.sin(angle - Math.PI / 6) * (arrowLength - headLength)
            );
            context.moveTo(
                ball.position.x + Math.cos(angle) * arrowLength,
                ball.position.y + Math.sin(angle) * arrowLength
            );
            context.lineTo(
                ball.position.x + Math.cos(angle + Math.PI / 6) * (arrowLength - headLength),
                ball.position.y + Math.sin(angle + Math.PI / 6) * (arrowLength - headLength)
            );
            context.stroke();
        }

        // Draw state label
        context.font = 'bold 14px Poppins';
        context.fillStyle = '#ffffff';
        context.strokeStyle = '#0f172a';
        context.lineWidth = 3;
        context.textAlign = 'center';

        const label = isMoving ? 'IN MOTION' : 'AT REST';
        context.strokeText(label, ball.position.x, ball.position.y - 50);
        context.fillText(label, ball.position.x, ball.position.y - 50);

        // Draw speed indicator
        context.font = '12px Poppins';
        const speedText = `v = ${speed.toFixed(2)} m/s`;
        context.strokeText(speedText, ball.position.x, ball.position.y - 33);
        context.fillText(speedText, ball.position.x, ball.position.y - 33);
    });

    // Draw instruction text at top
    context.font = 'bold 16px Poppins';
    context.fillStyle = 'rgba(255, 255, 255, 0.9)';
    context.textAlign = 'center';
    context.fillText('Click on balls to apply force • Observe how objects resist changes in motion', width / 2, 120);
});