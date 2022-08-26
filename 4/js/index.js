const phone = document.querySelectorAll(".phone");
const cardNameText = document.querySelectorAll(".card-name--text");
const notification = document.querySelector(".notification");
const takeAway = () => {
  notification.innerHTML = "";
  notification.classList.remove("active");
};
const body = document.querySelector("body");
const mask = document.querySelector(".mask");

window.onload = () => {
  if (localStorage.getItem("theme") === "additional") {
    document.documentElement.style.setProperty("--bg-color", "#e78f63");
    document.documentElement.style.setProperty("--primary-color", "#ad4a2b");
    document.documentElement.style.setProperty("--color-text", "#fffee9");
    footer.style.background = "#3d3e3b";
  }
};

for (item of phone) {
  item.addEventListener("click", (event) => {
    navigator.clipboard.writeText(event.target.innerHTML);
    notification.innerHTML = "Скопійовано!";
    notification.classList.add("active");
    setTimeout(takeAway, 1000);
  });
}
