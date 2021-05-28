// Get the value of the select id="burgerPrice"
// set the price based on the value
// set the price as the text of the td cell beside it

function setBurgerPrice() {
  console.log("Burger select change");
  var price;
  var burgerPrice = document.getElementById("burgerPrice");

  if (burgerChoice.value == "vegan-burger") {
    price = 9;
    burgerPrice.textContent = price;
  }
  if (burgerChoice.value == "plain-burger") {
    price = 6;
    burgerPrice.textContent = price;
  }
  if (burgerChoice.value == "cheese-burger") {
    price = 7;
    burgerPrice.textContent = price;
  }
  if (burgerChoice.value == "chicken-burger") {
    price = 8;
    burgerPrice.textContent = price;
  }
}

function setChipsPrice() {
  console.log("Chips select change");
  var price;
  var chipsPrice = document.getElementById("chipsPrice");

  if (chipsChoice.value == "plain-chips") {
    price = 3;
    chipsPrice.textContent = price;
  }
  if (chipsChoice.value == "cheese-chips") {
    price = 5;
    chipsPrice.textContent = price;
  }
  if (chipsChoice.value == "taco-chips") {
    price = 6;
    chipsPrice.textContent = price;
  }
  if (chipsChoice.value == "curry-chips") {
    price = 5;
    chipsPrice.textContent = price;
  }
  if (chipsChoice.value == "no-chips") {
    price = 0;
    chipsPrice.textContent = price;
  }
}

function setSodaPrice() {
  console.log("Soda value changed");
  var price;
  sodaPrice = document.getElementById("sodaPrice");

  if (sodaChoice.value == "coke") {
    price = 2;
    sodaPrice.textContent = price;
  }
  if (sodaChoice.value == "fanta") {
    price = 2;
    sodaPrice.textContent = price;
  }
  if (sodaChoice.value == "sprite") {
    price = 2;
    sodaPrice.textContent = price;
  }
  if (sodaChoice.value == "no-drink") {
    price = 0;
    sodaPrice.textContent = price;
  }
}

function setBurgerQuantity() {
  console.log("Quantity value changed");
  var price;
  burgerQuantity = document.getElementById("burgerQuantity");
  if (burgerQuantity.value == "burgerQuan1") {
    console.log("You chose 1");
    var currentPrice = document.getElementById("burgerPrice");
    price = currentPrice.textContent;
    var newPrice = price * 1;
    currentPrice.textContent = newPrice;
  }
  if (burgerQuantity.value == "burgerQuan2") {
    console.log("You chose 2");
    var currentPrice = document.getElementById("burgerPrice");
    price = currentPrice.textContent;
    var newPrice = price * 2;
    currentPrice.textContent = newPrice;
  }
  if (burgerQuantity.value == "burgerQuan3") {
    console.log("You chose 3");
    var currentPrice = document.getElementById("burgerPrice");
    price = currentPrice.textContent;
    var newPrice = price * 3;
    currentPrice.textContent = newPrice;
  }
  if (burgerQuantity.value == "burgerQuan4") {
    console.log("You chose 4");
    var currentPrice = document.getElementById("burgerPrice");
    price = currentPrice.textContent;
    var newPrice = price * 4;
    currentPrice.textContent = newPrice;
  }
  if (burgerQuantity.value == "burgerQuan5") {
    console.log("You chose 5");
    var currentPrice = document.getElementById("burgerPrice");
    price = currentPrice.textContent;
    var newPrice = price * 5;
    currentPrice.textContent = newPrice;
  }
  if (burgerQuantity.value == "burgerQuan6") {
    console.log("You chose 6");
    var currentPrice = document.getElementById("burgerPrice");
    price = currentPrice.textContent;
    var newPrice = price * 6;
    currentPrice.textContent = newPrice;
  }
  if (burgerQuantity.value == "burgerQuan0") {
    console.log("You chose 0");
    var currentPrice = document.getElementById("burgerPrice");
    price = currentPrice.textContent;
    var newPrice = price * 0;
    currentPrice.textContent = newPrice;
  }
}

