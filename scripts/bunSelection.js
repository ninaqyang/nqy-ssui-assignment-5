let amountOptions = [1, 3, 6, 12];
let glazeOptions = ["none", "doubleChocolate", "vanillaMilk", "sugarMilk"];

function loadButtonStates() {
  amountOptions.forEach((quantity, index) => {
    let amountButton = document.getElementsByClassName("amountButton")[index];

    amountButton.addEventListener("click", function() {
      amountOptions.forEach((quantity, index) => {
        let amountButton = document.getElementsByClassName("amountButton")[index];
        amountButton.classList.remove("activeButton");
      });

      amountButton.classList.add("activeButton");

      changeAddToCartState()
    });
  })

  glazeOptions.forEach((glaze, index) => {
    let glazeButton = document.getElementsByClassName("glazeButton")[index];

    glazeButton.addEventListener("click", function() {
      glazeOptions.forEach((glaze, index) => {
        let glazeButton = document.getElementsByClassName("glazeButton")[index];
        glazeButton.classList.remove("activeButton");
      });

      glazeButton.classList.add("activeButton");

      changeAddToCartState()
    });
  })

}

function changeAddToCartState() {
  let addToCartButton = document.getElementsByClassName("largeButton")[0];
  let selectedButtons = document.getElementsByClassName("activeButton");
  console.log(selectedButtons);
  if (selectedButtons.length < 2) {
    addToCartButton.classList.remove("button");
    addToCartButton.classList.add("inactiveButton");
  } else {
    addToCartButton.classList.remove("inactiveButton");
    addToCartButton.classList.add("button");
    addToCartButton.addEventListener("click", function() {
        alert("Added to cart!");
    });
  }
}
