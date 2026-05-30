// ===================================
// Build the Ultimate Athlete
// Main JavaScript File
// ===================================

// Smooth appearance animation

const cards = document.querySelectorAll(
    '.card, .muscle-card, .explore-card'
);

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });

});

// ===================================
// Fun Fact Random Highlight
// ===================================

const facts = document.querySelectorAll('.facts li');

if (facts.length > 0) {

    const randomFact =
        facts[Math.floor(Math.random() * facts.length)];

    randomFact.style.fontWeight = '700';
    randomFact.style.color = '#2563eb';

}

// ===================================
// Welcome Message
// ===================================

console.log(
    "Welcome to Build the Ultimate Athlete!"
);

// ===================================
// Scroll Reveal Animation
// ===================================

const revealElements = document.querySelectorAll(
    '.card, .muscle-card, .explore-card'
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add('active');

        }

    });

};

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();
