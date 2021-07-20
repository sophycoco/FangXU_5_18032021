// get order id from local storage
const orderId = localStorage.getItem("orderId");
const totalPrice = localStorage.getItem("totalPrice");

// add to HTML
const confirmId = document.querySelector("#sumOrder");
confirmId.innerHTML += `<p>Votre commande N° <span class="insert">${orderId} </span>à bien été prises en compte.</p>
                        <p>Le montant de votre commande est de : ${totalPrice} <span class="insert"></span>euros. </p>`
                        ;
