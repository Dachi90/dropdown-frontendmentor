const d = document,
  $ButtonsOpen = d.querySelector(".buttons-menu-open"),
  $ButtonsClose = d.querySelector(".buttons-menu-close"),
  $Nav = d.querySelector(".hide");

$ButtonsOpen.addEventListener("click", (e) => {
  if (e.target.classList.contains("buttons-menu-open")) {
    $Nav.classList.add("menu-open");
  }
});

$ButtonsClose.addEventListener("click", (e) => {
  if (e.target.classList.contains("buttons-menu-close")) {
    $Nav.classList.remove("menu-open");
  }
});
