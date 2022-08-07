const formTelInput = document.querySelector(".form-tel--input");
const invalide = document.querySelector(".invalide");
const formTelButton = document.querySelector(".form-tel--button");

formTelInput.onblur = () => {
  if (formTelInput.value.length !== 19) {
    invalide.innerHTML = "Введіть корректний номер телефону!";
  }
};

formTelInput.onfocus = () => {
  invalide.innerHTML = "";
  if (!formTelInput.value) {
    formTelInput.value = "+380 (";
  }
};

formTelButton.addEventListener("click", (event) => {
  if (formTelInput.value.length === 19) {
    console.log(formTelInput.value);
  }
});

formTelInput.oninput = () => {
  if (formTelInput.value.length === 8) {
    formTelInput.value += ") ";
  } else if (
    formTelInput.value.length === 13 ||
    formTelInput.value.length === 16
  ) {
    formTelInput.value += " ";
  }
};
