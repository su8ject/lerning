const additionalThemeButton = document.querySelector(
  ".additional-theme-button"
);
const mainThemeButton = document.querySelector(".main-theme-button");
const footer = document.querySelector(".footer");

onload = (event) => {
  document.documentElement.style.setProperty(
    "--bg-color",
    localStorage.getItem("bg-color")
  );
  document.documentElement.style.setProperty(
    "--primary-color",
    localStorage.getItem("primary-color")
  );
  document.documentElement.style.setProperty(
    "--color-text",
    localStorage.getItem("color-text")
  );
  footer.style.background = localStorage.getItem("footer");
};

additionalThemeButton.addEventListener("click", (event) => {
  document.documentElement.style.setProperty("--bg-color", "#e78f63");
  localStorage.setItem("bg-color", "#e78f63");
  document.documentElement.style.setProperty("--primary-color", "#ad4a2b");
  localStorage.setItem("primary-color", "#ad4a2b");
  document.documentElement.style.setProperty("--color-text", "#fffee9");
  localStorage.setItem("color-text", "#fffee9");
  footer.style.background = "#3d3e3b";
  localStorage.setItem("footer", "#3d3e3b");
});

mainThemeButton.addEventListener("click", (event) => {
  document.documentElement.style.setProperty("--bg-color", "#fffbf0");
  localStorage.setItem("bg-color", "#fffbf0");
  document.documentElement.style.setProperty("--primary-color", "#d5a53c");
  localStorage.setItem("primary-color", "#d5a53c");
  document.documentElement.style.setProperty("--color-text", "black");
  localStorage.setItem("color-text", "black");
  footer.style.background = "#3f2414";
  localStorage.setItem("footer", "#3f2414");
});
