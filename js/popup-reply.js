var replyBtn = document.querySelector(".btn-reply");
var replyPopup = document.querySelector(".modal-reply");
var closePopup = replyPopup.querySelector(".modal-close");
var userName = replyPopup.querySelector("[name=name]");
var replyForm = replyPopup.querySelector("form");
var letterText = replyPopup.querySelector("textarea");

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
