
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];
var deleteBtn = document.getElementById("deleteSelected");
var selectAllCheckbox = document.getElementById("selectAll");

btn.onclick = function () {
  modal.style.display = "block";
  updateCartModal();
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function updateCartModal() {
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  cartItemsContainer.innerHTML = '';

  const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

  let totalPrice = 0;

  cartItems.forEach(item => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('cart-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = item.name;
    itemContainer.appendChild(checkbox);

    const image = document.createElement('img');
    image.src = item.imageUrl;
    itemContainer.appendChild(image);

    const name = document.createElement('p');
    name.textContent = item.name;
    itemContainer.appendChild(name);

    const price = document.createElement('p');
    price.textContent = `Price: $${item.price}`;
    itemContainer.appendChild(price);

    cartItemsContainer.appendChild(itemContainer);
    totalPrice += item.price;
  });


  const totalPriceDisplay = document.createElement('p');
  totalPriceDisplay.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  totalPriceDisplay.classList.add('total-price');
  cartItemsContainer.appendChild(totalPriceDisplay);


  deleteBtn.onclick = function () {
    const checkboxes = document.querySelectorAll('#cartItemsContainer input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
      const itemName = checkbox.value;
      const index = cartItems.findIndex(item => item.name === itemName);
      if (index !== -1) {
        cartItems.splice(index, 1);
      }
    });
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartModal();
  };

  selectAllCheckbox.onclick = function () {
    const checkboxes = document.querySelectorAll('#cartItemsContainer input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  };
}
