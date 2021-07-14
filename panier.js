// sum of order
const productContainer = document.querySelector("#cartinfo");
const divTitle = document.getElementsByClassName("cartinfo__title cart-control");
const camera = document.createElement("p");
camera.innerHTML = cartProduct.name;
const cartLenses = document.getElementsByClassName("cartinfo__lense cart-control");
document.body.insertBefore(camera, divTitle);
console.log(camera);
divTitle.appendChild(camera);

console.log(divTitle);
function addCartProduct(productInfo, productCart, cartProduct, totalPrice) {
  /*const productContainer = document.getElementsById("cartinfo");

  const divTitle = document.getElementsByClassName("cartinfo__title cart-control");*/
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
console.log(productContainer);

// customer information form
document.querySelector('.form input[type="button"]').addEventListener("click", function () {
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

  const formInfo = new infoForm(famname, givname, email, address);
  const cartContent = JSON.parse(localStorage.getItem("cartProduct"));
  let idOrder = [];
  for (let i = 0; i < cartContent.length; i = i++) {
    cartContent[i].id;
    idOrder.push(cartProduct[i].id);
  }
  const order = new orderInfo(formInfo, idOrder);
  fetch("http://localhost:3000/api/cameras/order", {
    method: "POST",
    headers: {
      Accept: "application/json",
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

function emptyCartMessage(cartInfo) {
  const emptyCart = document.createElement("div");
  emptyCart.innerHTML = "Votre panier est vide.";
  cartInfo.appendChild(emptyCart);
  return cartInfo;
}

fetch("http://localhost:3000/api/cameras/")
  .then(function (res) {
    const cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
    const cartInfo = document.createElement("product-cart");
    if (cartProduct.length == 0) {
      emptyCartMessage(cartInfo);
    } else {
      let totalPrice = 0;
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
    /*
if (res.ok) {
  return res.json();
}*/
  })
  .catch(function (err) {
    console.log(err);
  });

const btn = document.getElementsById("btn");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (valid == true) {
    sendOrder();
  }
});
