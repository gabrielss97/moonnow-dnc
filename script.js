// Seleciona o elemento do formulário e os campos de nome, e-mail e as mensagens de erro e sucesso
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const success = document.querySelector("#success");

// Define os provedores de e-mail válidos
const emails = ["hotmail.com", "gmail.com", "yahoo.com", "outlook.com"];

// Define variáveis que serão utilizadas para verificar se os campos estão preenchidos corretamente
let namePass = false;
let emailPass = false;

// Adiciona um evento de submit ao formulário
form.addEventListener("submit", (event) => {
  // Impede que a página seja recarregada ao enviar o formulário
  event.preventDefault();

  // Verifica se o campo de nome está preenchido e exibe mensagem de erro se não estiver
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Por favor, preencha seu nome";
    nameError.classList.add("error");
  } else {
    nameError.textContent = "";
    nameError.classList.remove("error");
    namePass = true;
  }

  // Verifica se o campo de e-mail está preenchido e é um e-mail válido, exibindo mensagem de erro se não for
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Por favor, preencha seu e-mail";
    emailError.classList.add("error");
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
    emailError.textContent = "Insira um e-mail válido";
    emailError.classList.add("error");
  } else {
    const provider = emailInput.value.split("@")[1];
    // Verifica se o provedor de e-mail está dentro dos provedores válidos e define emailPass como true se for
    if (emails.includes(provider)) {
      emailError.textContent = "";
      emailError.classList.remove("error");
      emailPass = true;
    } else {
      emailError.textContent = "Insira um e-mail válido";
      emailError.classList.add("error");
    }
  }

  // Verifica se os campos de nome e e-mail estão preenchidos corretamente e exibe mensagem de sucesso se estiverem
  if (namePass && emailPass) {
    success.textContent = "Formulário enviado com sucesso";
    success.classList.add("success-style");
    // Limpa os campos de nome e e-mail
    nameInput.value = "";
    emailInput.value = "";
    // Reseta as variáveis de validação dos campos
    namePass = false;
    emailPass = false;
  } else {
    // Limpa a mensagem de sucesso se os campos não estiverem preenchidos corretamente
    success.textContent = "";
    success.classList.remove("success-style");
  }
});
