document.addEventListener("DOMContentLoaded", () => {
    console.log("System Status: Animation Controller Initialized.");

    const allAnimatedElements = document.querySelectorAll(
        '.role-card, .mgmt-standalone-card, .mgmt-subcard, .honors-section, .honor-card'
    );
    
    allAnimatedElements.forEach((el, index) => {
        const delay = 0.3 + (index * 0.12);
        el.style.animationDelay = `${delay}s`;
        
        el.addEventListener('animationend', (e) => {
            if (e.animationName === 'floatUpCard') {
                el.classList.add('is-ready');
            }
        }, { once: true });
    });
});