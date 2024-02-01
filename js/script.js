const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document
  .querySelector("#hamburger-menu")
  .addEventListener("click", handleHamburgerClick);

document.addEventListener("click", handleDocumentClick);

document
  .querySelector("#search-button")
  .addEventListener("click", handleSearchButtonClick);

function handleHamburgerClick() {
  navbarNav.classList.toggle("active");
}

function handleDocumentClick(e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
}

function handleSearchButtonClick() {
  searchForm.classList.toggle("active");
  searchBox.focus();
}

// function handleDocumentClick(e) {
//   if (!searchButton.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }
// }
// // Your existing JavaScript code remains here

// // Example: Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

// // slide show
// const navbarNav = document.querySelector(".navbar-nav");
// document.querySelector("#hamburger-menu").onclick = () => {
//   navbarNav.classList.toggle("active");
// };

// // perintah hilangkan sidebar navigasdengan klik di mana saja selain di navbar dan hamburger menu
// const hamburger = document.querySelector("#hamburger-menu");
// document.addEventListener("click", function (e) {
//   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }
// });
