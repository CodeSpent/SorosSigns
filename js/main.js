(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href').substring(1);
                if (!targetId) return;
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        console.log('%cSorosSigns', 'font-size: 18px; font-weight: bold; color: #002868;');
        console.log('%cThis is a satirical website designed to educate about conspiracy theories and promote civic engagement.', 'font-size: 12px; color: #343a40;');
        console.log('%cDemocratic participation is not a conspiracy. Be an informed citizen.', 'font-size: 12px; font-weight: bold; color: #0052A5;');
        const externalLinks = document.querySelectorAll('a[target="_blank"]');
        externalLinks.forEach(link => {
            const relValues = new Set(link.rel.split(' ').filter(r => r));
            relValues.add('noopener');
            relValues.add('noreferrer');
            link.rel = Array.from(relValues).join(' ');
        });
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const heroObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        console.log('Reveal section viewed. Mission accomplished.');
                        heroObserver.disconnect();
                    }
                });
            }, { threshold: 0.5 });
            heroObserver.observe(heroSection);
        }
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (document.activeElement && document.activeElement !== document.body) {
                    document.activeElement.blur();
                }
            }
        });
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
            });
        }
        console.log('SorosSigns initialized successfully.');
    });
    function setVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
})();
