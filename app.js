const navMobileBtn = document.querySelector(".navigation__btn");
const navMobileLines = document.querySelectorAll(".navigation__btn-line");
const navigationContainer = document.querySelector(".navigation__nav");

const toggleNav = function () {
  navMobileLines.forEach((line) => line.classList.toggle("active"));
  navigationContainer.classList.toggle("active");

  document.querySelector("body").classList.toggle("disable-scroll");
};
navMobileBtn.addEventListener("click", toggleNav);
