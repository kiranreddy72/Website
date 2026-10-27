// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form handling (demo only)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for your message! In a real site, this would be sent to you. Customize this form as needed.');
    this.reset();
});

// Add some interactive hover effects or animations if desired
console.log('StartupSpark website loaded!');
