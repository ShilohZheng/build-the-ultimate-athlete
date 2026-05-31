// Build the Ultimate Athlete
// JavaScript will be added later

// ==================================
// Scroll Reveal Animation
// ==================================

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".card, .muscle-card, .explore-card"
    );

    function reveal() {

        elements.forEach(element => {

            const windowHeight = window.innerHeight;

            const elementTop =
                element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {

                element.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

});
