// sum of order
let cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
console.log(cartProduct);

const products = [];
for (l = 0; l < cartProduct.length; l++) {
  let getProductId = cartProduct[l].id;
  products.push(getProductId);
  console.log(products);
}

const productContainer = document.querySelector("#cartinfo");
// if the cart is empty
if (cartProduct == null || cartProduct == 0) {
  productContainer.innerHTML = `<div class="container-cart-empty">
  <p class="cart-empty"> Votre panier est vide. <p>
</div>`;
} else {
  // if the cart is not empty, display the selected cameras
  for (k = 0; k < cartProduct.length; k++) {
    productContainer.innerHTML += `<table>
                                      <tbody>
                                          <tr>
                                              <td>${cartProduct[k].camera}</td>
                                              <td>${cartProduct[k].lensSelected}</td>
                                              <td id="price">${cartProduct[k].priceSelected}€</td>    
                                          </tr>
                                          <tr><td><button class="btn-delete">Supprimer</button></td>
                                          </tr>
                                      </tbody> 
                                  </table>`;
  }
}
// total price calculation
const calculateTotalPrice = [];

for (let m = 0; m < cartProduct.length; m++) {
  let pricesCartProduct = cartProduct[m].priceSelected;
  calculateTotalPrice.push(pricesCartProduct);
  console.log(calculateTotalPrice);
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalPrice = calculateTotalPrice.reduce(reducer, 0);
console.log(totalPrice);

localStorage.setItem("totalPrice", JSON.stringify(totalPrice));

// add to HTML
const totalPriceHtml = document.getElementById("totalprice");
totalPriceHtml.innerHTML += `Total price : ${totalPrice}€`;

// add event listener
const btn = document.querySelector("#btn");
console.log(btn);
btn.addEventListener("click", function (event) {
  event.preventDefault();

  // get form values and put to local storage
  const contact = {
    lastName: document.querySelector("#lastname").value,
    firstName: document.querySelector("#firstname").value,
    email: document.querySelector("#email").value,
    address: document.querySelector("#address").value,
    city: document.querySelector("#city").value,
  };
  localStorage.setItem("contact", JSON.stringify(contact));

  const toSend = {
    products,
    contact,
  };

  console.log(toSend);
  console.log(JSON.stringify(toSend));

  fetch("http://localhost:3000/api/cameras/order", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toSend),
  })
    .then(async (res) => {
      const orderContent = await res.json();
      console.log(orderContent);
      localStorage.setItem("orderId", orderContent.orderId);
    })
    .catch(function (err) {
      //An error has occurred.
    });
});

// customer information form
document.querySelector('.form button[type="button"]').addEventListener("click", function () {
  var valid = true;
  for (let input of document.querySelectorAll(".form input, .form textarea")) {
    valid &= input.reportValidity();
    if (!valid) {
      break;
    }
  }
  if (valid) {
    if (cartProduct != 0) {
      alert("Votre commande a bien été envoyé.");
      window.location = "confirmation.html";
    } else {
      alert("Merci de choisir votre appareil.");
      window.location = "panier.html";
    }
  }
});

// delete button
let btnDelete = document.querySelectorAll(".btn-delete");
console.log(btnDelete);
for (let n = 0; n < btnDelete.length; n++) {
  btnDelete[n].addEventListener("click", function (event) {
    event.preventDefault();
    let lenses_deleteSelecter = cartProduct[n].lensSelected;
    let id_deleteSelecter = cartProduct[n].id;
    console.log(lenses_deleteSelecter);

    cartProduct = cartProduct.filter((el) => el.lensSelected !== lenses_deleteSelecter || el.id !== id_deleteSelecter);
    /*let id_deleteSelecter = cartProduct[n].id;
    console.log(id_deleteSelecter);

    cartProduct = cartProduct.filter((el) => el.id !== id_deleteSelecter);*/
    console.log(cartProduct);

    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
    window.location = "panier.html";
  });
}