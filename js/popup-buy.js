var buyBtn = document.querySelectorAll(".btn-buy");
var productBuyPopup = document.querySelector(".modal-product-added");
var closeProductBuyPopup = productBuyPopup.querySelector(".modal-close");
var continueBtn = productBuyPopup.querySelector(".modal-continue-btn");

for (var i = 0; i < buyBtn.length; i++) {
  buyBtn[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    productBuyPopup.classList.add("modal-show");
  });
}

closeProductBuyPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  productBuyPopup.classList.remove("modal-show");
  });

continueBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  productBuyPopup.classList.remove("modal-show");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (productBuyPopup.classList.contains("modal-show")) {
      productBuyPopup.classList.remove("modal-show");
      productBuyPopup.classList.remove("modal-error");
    }
  }
});
