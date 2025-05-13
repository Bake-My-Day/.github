function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");

  const hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("active");
}
