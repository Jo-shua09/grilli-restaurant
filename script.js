// ================LOADER=============
const preloader = document.querySelector(".loader-container");
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

window.onload = function () {
  let content = document.querySelector(".content");
  content.classList.add(enter);
};
// ================LOADER=============

// ===========NAVBAR SETTINGS===========
// ================STICKY NAVBAR=================
const header = document.querySelector(".header-2");
window.addEventListener("scroll", function () {
  if (this.window.scrollY <= 0) {
    header.classList.remove("stick");
  } else {
    header.classList.add("stick");
  }
});
// ================STICKY NAVBAR=================

// ===============RESPONSIVE NAVBAR==============
const navOpen = document.querySelectorAll("#navOpen");
const closeNav = document.querySelector(".fa-times");
const navitems = document.querySelector(".nav-items");
const navBar = document.querySelector(".responsive-navigators");

navOpen.forEach(function (element) {
  element.addEventListener("click", () => {
    navBar.classList.add("show");
    navitems.classList.add("hide");
  });
});
closeNav.addEventListener("click", () => {
  navBar.classList.remove("show");
  navitems.classList.remove("hide");
});

window.onscroll = function () {
  navBar.classList.remove("show");
  navitems.classList.remove("hide");
};
//===============RESPONSIVE NAVBAR==============

//===========NAVBAR SETTINGS===========

//=========HOME CONTENT SETTINGS=========

//===========HOME CONTENT SLIDER===========
var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  loop: true,
  autoplay: true,
  autoplay: { delay: 4000 },
});
//===========HOME CONTENT SLIDER===========

//=========HOME CONTENT SETTINGS=========
