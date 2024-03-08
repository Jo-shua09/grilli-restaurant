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
const navOpen = document.querySelector("#navOpen");
const closeNav = document.querySelector(".fa-times");
const navitems = document.querySelector(".nav-items");
const navBar = document.querySelector(".responsive-navigators");

navOpen.addEventListener("click", () => {
  navBar.classList.add("show");
  navitems.classList.add("hide");
});
closeNav.addEventListener("click", () => {
  navBar.classList.remove("show");
  navitems.classList.remove("hide");
});
//===============RESPONSIVE NAVBAR==============

//===========NAVBAR SETTINGS===========

//=========HOME CONTENT SETTINGS=========
//=========HOME CONTENT DELAY=========

// window.addEventListener("DOMContentLoaded", () => {
//   document.querySelector(".contents");
// });
//   // const trans1 = document.querySelector(".contents1").classList.add("visible");
//   // const trans2 = document.querySelector(".contents2").classList.add("visible");
//   // const trans3 = document.querySelector(".contents3").classList.add("visible");
// });

// const trans = document.querySelectorAll(".contents");
// trans.forEach(function (element) {
//   element.classList.toggle("visible");
// });

//=========HOME CONTENT DELAY=========

//===========HOME CONTENT SLIDER===========
var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  loop: true,
  autoplay: true,
  autoplay: { delay: 4000 },
});
//===========HOME CONTENT SLIDER===========

//=========HOME CONTENT SETTINGS=========
