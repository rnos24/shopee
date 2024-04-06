const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('id');

const products = JSON.parse(localStorage.getItem('products'));
const product = products.find(item => item.id == productId);

if (product) {
  document.getElementById('linkProductName').textContent = product.name;
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productImage').src = product.imageUrl;
  document.getElementById('productDescription').textContent = product.longDesc;
  document.getElementById('productPrice').textContent = `Price: $${product.price}`;

  document.getElementById('addToCartBtn').addEventListener('click', () => {
    console.log(`Added ${product.name} to cart`);
    addToCart(product);
  });
} else {
  document.getElementById('linkProductName').textContent = 'Product Not Found';
  document.getElementById('productName').textContent = 'Product Not Found';
  const addToCartBtn = document.getElementById('addToCartBtn');
  addToCartBtn.parentNode.removeChild(addToCartBtn);
}

function addToCart(product) {
  let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  const {imageUrl, name, price} = product;
  cartItems.push({imageUrl, name, price});
  sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}
