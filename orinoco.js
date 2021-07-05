fetch("http://localhost:3000/api/cameras")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    console.log(value);
    document.querySelector(".container").innerHTML += `<div class="">
                                                            <div class="card article">
                                                                <div class="card-header ">
                                                                    <h3 class="card-title">(${value.name})</h3>
                                                                </div>
                                                                <img src="${image}" class="card-img-top">
                                                                <div class="card-body">
                                                                    <p class="card-text">${value.description}</p>
                                                                    <!--lenses-->
                                                                    <p class="card-price">${value.price}</p>
                                                                </div>
                                                            </div>
                                                        </div>`;
  })
  .catch(function (err) {
    //An error has occurred.
  });

/*function addArticle() {
  document.querySelector(".container").innerHTML += `<div class="">
                                                            <div class="card article">
                                                                <div class="card-header ">
                                                                    <h3 class="card-title">${article.name}</h3>
                                                                </div>
                                                                <img src="${image}" class="card-img-top">
                                                                <div class="card-body">
                                                                    <p class="card-text">${article.description}</p>
                                                                    <!--lenses-->
                                                                    <p class="card-price">${article.price}</p>
                                                                </div>
                                                            </div>
                                                        </div>`;
}

addArticle(); */