// Gestion des produits, enregistrement d'un article en favoris, retrait d'un article des favoris et récupération de la liste des produits choisis.

 function addProduct(articleId){
    let productList = getProducts();
    productList.push({id: articleId});
    saveProducts(productList);
}
/*
function removeProduct(articleId) {
    let productList = getProducts();
    productList = productList.filter(product => product.id != articleId);
    saveProducts(productList);
} */

function getProducts() {
    let productList = localStorage.getItem("productList");
    if(productList == null) {
        return [];
    }else {
        return JSON.parse(productList);
    }
}

function getProductId() {
    return getProducts().map(product =>product.id);
}

function saveProducts(productList) {
    localStorage.setItem("productList", JSON.stringify(productList));
}