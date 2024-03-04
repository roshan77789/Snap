const features = document.querySelector(".features");
const featuresList = document.querySelector(".features-info");
const company = document.querySelector(".company");
const companyList = document.querySelector(".company-info");
const arroRegister = document.querySelector(".arrow-register");
const arroCompany = document.querySelector(".arrow-company");

features.addEventListener("click", () => {
  featuresList.classList.toggle("show-features");
  arroRegister.classList.toggle("move-arrow");
});

company.addEventListener("click", () => {
  companyList.classList.toggle("show-company");
  arroCompany.classList.toggle("move-arrow");
});

// for new nav
const navMenu = document.querySelector(".nav-menu");
const newNav = document.querySelector(".new-nav")
const closeMenu = document.querySelector(".abc");
const newfeatures = document.querySelector(".new-features");
const newCompany = document.querySelector(".new-company");

navMenu.addEventListener("click", () => {
  newNav.classList.toggle("show-new-nav")
});

closeMenu.addEventListener("click", () => {
  newNav.classList.toggle("show-new-nav")
});

newfeatures.addEventListener("click", () => {
  newfeatures.classList.toggle("show-new-nav-features");
});

newCompany.addEventListener("click", () => {
  newCompany.classList.toggle("show-new-nav-company");
});
