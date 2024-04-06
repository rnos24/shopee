function search(){
    var value = document.getElementById("searchBar").value;
    var products = JSON.parse(localStorage.getItem("products"))
    var id = -1;
    for (let i = 0; i < products.length; i++) {
      if (value === products[i].name) {
        id=products[i].id;
      }

    }
    window.location.href = "product.html?id=" + id;
  }