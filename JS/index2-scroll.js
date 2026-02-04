document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".clickable").forEach(section => {
        section.addEventListener("click", () => {
            const nextID = section.getAttribute("data-next");
            const nextEl = document.getElementById(nextID);
            if (nextEl) {
                nextEl.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

document.getElementById("btnNo")?.addEventListener("click", () => {
    alert("Entiendo tu decisión...\n\nAun así, gracias por llegar hasta aquí 💔");
});

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".story, .story-text, .story-image, .final-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    elements.forEach(el => observer.observe(el));
});
