document.addEventListener("DOMContentLoaded", () => {

    console.log("System Status: Reverted to native vertical list layout. All scroll locks disabled.");

    const allCards = document.querySelectorAll('.role-card, .mgmt-standalone-card, .mgmt-subcard, .honors-section, .honor-card');
    
    allCards.forEach((card, index) => {

        const delay = 0.3 + (index * 0.12);
        card.style.animationDelay = `${delay}s`;
    });
});