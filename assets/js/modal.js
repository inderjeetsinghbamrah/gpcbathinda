// OPEN FIRST MODAL ON PAGE LOAD
window.onload = function () {
    document.getElementById("bannerModal").style.display = "flex";
};

// CLOSE FIRST MODAL -> OPEN SECOND MODAL
document.querySelector(".close-btn").onclick = function () {

    // hide first modal
    document.getElementById("bannerModal").style.display = "none";

    // show second modal
    document.getElementById("admissionModal").style.display = "flex";

    startSlider();
};

// BUTTON CLICK ALSO OPENS SECOND MODAL
document.getElementById("proceedBtn").addEventListener("click", function () {

    // hide first modal
    document.getElementById("bannerModal").style.display = "none";

    // show second modal
    document.getElementById("admissionModal").style.display = "flex";

    startSlider();
});

// FINAL CLOSE
document.querySelector(".close-admission").onclick = function () {

    // close second modal completely
    document.getElementById("admissionModal").style.display = "none";
};

// SLIDER
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

    }, 4000);
}
