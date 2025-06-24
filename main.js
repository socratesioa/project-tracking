const toggleButton = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".primary-menu");

toggleButton.addEventListener("click", () => {
  const expanded = toggleButton.getAttribute("aria-expanded") === "true";
  toggleButton.setAttribute("aria-expanded", !expanded);

  menu.classList.toggle("active");
  toggleButton.classList.toggle("active");
});
