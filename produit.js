// get id from Url
function getId() {
  const param = window.location.search;
  console.log(window.location);
  const id = param.replace("?id=", "");
  return id;
}
console.log(getId());

// add to cart
function addToCart(camera, lensSelected, priceSelected) {
  let cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
  
  if (cartProduct == null) {
    cartProduct = [];
  }
  // add to local storage
  let product = new Product(camera, id, lensSelected, priceSelected);
  console.log(product);
  cartProduct.push(product);
  localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
}

const id = getId();
fetch("http://localhost:3000/api/cameras/" + id)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  // add to html
  .then((jsonArticle) => {
    const article = new Article(jsonArticle);

    const priceSelected = article.price;
    const camera = article.name;
    document.querySelector(".productcontainer").innerHTML += `<div class="card-single article data-id=${article._id}">
                                                                  <div class="card-header ">
                                                                      <h3 class="card-title">${article.name}</h3>
                                                                  </div>
                                                                  <img src="${article.imageUrl}" class="card-img" />
                                                                  <div class="card-body">
                                                                      <p class="card-text">${article.description}</p>
                                                                      <div class="card-lense>
                                                                          <label for="lensChoice">Objectif : </label>
                                                                          <select id="lensChoice">
                                                                          <option value="${article.lenses[0]}">${article.lenses[0]}</option>
                                                                          <option value="${article.lenses[1]}">${article.lenses[1]}</option>
                                                                          <option value="${article.lenses[2]}">${article.lenses[2]}</option>
                                                                          </select>                                                                         
                                                                      </div>
                                                                      <p class="card-text" id="price">Prix : ${article.price}€</p>
                                                                      <button id="btn">Ajouter au panier </button>
                                                                  </div>
                                                              </div>`;
                                                        
// add to cart

    const btn = document.getElementById("btn");
    btn.addEventListener("click", function () {
      const lenses = document.getElementById("lensChoice");
      const lensSelected = lenses.value;
      addToCart(camera, lensSelected, priceSelected);
      alert("Ajouté au panier !");
    });
  });
  
  
