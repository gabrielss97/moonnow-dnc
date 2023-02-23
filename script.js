const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const emails = ["hotmail.com", "gmail.com", "yahoo.com", "outlook.com"];
let namePass = false;
let emailPass = false;

form.addEventListener("submit", (event) => {
  if (nameInput.value === "") {
    nameError.textContent = "Por favor, preencha seu nome";
    nameError.classList.add("error");
  } else {
    nameError.textContent = "";
    nameError.classList.remove("error");
    namePass = true;
  }

  if (emailInput.value === "") {
    emailError.textContent = "Por favor, preencha seu e-mail";
    emailError.classList.add("error");
  } else if (!emailInput.value.includes("@")) {
    emailError.textContent = "Insira um provedor de e-mail";
  } else if (emailInput.value.split("@").length === 2) {
    const provider = emailInput.value.split("@")[1];
    if (emails.some((element) => provider === element)) {
      emailError.textContent = "";
      emailError.classList.remove("error");
      emailPass = true;
    }
  }

  if (!namePass || !emailPass) {
    event.preventDefault();
  }
});
