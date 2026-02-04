document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");
    if (!music) return;

    // volumen romántico
    music.volume = 0.35;

    // recuperar tiempo guardado
    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    // intentar reproducir
    music.play().catch(() => {
        document.addEventListener("click", () => {
            music.play();
        }, { once: true });
    });

    // guardar tiempo constantemente
    setInterval(() => {
        if (!music.paused) {
            localStorage.setItem("musicTime", music.currentTime);
        }
    }, 500);
});
