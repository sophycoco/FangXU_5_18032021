// get order id from local storage
const resId = localStorage.getItem("resId");

const totalPrice = localStorage.getItem("totalPrice");

// add to HTML
const confirmId = document.querySelector("#sumOrder");
confirmId.innerHTML += `<p>Votre commande N° <span class="insert">${resId} </span>à bien été prises en compte.</p>
                        <p>Le montant de votre commande est de : ${totalPrice} <span class="insert"></span>euros. </p>`
                        ;
