const inputPassword = document.getElementById("password");
const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("input", (e) => {
  if (e.target.checked) {
    inputPassword.setAttribute("type", "text");
  } else {
    inputPassword.setAttribute("type", "password");
  }
});
