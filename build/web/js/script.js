// Seleciona os elementos de botão e popup
const signInBtn = document.getElementById("signInBtn");
const locationPopup = document.getElementById("locationPopup");
const closePopupBtn = document.getElementById("closePopupBtn");

// Exibe o popup ao clicar no botão "Find A Store"
signInBtn.addEventListener("click", () => {
    locationPopup.classList.remove("popup-hidden");
});

// Oculta o popup ao clicar no botão "Fechar" dentro do popup
closePopupBtn.addEventListener("click", () => {
    locationPopup.classList.add("popup-hidden");
});
