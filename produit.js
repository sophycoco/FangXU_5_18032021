// get id from Url
function getId() {
    const param = window.location.search;
    console.log(window.location);
    const id = param.replace("?id=", "");
    return id;
};
// add to cart
function addToCart(lens) {
    let cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
    if (cartProduct === null) {
        cartProduct = [];
    }
    // add to local storage
    let product = new Product(id, lensSelected);
    cartProduct.push(product);
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
}
// add to HTLM
function addProductInfo(res) {
// selected camera
    const container = document.getElementsByClassName("productcontainer");
    const div = document.createElement("div");
    div.setAttribute("class", "product-card");
    const title = document.createElement("div");
    title.innerHTML = res.name;
    const img = document.createElement("img");
    img.setAttribute("src", res.imageUrl);
    const description = document.createElement("p");
    description.innerHTML = res.description;
    const price = document.createElement("p");
    price.innerHtML = res.price + "€";
    const lenses = document.createElement("select");
    const optionDefault = document.createElement("option");
    optionDefault.innerHTML = "Choisisez votre objectif";
    lenses.appendChild(optionDefault);
    const btn = document.createElement("button");
    btn.innerHTML = "Ajouter au panier";
    btn.addEventListener("click", function() {
        const lenses = document.getElementsByTagName("select");
        const lensSelected = lenses[0].value;
        addToCart(lensSelected);
        alert("Ajouté au panier !");
    })


    
    for (let i = 0; i<res.lenses.length; i++) {
        const option = document.createElement("option");
        option.setAttribute("value", res.lenses[i]);
        option.innerHTML = res.lenses[i];
        lenses.appendChild(option);
    }

    container.appendChild(div);
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(description);
    div.appendChild(lenses);
    div.appendChild(price);
    div.appendChild(btn);
}

const id = getId();
fetch("http://localhost:3000/api/cameras/" + id)
    .then(function(res) {
        addProductInfo(res);
    })
    .catch(function(err) {
        console.log(err);
    })