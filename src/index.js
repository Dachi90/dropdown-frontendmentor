const d = document,
  $ButtonsOpen = d.querySelector(".buttons-menu-open"),
  $ButtonsClose = d.querySelector(".buttons-menu-close"),
  $Nav = d.querySelector("#nav"),
  $Header = d.querySelector(".header"),
  $Main = d.querySelector(".main"),
  $Footer = d.querySelector(".footer"),
  $FeatureArrow = d.querySelector("#features-arrow-up"),
  $ComapnyArrow = d.querySelector("#company-arrow-up"),
  $MenuFeatures = d.querySelector(".menu-features"),
  $MenuCompany = d.querySelector(".menu-company");

$ButtonsOpen.addEventListener("click", (e) => {
  if (e.target.classList.contains("buttons-menu-open")) {
    $Nav.classList.remove("menu-close");
    $Nav.classList.add("menu-open");
    $Header.classList.add("background-grey");
    $Main.classList.add("background-grey");
    $Footer.classList.add("background-grey");
    $ButtonsOpen.classList.add("hide");
  }
});

$ButtonsClose.addEventListener("click", (e) => {
  if (e.target.classList.contains("buttons-menu-close")) {
    $Nav.classList.remove("menu-open");
    $Nav.classList.add("menu-close");
    $Header.classList.remove("background-grey");
    $Main.classList.remove("background-grey");
    $Footer.classList.remove("background-grey");
    $ButtonsOpen.classList.remove("hide");
  }
});

$FeatureArrow.addEventListener("click", () => {
  $FeatureArrow.classList.toggle("menu-details-icon-up");
  $MenuFeatures.classList.toggle("hide");
});

$ComapnyArrow.addEventListener("click", () => {
  $ComapnyArrow.classList.toggle("menu-details-icon-up");
  $MenuCompany.classList.toggle("hide");
});
