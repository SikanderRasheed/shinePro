fetch('/header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        const currentPath = window.location.pathname
            .replace(/\/$/, "")
            .replace(/\.html$/, "")
            .toLowerCase();

        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
        let matched = false;

        navLinks.forEach(link => {
            const href = link.getAttribute("href") || "";
            const linkPath = "/" + href
                .replace(/^\//, "")
                .replace(/\.html$/, "")
                .toLowerCase();

            if (currentPath === linkPath) {
                link.classList.add("active");
                link.setAttribute("aria-current", "page");
                matched = true;
            } else {
                link.classList.remove("active");
                link.removeAttribute("aria-current");
            }
        });

        // If nothing matched, make Home active by default
        if (!matched) {
            const homeLink = document.querySelector('.navbar-nav .nav-link[href="index.html"]');
            if (homeLink) {
                homeLink.classList.add("active");
                homeLink.setAttribute("aria-current", "page");
            }
        }
    });


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

// Why Choose Slider Start


$('.choose_slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

// Why Choose Slider End

// ServicesSlider Start
$('.service_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
        {
            breakpoint: 1099,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1.2,
            }
        },
    ]
});

//   ServicesSlider End


// Input Custom Dropdown 
const customSelectToggle = document.getElementById('customSelectToggle');
const customSelectDropdown = document.getElementById('customSelectDropdown');
const customSelectOptions = document.querySelectorAll('.custom-select__option');

// Toggle dropdown visibility
customSelectToggle.addEventListener("click", function () {
    customSelectDropdown.classList.toggle("active");
});

// Handle option selection
customSelectOptions.forEach((option) => {
    option.addEventListener("click", function () {
        customSelectToggle.innerText = option.innerText;
        customSelectToggle.dataset.value = option.dataset.value;
        customSelectToggle.dataset.index = option.dataset.index;
        customSelectDropdown.classList.remove("active");
    });
});

// Optional: Close dropdown if clicked outside
document.addEventListener("click", function (e) {
    if (!customSelectToggle.contains(e.target) && !customSelectDropdown.contains(e.target)) {
        customSelectDropdown.classList.remove("active");
    }
});