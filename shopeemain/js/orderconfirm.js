const shippingDetails = JSON.parse(sessionStorage.getItem('shippingDetails'));

    if (shippingDetails) {
      document.getElementById('recipientName').textContent += `${shippingDetails.firstName} ${shippingDetails.lastName}`;
      document.getElementById('shippingAddress').textContent += shippingDetails.address;
      document.getElementById('contactNumber').textContent += shippingDetails.contactNo;
    }

    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    const itemQuantities = {};
    cartItems.forEach(item => {
      if (itemQuantities[item.name]) {
        itemQuantities[item.name].quantity++;
      } else {
        itemQuantities[item.name] = {
          quantity: 1,
          price: item.price
        };
      }
    });

    const itemsList = document.getElementById('itemsList');
    let totalItems = 0;
    let totalPrice = 0;

    for (const itemName in itemQuantities) {
      if (itemQuantities.hasOwnProperty(itemName)) {
        const item = itemQuantities[itemName];
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
                      <p>Item Name: ${itemName}</p>
                      <p>Quantity: ${item.quantity}</p>
                      <p>Item Price: $${(item.price * item.quantity).toFixed(2)}</p>
                  `;
        itemsList.appendChild(itemElement);

        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
      }
    }

    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
    sessionStorage.removeItem('cartItems');