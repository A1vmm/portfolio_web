document.addEventListener("DOMContentLoaded", () => {
    gsap.from("#hero h2, #hero p, .btn-container", { opacity: 0, y: -50, duration: 1, delay: 0.5 });

    gsap.utils.toArray("section").forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // FAQ Toggle
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", () => {
            button.nextElementSibling.classList.toggle("show");
        });
    });

    // Back to Top Button
    const backToTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        gsap.to(window, { scrollTo: 0, duration: 1 });
    });
});
