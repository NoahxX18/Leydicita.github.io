document.addEventListener("DOMContentLoaded", () => {
    const btnNo = document.getElementById("btnNo");
    const btnYes = document.getElementById("btnYes");

    let moved = false;
    const distance = 160; // distancia entre botones (ajustable)

    btnNo.addEventListener("mouseenter", () => {
        if (!moved) {
            btnNo.style.transform = `translateX(-${distance}px)`;
            btnYes.style.transform = `translateX(${distance}px)`;
            moved = true;
        }
    });

    btnNo.addEventListener("mouseleave", () => {
        btnNo.style.transform = "translateX(0)";
        btnYes.style.transform = "translateX(0)";
        moved = false;
    });
});

/* =========================
   CORAZONES CONSTANTES 💗
========================= */

const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.textContent = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 18) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}, 250); // ← frecuencia constante y fluida

document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");

    if (!music) return;

    music.volume = 0.4; // volumen suave y romántico

    // Intento de autoplay
    music.play().catch(() => {
        // Si el navegador lo bloquea, se reproduce al primer click
        document.addEventListener("click", () => {
            music.play();
        }, { once: true });
    });
});
