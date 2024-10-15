// JavaScript for Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");
backToTopBtn.style.display = "none"; // Hide button initially

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block"; // Show button
    } else {
        backToTopBtn.style.display = "none"; // Hide button
    }
};

backToTopBtn.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Smooth scroll to top
});





