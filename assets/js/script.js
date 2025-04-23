// Counter Code Start
function animateCounter(element, start, end, duration) {
    let startTime = null;

    function update(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

window.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter-number');

    const observerOptions = {
        root: null,
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const endValue = parseInt(counter.getAttribute('data-target'));

                if (!counter.classList.contains('animated')) {
                    animateCounter(counter, 0, endValue, 2000);
                    counter.classList.add('animated');
                }

                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

// Counter Code End