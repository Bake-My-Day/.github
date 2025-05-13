document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navigation = document.querySelector(".navigation");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navigation.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".navigation") &&
      !event.target.closest(".hamburger")
    ) {
      navigation.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});
