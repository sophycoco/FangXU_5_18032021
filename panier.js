// sum of order
function addCartProduct(cartinfo, productInfo, productCart, cartProduct, totalPrice) {
  const productContainer = document.getElementsById("cartinfo");
  /*const cartSum = document.createElement("div");
  const divTitle = document.createElement("div");
  divTitle.setAttribute("class", "cart-control"); */
  const name = document.createElement("p");
  name.innerHTML = productInfo.name;
  const image = document.createElement("p");
  image.innerHTML = productionInfo.imageUrl;
  image.setAttribute("src", productInfo.imageUrl);
  image.setAttribute("width", "33%");
  const btn = document.createElement("button");
  btn.innerHTML = "Supprimer";
  btn.setAttribute("class", "cart-delete");
  btn.setAttribute("data-id", productInfo._id);
  const cartLenses = document.createElement("div");
  cartLenses.setAttribute("class", "cartinfo__lense cart-control");
  cartLenses.innerHTML = productCart.lenses;
  const cartPrice = document.createElement("div");
  cartPrice.setAttribute("class", "cart-control");
  cartPrice.innerHTML = productInfo.price + "€";
  totalPrice = productInfo.price++;
  // delete un product from cart
  btn.addEventListener("click", function (e) {
    const id = e.target.getAttribute("date-di");
    for (let x = 0; x != cartProduct.length; x++) {
      if (cartProduct[x].id === id) {
        cartProduct.splice(x, 1);
        break;
      }
    }
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
    window.location.href = "panier.html";
  });
  cartinfo.appendChild(productContainer);
  productContainer.appendChild(cartSum);
  cartSum.appendChild(name);
  cartSum.appendChild(image);
  cartSum.appendChild(btn);
  productContainer.appendChild(cartLenses);
  productContainer.appendChild(cartPrice);
  console.log(name);
}

// customer information form
document.querySelector('.form input[type="button"]').addEventListener("click", function() {
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

// send order
function sendOrder() {
  const famname = document.getElementById("famname").Value;
  const givname = document.getElementById("givname").Value;
  const email = document.getElementById("email").Value;
  const address = document.getElementById("address").Value;

  const formInfo = JSON.parse(famname, givname, email, address);
  const cartContent = JSON.parse(localStorage.getItem("cartContent"));
  let idOrder = [];
  for (let i = 0; i < cartContent.length; i = i++) {
    cartContent[i].id;
    idOrder.push(cartContent[i].id);
  }
  const order = new orderInfo(formInfo, idOrder);
  fetch("http://localhost:3000/api/cameras", {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(order)
    }).then(function(res) {
      localStorage.setItem("cartContent", JSON.stringify([]));
      localStorage.setItem("orderConfirmation", res.orderID);
      window.location = "confirmation.html";
    })
    .catch(function(err) {
      console.log(err);
    });
}