function setChipsQuantity() {
  console.log("Quantity value changed");
  var price;
  chipsQuantity = document.getElementById("chipsQuantity");
  if (chipsQuantity.value == "chipsQuan1") {
    console.log("You chose 1");
    var currentPrice = document.getElementById("chipsPrice");
    price = currentPrice.textContent;
    var newPrice = price * 1;
    currentPrice.textContent = newPrice;
  }
  if (chipsQuantity.value == "chipsQuan2") {
    console.log("You chose 2");
    var currentPrice = document.getElementById("chipsPrice");
    price = currentPrice.textContent;
    var newPrice = price * 2;
    currentPrice.textContent = newPrice;
  }
  if (chipsQuantity.value == "chipsQuan3") {
    console.log("You chose 3");
    var currentPrice = document.getElementById("chipsPrice");
    price = currentPrice.textContent;
    var newPrice = price * 3;
    currentPrice.textContent = newPrice;
  }
  if (chipsQuantity.value == "chipsQuan4") {
    console.log("You chose 4");
    var currentPrice = document.getElementById("chipsPrice");
    price = currentPrice.textContent;
    var newPrice = price * 4;
    currentPrice.textContent = newPrice;
  }
  if (chipsQuantity.value == "chipsQuan5") {
    console.log("You chose 5");
    var currentPrice = document.getElementById("chipsPrice");
    price = currentPrice.textContent;
    var newPrice = price * 5;
    currentPrice.textContent = newPrice;
  }
  if (chipsQuantity.value == "chipsQuan6") {
    console.log("You chose 6");
    var currentPrice = document.getElementById("chipsPrice");
    price = currentPrice.textContent;
    var newPrice = price * 6;
    currentPrice.textContent = newPrice;
  }
  if (chipsQuantity.value == "chipsQuan0") {
    console.log("You chose 0");
    var currentPrice = document.getElementById("chipsPrice");
    price = currentPrice.textContent;
    var newPrice = price * 0;
    currentPrice.textContent = newPrice;
  }
}

function setSodaQuantity() {
  console.log("Quantity value changed");
  var price;
  sodaQuantity = document.getElementById("sodaQuantity");
  if (sodaQuantity.value == "sodaQuan1") {
    console.log("You choose 1");
    var currentPrice = document.getElementById("sodaPrice");
    price = currentPrice.textContent;
    var newPrice = price * 1;
    currentPrice.textContent = newPrice;
  }
  if (sodaQuantity.value == "sodaQuan2") {
    console.log("You choose 2");
    var currentPrice = document.getElementById("sodaPrice");
    price = currentPrice.textContent;
    var newPrice = price * 2;
    currentPrice.textContent = newPrice;
  }
  if (sodaQuantity.value == "sodaQuan3") {
    console.log("You choose 3");
    var currentPrice = document.getElementById("sodaPrice");
    price = currentPrice.textContent;
    var newPrice = price * 3;
    currentPrice.textContent = newPrice;
  }
  if (sodaQuantity.value == "sodaQuan4") {
    console.log("You choose 4");
    var currentPrice = document.getElementById("sodaPrice");
    price = currentPrice.textContent;
    var newPrice = price * 4;
    currentPrice.textContent = newPrice;
  }
  if (sodaQuantity.value == "sodaQuan5") {
    console.log("You choose 5");
    var currentPrice = document.getElementById("sodaPrice");
    price = currentPrice.textContent;
    var newPrice = price * 5;
    currentPrice.textContent = newPrice;
  }
  if (sodaQuantity.value == "sodaQuan6") {
    console.log("You choose 6");
    var currentPrice = document.getElementById("sodaPrice");
    price = currentPrice.textContent;
    var newPrice = price * 6;
    currentPrice.textContent = newPrice;
  }
  if (sodaQuantity.value == "sodaQuan0") {
    console.log("You choose 0");
    var currentPrice = document.getElementById("sodaPrice");
    price = currentPrice.textContent;
    var newPrice = price * 0;
    currentPrice.textContent = newPrice;
  }
}

function calculateTotal() {
  var burgerTotal;
  var chipsTotal;
  var sodaTotal;

  burgerTotal = document.getElementById("burgerPrice");
  chipsTotal = document.getElementById("chipsPrice");
  sodaTotal = document.getElementById("sodaPrice");

  var burgerTotalNum = parseFloat(burgerTotal.textContent);
  var chipsTotalNum = parseFloat(chipsTotal.textContent);
  var sodaTotalNum = parseFloat(sodaTotal.textContent);

  console.log(burgerTotalNum);
  console.log(chipsTotalNum);
  console.log(sodaTotalNum);

  var orderTotal;
  orderTotal = burgerTotalNum + chipsTotalNum + sodaTotalNum;

  var totalBoxNum = document.getElementById("totalPar");
  totalBoxNum.textContent = orderTotal;
}
