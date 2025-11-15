document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");
    
    function checkScroll() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
