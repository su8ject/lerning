const formTelInput = document.querySelector(".form-tel--input");
const invalide = document.querySelector(".invalide");
const formTelButton = document.querySelector(".form-tel--button");

formTelInput.onblur = () => {
  if (formTelInput.value.length !== 12) {
    invalide.innerHTML = "Введіть корректний номер телефону!";
  }
};

formTelInput.onfocus = () => {
  invalide.innerHTML = "";
  if (!formTelInput.value) {
    formTelInput.value = "380";
  }
};

formTelButton.addEventListener("click", (event) => {
  if (formTelInput.value.length === 12) {
    console.log(formTelInput.value);
  }
});

formTelInput.oninput = () => {
  formTelInput.value = formTelInput.value.replace(/\D/g, "");
};
