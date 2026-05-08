// FIRST MODAL OPEN
window.onload = function () {
    document.getElementById("bannerModal").style.display = "flex";
};

// CLOSE FIRST MODAL
document.querySelector(".close-btn").onclick = function () {
    document.getElementById("bannerModal").style.display = "none";
};

// BUTTON CLICK -> OPEN SECOND MODAL
document.getElementById("proceedBtn").addEventListener("click", function () {

    // Close first modal
    document.getElementById("bannerModal").style.display = "none";

    // Open second modal
    document.getElementById("admissionModal").style.display = "flex";

    startSlider();
});

// CLOSE SECOND MODAL
document.querySelector(".close-admission").onclick = function () {
    document.getElementById("admissionModal").style.display = "none";
};

// AUTO SLIDER
let currentSlide = 0;
let sliderStarted = false;

function startSlider(){

    if(sliderStarted) return;

    sliderStarted = true;

    const slides = document.querySelectorAll(".slide");

    setInterval(() => {

        slides[currentSlide].classList.remove("active");

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add("active");

    }, 4000); // 4 seconds
}
