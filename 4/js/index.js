const phone = document.querySelectorAll(".phone");

for (item of phone) {
  item.addEventListener("click", (event) => {
    console.log(event.target.innerHTML);
    navigator.clipboard.writeText(event.target.innerHTML);
  });
}
