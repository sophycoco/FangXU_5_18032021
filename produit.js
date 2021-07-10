// get id from Url
function getId() {
    const param = window.location.search;
    console.log(window.location);
    const id = param.replace("?id=", "");
    return id;
};
// add to cart
function addToCart(lensSelected) {
    let cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
    if (cartProduct == null) {
        cartProduct = [];
    }
// add to local storage
    let product = new Product(id, lensSelected);
    cartProduct.push(product);
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
}

fetch("http://localhost:3000/api/cameras", {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ product: getProductId()})
}).then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then((jsonArticleList) => {
    console.log(jsonArticleList);
    for (let jsonArticle of jsonArticleList) {
      let article = new Article(jsonArticle);
      document.querySelector(".productcontainer").innerHTML += `<div class="">
                                                            <div class="card article data-id=${article._id}">
                                                                <div class="card-header ">
                                                                    <h3 class="card-title">${article.name}</h3>
                                                                </div>
                                                                <a href="produit.html?${article._id}"><img src="${article.imageUrl}" class="card-img" /></a>
                                                                <div class="card-body">
                                                                    <p class="card-text">${article.description}</p>
                                                                    <div class="card-lense>
                                                                        <label for="lensChoice">Objectif: </label>
                                                                        <select id="lensChoice">
                                                                        <option value="${article.lenses[0]}">${article.lenses[0]}</option>
                                                                        <option value="${article.lenses[1]}">${article.lenses[1]}</option>
                                                                        <option value="${article.lenses[2]}">${article.lenses[2]}</option>
                                                                        </select>                                                                         
                                                                    </div>
                                                                    <p class="card-text">${article.price}€</p>
                                                                    <button>Ajouter au panier  </button>
                                                                </div>
                                                            </div>
                                                        </div>`;
    }
  });

const id = getId();
fetch("http://localhost:3000/api/cameras/" + id)
.then(function(res) {
    addProductInfo(res);
    })
.catch(function(err) {
    console.log(err);
});