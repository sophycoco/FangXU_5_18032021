// get order id from local storage
const orderId = localStorage.getItem("orderId");
const totalPrice = localStorage.getItem("totalPrice");

// add to HTML
const confirmId = document.querySelector("#sumOrder");
if (totalPrice != 0 && totalPrice != null) {
confirmId.innerHTML += 
`<h2>Merci pour votre commande.</h2>
<p class="center">Votre commande N° <span class="insert">${orderId} </span>à bien été prises en compte.</p>
<p class="center">Le montant de votre commande est de : ${totalPrice} <span class="insert"></span>euros. </p>`;}