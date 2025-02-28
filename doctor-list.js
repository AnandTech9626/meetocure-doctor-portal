// Filter button functionality
document.querySelectorAll(".filter").forEach(btn => {
    btn.addEventListener("click", function() {
        document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    });
});

// Favorite button functionality
document.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        this.classList.toggle("liked");
        this.innerHTML = this.classList.contains("liked") ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
    });
});
