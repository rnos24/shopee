const cartItemsContainer = document.getElementById('cartItemsContainer');
const totalPriceElement = document.getElementById('totalPrice');
const itemCountElement = document.getElementById('itemCount');
const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

let totalPrice = 0;
let itemCount = cartItems.length;

cartItems.forEach(item => {
  totalPrice += item.price;
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('cart-item');

  const image = document.createElement('img');
  image.src = item.imageUrl;
  itemContainer.appendChild(image);

  const name = document.createElement('p');
  name.textContent = item.name;
  itemContainer.appendChild(name);

  const price = document.createElement('p');
  price.textContent = `Price: $${item.price.toFixed(2)}`;
  itemContainer.appendChild(price);

  cartItemsContainer.appendChild(itemContainer);
});

totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
itemCountElement.textContent = itemCount;

function cancelOrder() {
  sessionStorage.removeItem('cartItems');
  window.location.href = 'index.html';
}

function placeOrder() {
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const address = document.getElementById('address').value;
    const contactNo = document.getElementById('contactno').value;

    const shippingDetails = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        contactNo: contactNo
    };

    sessionStorage.setItem('shippingDetails', JSON.stringify(shippingDetails));

    window.location.href = 'orderconfirmationpage.html';
}