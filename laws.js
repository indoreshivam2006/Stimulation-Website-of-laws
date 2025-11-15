document.addEventListener("DOMContentLoaded", function () {
    const laws = [
        { name: "Newton's Laws of Motion", url: "newton.html", description: "Three fundamental laws describing motion and forces" },
        { name: "Kepler's Laws of Planetary Motion", url: "Kepler.html", description: "Laws governing planetary orbits around the Sun" },
        { name: "Laws of Thermodynamics", url: "Thermodynamics.html", description: "Four laws describing heat, energy, and entropy" },
        { name: "Snell's Law of Refraction", url: "Snells.html", description: "Law describing light bending between media" },
        { name: "Hooke's Law of Elasticity", url: "Hookes.html", description: "Law of spring force and elastic deformation" },
        { name: "Coulomb's Law of Electrostatics", url: "Coulomb.html", description: "Law describing electrostatic force between charges" },
    ];

    const searchBox = document.getElementById("searchBox");
    const resultBox = document.getElementById("result");

    // Debounce function to limit API calls
    function debounce(func, delay) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    function searchLaws() {
        const query = searchBox.value.toLowerCase().trim();
        resultBox.innerHTML = ""; // Clear previous results

        if (!query) return;

        const filteredLaws = laws.filter(law => law.name.toLowerCase().includes(query));

        if (filteredLaws.length === 0) {
            resultBox.innerHTML = `<div class="no-results">No results found</div>`;
            return;
        }

        const fragment = document.createDocumentFragment();

        filteredLaws.forEach((law, index) => {
            const suggestion = document.createElement("div");
            suggestion.classList.add("suggestion");
            suggestion.textContent = law.name;

            // Delay for staggered animation effect
            setTimeout(() => suggestion.classList.add("fade-in"), index * 100);

            suggestion.addEventListener("click", function () {
                searchBox.value = law.name;
                resultBox.innerHTML = "";

                if (law.url) {
                    window.location.href = law.url;
                }
            });

            fragment.appendChild(suggestion);
        });

        resultBox.appendChild(fragment);
    }

    searchBox.addEventListener("input", debounce(searchLaws, 300));
});
