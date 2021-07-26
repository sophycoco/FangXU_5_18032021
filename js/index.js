fetch("http://localhost:3000/api/cameras")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then((jsonArticleList) => {
    console.log(jsonArticleList);
    for (let jsonArticle of jsonArticleList) {
      let article = new Article(jsonArticle);
      document.querySelector(".container").innerHTML += `<div class="card article data-id=${article._id}">
                                                                    <div class="card-header ">
                                                                        <h3 class="card-title">${article.name}</h3>
                                                                    </div>
                                                                    <a href="produit.html?id=${article._id}">
                                                                      <img src="${article.imageUrl}" class="card-img" />
                                                                    </a>
                                                                    <div class="card-body">
                                                                        <p class="card-text">${article.description}</p>
                                                                        <p class="card-text">Prix : ${article.price}€</p>                                                  
                                                                    </div>
                                                                </div>`;
    }
  })
  .catch(function (err) {
    //An error has occurred.
  });