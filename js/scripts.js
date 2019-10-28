var buyBtn = document.querySelectorAll(".btn-buy");
var productBuyPopup = document.querySelector(".modal-product-added");
var orderBtn = productBuyPopup.querySelector(".modal-order-btn");
var closeProductBuyPopup = productBuyPopup.querySelector(".modal-close");
var continueBtn = productBuyPopup.querySelector(".modal-continue-btn");

var mapLink = document.querySelector(".map-link")
var mapPopup = document.querySelector(".modal-map");
var closeMapPopup = mapPopup.querySelector(".modal-close");

var replyBtn = document.querySelector(".btn-reply");
var replyPopup = document.querySelector(".modal-reply");
var closePopup = replyPopup.querySelector(".modal-close");
var userName = replyPopup.querySelector("[name=name]");
var replyForm = replyPopup.querySelector("form");
var letterText = replyPopup.querySelector("textarea");

for (var i = 0; i < buyBtn.length; i++) {
  buyBtn[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    productBuyPopup.classList.add("modal-show");
    orderBtn.focus();
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

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

closeMapPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

replyBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  replyPopup.classList.add("modal-show");
  userName.focus();
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  replyPopup.classList.remove("modal-show");
  replyPopup.classList.remove("modal-error");
  });

replyForm.addEventListener("submit", function (evt) {
  if (!letterText.value) {
    evt.preventDefault();
    replyPopup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (replyPopup.classList.contains("modal-show")) {
      replyPopup.classList.remove("modal-show");
      replyPopup.classList.remove("modal-error");
    }
  }
});
