const topButton = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
if (window.scrollY > 100) {
  topButton.classList.add("show");
} else {
  topButton.classList.remove("show");
}
});

topButton.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});
