document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Portfolio card animation on scroll
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.5s ${entry.target.dataset.delay || ''} forwards`;
            }
        });
    }, {
        threshold: 0.1
    });

    portfolioCards.forEach((card, index) => {
        card.style.opacity = '0'; // Start with cards invisible
        card.dataset.delay = `${index * 100}ms`;
        observer.observe(card);
    });

    // Add a simple animation for the hero text
    const heroText = document.querySelector('.hero-text');
    heroText.style.opacity = '0';
    heroText.style.animation = 'fadeIn 1s forwards';
});

// Add keyframes to the stylesheet
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(styleSheet);
