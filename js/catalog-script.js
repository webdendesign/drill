/*ВСПЛЫВАЮЩЕЕ ОКНО ДОБАВЛЕНИЯ В КОРЗИНУ*/
var cartLinks = document.querySelectorAll(".buy");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = cartPopup.querySelector(".modal-close"); 

for (var i = 0; i < cartLinks.length; i++) {
    cartLinks[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
    });
}  
cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (cartPopup.classList.contains("modal-show")) {
            cartPopup.classList.remove("modal-show");
        }
    }
});