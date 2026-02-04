const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    {
        threshold: 0.25
    }
);

cards.forEach(card => observer.observe(card));

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    cards.forEach(card => observer.observe(card));

});

function closeScreen() {
    const screen = document.getElementById("screen-close");
    screen.classList.add("active");
}
