// sum of order
const cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
console.log(cartProduct);
const productContainer = document.querySelector("#cartinfo");
console.log(productContainer);
// if the cart is empty
if (cartProduct === null) {
  const cartEmpty = `<div class="container-cart-empty">
                        <div> Votre panier est vide. </div>
                      </div>`;
  productContainer.innerHTML = cartEmpty;
} else {
  // if the cart is not empty, display the selected cameras
  for (k = 0; k < cartProduct.length; k++) {
    productContainer.innerHTML += `<table>
                                     <!--<thead>
                                          <tr>
                                              <th>Produits Sélectionnés</th>
                                              <th>Objectifs Sélectionnés</th>
                                              <th>Prix</th>
                                          </tr>
                                      </thead>  -->
                                      <tbody>
                                          <tr>
                                              <td>${cartProduct[k].camera}</td>
                                              <td>${cartProduct[k].lensSelected}</td>
                                              <td id="price">${cartProduct[k].priceSelected}€</td>
                                              <td><button>Supprimer</button></td>
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

// add to HTML
const totalPriceHtml = document.getElementById("totalprice");
totalPriceHtml.innerHTML += `Total price : ${totalPrice}€`;

// add event listener
const btn = document.querySelector("#btn");
console.log(btn);
btn.addEventListener("click", function (event) {
  event.preventDefault();

  // get form values and put to local storage
  const formValues = {
    lastmane: document.querySelector("#lastname").value,
    firstname: document.querySelector("#firstname").value,
    email: document.querySelector("#email").value,
    address: document.querySelector("#address").value,
    city: document.querySelector("#city").value,
  };
  localStorage.setItem("formValues", JSON.stringify(formValues));

  // put the values to an object
  const form = {
    lastname: localStorage.getItem("lastname"),
    firstname: localStorage.getItem("firstname"),
    email: localStorage.getItem("email"),
    address: localStorage.getItem("address"),
    city: localStorage.getItem("city"),
  };

  const toSend = {
    cartProduct,
    form,
  };
  console.log(toSend);



  fetch("http://localhost:3000/api/cameras/order", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toSend),
  })
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
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
      alert("Votre commande a bien été envoyé.");
    }
  });

/*
function addCartProduct(productInfo, productCart, cartProduct, totalPrice) {
  const productContainer = document.getElementsById("cartinfo");
  const divTitle = document.getElementsByClassName("cartinfo__title cart-control");
  const name = document.createElement("p");
  name.innerHTML = productInfo.name;
  const image = document.createElement("img");
  image.innerHTML = productionInfo.imageUrl;
  image.setAttribute("src", productInfo.imageUrl);
  image.setAttribute("width", "33%");
  const btn = document.createElement("button");
  btn.innerHTML = "Supprimer";
  btn.setAttribute("class", "cart-delete");
  btn.setAttribute("data-id", productInfo._id);
  const cartLenses = document.getElementsByClassName("cartinfo__lense cart-control");
  cartLenses.innerHTML = productCart.lenses;
  const cartPrice = document.getElementsByClassName("cartinfo__price cart-control");
  cartPrice.innerHTML = productInfo.price + "€";
  totalPrice = productInfo.price++;
  // delete un product from cart
  btn.addEventListener("click", function (e) {
    const id = e.target.getAttribute("data-id");
    for (let x = 0; x != cartProduct.length; x++) {
      if (cartProduct[x].id === id) {
        cartProduct.splice(x, 1);
        break;
      }
    }
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
    window.location.href = "panier.html";
  });

  productContainer.appendChild(divTitle);
  divTitle.appendChild(name);
  divTitle.appendChild(image);
  divTitle.appendChild(btn);
  productContainer.appendChild(cartLense);
  productContainer.appendChild(cartPrice);
  console.log(name);

  return totalPrice;
} 

// send order
function sendOrder() {
  const lastName = document.getElementById("lastname").Value;
  const firstName = document.getElementById("firstname").Value;
  const email = document.getElementById("email").Value;
  const address = document.getElementById("address").Value;
  const city = document.getElementById("city").Value;

  const customerFormInfo = new infoForm(lastName, firstName, email, address, city);
  const cartContent = JSON.parse(localStorage.getItem("cartProduct"));
  let idOrder = [];
  for (let i = 0; i < cartContent.length; i = i++) {
    cartContent[i].id;
    idOrder.push(cartProduct[i].id);
  }
  const order = new orderInfo(customerFormInfo, idOrder);
  fetch("http://localhost:3000/api/cameras/order", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then(function (res) {
      localStorage.setItem("cartContent", JSON.stringify([]));
      localStorage.setItem("orderConfirmation", res.orderId);
      window.location = "confirmation.html";
    })
    .catch(function (err) {
      console.log(err);
    });
}

fetch("http://localhost:3000/api/cameras/")
  .then(function (res) {
    const cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
    const cartInfo = document.createElement("product-cart");
    if (cartProduct.length == 0) {
      emptyCartMessage(cartInfo);
    } else {
      let totalPrice = 0;
      const cartContent = JSON.parse(localStorage.getItem("cartProduct"));
      for (let productCart of cartContent) {
        for (let productInfo of res) {
          if (productCart.id == productInfo._id) {
            totalPrice = addCartProduct(productInfo, productCart, cartProduct, totalPrice);
            localStorage.setItem("totalPriceConfiarmationPage", totalPrice);
          }
        }
      }

      const totalPriceCart = document.getElementsById("total-price");
      totalPriceCart.innerHTML = "Total : " + totalPrice + "€";
    }
    
if (res.ok) {
  return res.json();
}
  })
  .catch(function (err) {
    console.log(err);
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
    alert("Votre commande a bien été envoyé.");
  }
}); 


const btn = document.querySelector('.form button[type="button"]');

btn.addEventListener("click", function (event) {
  event.preventDefault();
  
    sendOrder();
  
}); */
