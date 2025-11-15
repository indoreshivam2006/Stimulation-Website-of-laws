# How to Run the Physics Animation Website

## Problem
The animation buttons may not work when opening HTML files directly in the browser because:
- JavaScript may be blocked on local file system
- External libraries (Chart.js, p5.js, d3.js) cannot load properly
- Cross-origin security restrictions

## Solution: Run a Local Web Server

### Option 1: Using the Batch File (Easiest)
1. Double-click `start_server.bat`
2. Your browser will open automatically
3. Navigate to the page you want (e.g., Laws.html)
4. Click on any animation button - they will now work!

### Option 2: Using PowerShell
1. Open PowerShell in this directory
2. Run: `python -m http.server 8000`
3. Open your browser and go to: `http://localhost:8000`
4. Navigate to the page you want

### Option 3: Using VS Code Live Server Extension
1. Install the "Live Server" extension in VS Code
2. Right-click on any HTML file
3. Select "Open with Live Server"

## How to Test
1. Start the server using any method above
2. Go to `http://localhost:8000/Laws.html`
3. Click on any law card
4. Click the animation button - it should work now!

## Animation Pages Available
- Newton's Laws: `sim/law1.html`, `sim/law2.html`, `sim/law3.html`
- Kepler's Laws: `Kepler_1.html`, `Kepler_2.html`, `Kepler_3.html`
- Hooke's Law: `Hookes_anime.html`
- Coulomb's Law: `Coulomb_anime.html`
- Snell's Law: `snells_anime.html`
- Thermodynamics: `thermo.html`

## Troubleshooting
- If Python is not installed, download it from python.org
- If port 8000 is in use, change the port number in the command
- Make sure all HTML, CSS, and JS files are in the correct locations
