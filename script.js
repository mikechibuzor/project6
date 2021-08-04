const hoverMe = document.querySelector(".hover-me");
const dropDownMenu = document.querySelector(".drop-down-menu");

hoverMe.addEventListener("click", () => {
  dropDownMenu.classList.toggle("hide");
});
