const d = document,
  $ButtonsOpen = d.querySelector(".buttons-menu-open"),
  $ButtonsClose = d.querySelector(".buttons-menu-close"),
  $Nav = d.querySelector("#nav"),
  $BackgroundGray = d.querySelector("#background-gray"),
  $MenuList = d.querySelector(".menu-list"),
  $ImgHero = d.getElementById("img-hero");

let width = window.visualViewport.width;

$ButtonsOpen.addEventListener("click", (e) => {
  if (e.target.classList.contains("buttons-menu-open")) {
    $Nav.classList.remove("menu-close");
    $Nav.classList.add("menu-open");
    $BackgroundGray.classList.remove("menu-close");
    $BackgroundGray.classList.add("menu-open-background");
    $ButtonsOpen.classList.add("hide");
  }
});

$ButtonsClose.addEventListener("click", (e) => {
  if (e.target.classList.contains("buttons-menu-close")) {
    $Nav.classList.remove("menu-open");
    $Nav.classList.add("menu-close");
    $BackgroundGray.classList.remove("menu-open-background");
    $BackgroundGray.classList.add("menu-close");
    $ButtonsOpen.classList.remove("hide");
  }
});

$MenuList.addEventListener("click", (e) => {
  if (e.target.classList.contains("arrows")) {
    e.target.classList.toggle("menu-details-icon-up");
    e.target.nextElementSibling.classList.toggle("hide");
  }
});

/* window.addEventListener("resize", () => {
  let width = window.visualViewport.width;

  console.log(width);
  if (width >= 768) {
    $Nav.classList.remove("menu-close");
    $Nav.classList.add("nav-desktop");
  } else {
    $Nav.classList.add("menu-close");
    $Nav.classList.remove("nav-desktop");
  }
}); */

window.addEventListener("resize", () => {
  width = window.visualViewport.width;
  if (width >= 768) {
    $ImgHero.src = "../images/image-hero-desktop.png";
  } else {
    $ImgHero.src = "../images/image-hero-mobile.png";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (width >= 768) {
    $ImgHero.src = "../images/image-hero-desktop.png";
  } else {
    $ImgHero.src = "../images/image-hero-mobile.png";
  }
});
