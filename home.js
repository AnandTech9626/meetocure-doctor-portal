document.addEventListener("DOMContentLoaded", function () {
    console.log("Meetocure homepage loaded!");

    let banners = document.querySelectorAll(".banner");
    let currentIndex = 0;

    function showNextBanner() {
        banners[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % banners.length;
        banners[currentIndex].classList.add("active");
    }

    banners[currentIndex].classList.add("active");
    setInterval(showNextBanner, 3000); // Change every 3 seconds
});
