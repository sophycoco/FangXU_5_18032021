/**
 * Gestion des produits, enregistrement d'un article en favoris, retrait d'un article des favoris et récupération de la liste des produits choisis.
 */

 function addProducts(articleId){
    let productList = getProducts();
    productList.push({id: articlesId});
    saveProducts(productList);
}

function getProducts() {
    let productList = localStorage.getItem("productList");
    if(productList == null) {
        return [];
    }else {
        return JSON.parse(productList);
    }
}

function saveProducts(productList) {
    localStorage.setItem("productList", JSON.stringify(productList));
}