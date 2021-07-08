function addConfirmation() {
    const confirmationId = localStorage.getItem("orderConfirmation");
    const totalPrice = localStorage.getItem("totalPriceConfirmation");
    const confirmation = document.getElementById("confirmation");
    const messageConfirmation = document.createElement("p");
    const confirmationPrice = document.createElement("p");
    messageConfirmation.innerHTML = "Merci pour votre commande N° " + confirmationId;
    confirmationPrice.innerHTML = "Prix total de votre commande: " + totalPrice + "€";
    messageConfirmation.setAttribute("class", "confirmation");
    confirmation.appendChild(messageConfirmation);
    confirmation.appendChild(confirmationPrice);
}
addConfirmation();