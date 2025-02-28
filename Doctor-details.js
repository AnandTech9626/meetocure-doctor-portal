document.addEventListener("DOMContentLoaded", function () {
    const favoriteButton = document.querySelector(".favorite");
    const bellButton = document.querySelector(".bell");

    favoriteButton.addEventListener("click", function () {
        if (favoriteButton.style.color === "red") {
            favoriteButton.style.color = "black";
        } else {
            favoriteButton.style.color = "red";
        }
    });

    bellButton.addEventListener("click", function () {
        alert("No new notifications at the moment!");
    });
});
