
let count = 0;

const countElement = document.getElementById("count");

function updateCount() {
    countElement.textContent = count;
}

document.getElementById("plus").addEventListener("click", () => {
    count++;
    updateCount();
});

document.getElementById("minus").addEventListener("click", () => {
    count--;
    updateCount();
});

document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    updateCount();
});

// Интеграция с Telegram
if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
}
