// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika 'menuextra' di klik
document.querySelector("#menu-extra").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar Side Bar untuk menghilangkan Navbar
const menuExtra = document.querySelector("#menu-extra");

document.addEventListener("click", function (e) {
  if (!menuExtra.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
