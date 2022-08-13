const additionalThemeButton = document.querySelector(
  ".additional-theme-button"
);
const mainThemeButton = document.querySelector(".main-theme-button");
const footer = document.querySelector(".footer");

additionalThemeButton.addEventListener("click", (event) => {
  document.documentElement.style.setProperty("--bg-color", "#e78f63");
  document.documentElement.style.setProperty("--primary-color", "#ad4a2b");
  document.documentElement.style.setProperty("--color-text", "#fffee9");
  footer.style.background = "#3d3e3b";
  localStorage.setItem("theme", "additional");
});

mainThemeButton.addEventListener("click", (event) => {
  document.documentElement.style.setProperty("--bg-color", "#fffbf0");
  document.documentElement.style.setProperty("--primary-color", "#d5a53c");
  document.documentElement.style.setProperty("--color-text", "black");
  footer.style.background = "#3f2414";
  localStorage.setItem("theme", "main");
});
