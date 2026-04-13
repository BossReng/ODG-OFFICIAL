document.addEventListener("DOMContentLoaded", () => {
    // 1. 自動更新頁尾年份
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. 防右鍵與防選取保護 (取代原本寫在 body 裡的 oncontextmenu 等屬性)
    const preventActions = (e) => {
        e.preventDefault();
    };

    document.addEventListener('contextmenu', preventActions); // 防右鍵
    document.addEventListener('copy', preventActions);        // 防拷貝
    document.addEventListener('selectstart', preventActions); // 防文字選取
    document.addEventListener('dragstart', preventActions);   // 防圖片/元素拖曳

    // 3. 鍵盤快速鍵防護 (選配，防止 F12 或 Ctrl+C 等)
    document.addEventListener('keydown', (e) => {
        // 防止 F12 (開發者工具)
        if (e.key === 'F12') {
            e.preventDefault();
        }
        // 防止 Ctrl+Shift+I (開發者工具)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
        }
        // 防止 Ctrl+C (複製)
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
        }
    });

    console.log("ODG Core Protocols System Loaded.");
});