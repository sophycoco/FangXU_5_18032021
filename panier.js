/* sum of order */
function addCartProduct(cartinfo, productInfo, productCart, cartContent, totalPrice) {
  const productContainer = document.getElementsByClassName("cartinfo");
  const cartSum = document.createElement("div");
  const divTitle = document.createElement("div");
  divTitle.setAttribute("class", "cart-control");
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
    for (let x = 0; x != cartContent.length; x++) {
      if (cartContent[x].id === id) {
        cartContent.splice(x, 1);
        break;
      }
    }
    localStorage.setItem("cartContent", JSON.stringify(cartContent));
    window.location.href = "panier.html";
  });
  cartinfo.appendChild(productContainer);
  productContainer.appendChild(cartSum);
  cartSum.appendChild(name);
  cartSum.appendChild(image);
  cartSum.appendChild(btn);
  productContainer.appendChild(cartLenses);
  productContainer.appendChild(cartPrice);
}

/* customer information form */
document.querySelector('.form input[type="button"]').addEventListener("click", function () {
  var valid = true;
  for (let input of document.querySelectorAll(".form input")) {
    valid &= input.reportValidity();
    if (!valid) {
      break;
    }
  }
  if (valid) {
    alert("Votre commande a bien été envoyé.");
  }
});
