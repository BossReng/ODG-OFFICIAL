document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. 自動更新頁尾年份
    // ==========================================
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ==========================================
    // 2. 防右鍵與防選取保護
    // ==========================================
    const preventActions = (e) => {
        e.preventDefault();
    };

    document.addEventListener('contextmenu', preventActions);
    document.addEventListener('copy', preventActions); 
    document.addEventListener('selectstart', preventActions); 
    document.addEventListener('dragstart', preventActions); 

    // ==========================================
    // 3. 鍵盤快速鍵防護 (防止 F12 或 Ctrl+C 等)
    // ==========================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F12') {
            e.preventDefault();
        }
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
        }
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
        }
    });

    // ==========================================
    // 4. 動畫時間軸控制 (背景 -> 標題 -> 卡片)
    // ==========================================
    
    document.body.classList.add('is-loaded');

    const cards = document.querySelectorAll('.rule-card, .role-card');
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('is-ready');
            }, 150 * index);
        });
    }, 1200); 

    console.log("ODG Protocols System Fully Loaded.");
});