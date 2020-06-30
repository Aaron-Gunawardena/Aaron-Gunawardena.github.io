if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
  alert('Thank you for your purchase. We will be delivering your order soon. Enjoy !')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}




function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
  var qty = Number(shopItem.getElementsByClassName('shop-item-qty')[0].value);

  if (qty == 0) {
    qty = 1;
  }
  addItemToCart(title, price, qty)
  updateCartTotal()
}

function addItemToCart(title, price, qty) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]

  var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="${qty}" disabled >
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price = parseFloat(priceElement.innerText.replace('LKR', ''))
    var quantity = quantityElement.value
    total = total + (price)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = 'LKR  ' + total
}


//----- Calculating and displaying the current drink cost
function latteChoiceMade() {
  var size = document.getElementsByName("sizeLatte");
  var extras = document.getElementsByName("extrasLatte");
  var quantity = Number(document.getElementsByName("qtyLatte")[0].value);

  var sizePrice = 0;
  var extraPrice = 0;
  var drinkPrice;

  if (quantity == 0) {
    quantity = 1;
  }
  if (size[0].checked) {
    sizePrice = Number(size[0].value);
  }
  if (size[1].checked) {
    sizePrice = Number(size[1].value);
  }
  if (size[2].checked) {
    sizePrice = Number(size[2].value);
  }
  if (extras[0].checked) {
    extraPrice = Number(extras[0].value) + extraPrice;
  }
  if (extras[1].checked) {
    extraPrice = Number(extras[1].value) + extraPrice;
  }
  if (extras[2].checked) {
    extraPrice = Number(extras[2].value) + extraPrice;
  }
  if (extras[3].checked) {
    extraPrice = Number(extras[3].value) + extraPrice;
  }
  if (extras[4].checked) {
    extraPrice = Number(extras[4].value) + extraPrice;
  }

  drinkPrice = sizePrice + extraPrice;
  drinkPrice = drinkPrice * quantity;
  var priceString = "LKR " + drinkPrice;

  document.getElementsByClassName('shop-item-price')[0].innerText = priceString;
}

function cuppChoiceMade() {
  var size = document.getElementsByName("sizeCupp");
  var extras = document.getElementsByName("extrasCupp");
  var quantity = Number(document.getElementsByName("qtyCupp")[0].value);

  var sizePrice = 0;
  var extraPrice = 0;
  var drinkPrice;

  if (quantity == 0) {
    quantity = 1;
  }
  if (size[0].checked) {
    sizePrice = Number(size[0].value);
  }
  if (size[1].checked) {
    sizePrice = Number(size[1].value);
  }
  if (size[2].checked) {
    sizePrice = Number(size[2].value);
  }
  if (extras[0].checked) {
    extraPrice = Number(extras[0].value) + extraPrice;
  }
  if (extras[1].checked) {
    extraPrice = Number(extras[1].value) + extraPrice;
  }
  if (extras[2].checked) {
    extraPrice = Number(extras[2].value) + extraPrice;
  }
  if (extras[3].checked) {
    extraPrice = Number(extras[3].value) + extraPrice;
  }
  if (extras[4].checked) {
    extraPrice = Number(extras[4].value) + extraPrice;
  }

  drinkPrice = sizePrice + extraPrice;
  drinkPrice = drinkPrice * quantity;
  var priceString = "LKR " + drinkPrice;

  document.getElementsByClassName('shop-item-price')[1].innerText = priceString;
}

function flatChoiceMade() {
  var size = document.getElementsByName("sizeFlat");
  var extras = document.getElementsByName("extrasFlat");
  var quantity = Number(document.getElementsByName("qtyFlat")[0].value);

  var sizePrice = 0;
  var extraPrice = 0;
  var drinkPrice;

  if (quantity == 0) {
    quantity = 1;
  }
  if (size[0].checked) {
    sizePrice = Number(size[0].value);
  }
  if (size[1].checked) {
    sizePrice = Number(size[1].value);
  }
  if (size[2].checked) {
    sizePrice = Number(size[2].value);
  }
  if (extras[0].checked) {
    extraPrice = Number(extras[0].value) + extraPrice;
  }
  if (extras[1].checked) {
    extraPrice = Number(extras[1].value) + extraPrice;
  }
  if (extras[2].checked) {
    extraPrice = Number(extras[2].value) + extraPrice;
  }
  if (extras[3].checked) {
    extraPrice = Number(extras[3].value) + extraPrice;
  }
  if (extras[4].checked) {
    extraPrice = Number(extras[4].value) + extraPrice;
  }

  drinkPrice = sizePrice + extraPrice;
  drinkPrice = drinkPrice * quantity;
  var priceString = "LKR " + drinkPrice;

  document.getElementsByClassName('shop-item-price')[2].innerText = priceString;
}

function esChoiceMade() {
  var size = document.getElementsByName("sizeEs");
  var extras = document.getElementsByName("extrasEs");
  var quantity = Number(document.getElementsByName("qtyEs")[0].value);

  var sizePrice = 0;
  var extraPrice = 0;
  var drinkPrice;

  if (quantity == 0) {
    quantity = 1;
  }
  if (size[0].checked) {
    sizePrice = Number(size[0].value);
  }
  if (size[1].checked) {
    sizePrice = Number(size[1].value);
  }
  if (size[2].checked) {
    sizePrice = Number(size[2].value);
  }
  if (extras[0].checked) {
    extraPrice = Number(extras[0].value) + extraPrice;
  }
  if (extras[1].checked) {
    extraPrice = Number(extras[1].value) + extraPrice;
  }
  if (extras[2].checked) {
    extraPrice = Number(extras[2].value) + extraPrice;
  }
  if (extras[3].checked) {
    extraPrice = Number(extras[3].value) + extraPrice;
  }
  if (extras[4].checked) {
    extraPrice = Number(extras[4].value) + extraPrice;
  }

  drinkPrice = sizePrice + extraPrice;
  drinkPrice = drinkPrice * quantity;
  var priceString = "LKR " + drinkPrice;

  document.getElementsByClassName('shop-item-price')[3].innerText = priceString;
}

function amChoiceMade() {
  var size = document.getElementsByName("sizeAm");
  var extras = document.getElementsByName("extrasAm");
  var quantity = Number(document.getElementsByName("qtyAm")[0].value);

  var sizePrice = 0;
  var extraPrice = 0;
  var drinkPrice;

  if (quantity == 0) {
    quantity = 1;
  }
  if (size[0].checked) {
    sizePrice = Number(size[0].value);
  }
  if (size[1].checked) {
    sizePrice = Number(size[1].value);
  }
  if (size[2].checked) {
    sizePrice = Number(size[2].value);
  }
  if (extras[0].checked) {
    extraPrice = Number(extras[0].value) + extraPrice;
  }
  if (extras[1].checked) {
    extraPrice = Number(extras[1].value) + extraPrice;
  }
  if (extras[2].checked) {
    extraPrice = Number(extras[2].value) + extraPrice;
  }
  if (extras[3].checked) {
    extraPrice = Number(extras[3].value) + extraPrice;
  }
  if (extras[4].checked) {
    extraPrice = Number(extras[4].value) + extraPrice;
  }

  drinkPrice = sizePrice + extraPrice;
  drinkPrice = drinkPrice * quantity;
  var priceString = "LKR " + drinkPrice;

  document.getElementsByClassName('shop-item-price')[4].innerText = priceString;
}
