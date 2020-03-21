/*ВСПЛЫВАЮЩЕЕ ОКНО ОТПРАВКА СООБЩЕНИЯ*/
var link = document.querySelector(".write-us-button");
  
var popup = document.querySelector(".modal-message");
var close = popup.querySelector(".modal-close"); 
var form = popup.querySelector("form");
var namem = popup.querySelector("[name=namem]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
  
var isStorageSupport = true;
var storage = "";
  
try {
   storage = localStorage.getItem("namem");    
} catch (err) {
   isStorageSupport = false;
}  
 
link.addEventListener("click", function (evt) {
    evt.preventDefault();	 
    popup.classList.add("modal-show");
    
    if (storage) {
          namem.value = localStorage.getItem("namem");
	      email.value = localStorage.getItem("email");
          if (email.value) {
			  message.focus();
			  
		  } else {
			  email.focus();
		  }
    } else {
      namem.focus();
    }    
 });
  
close.addEventListener("click", function (evt) {
    evt.preventDefault();	
    popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!namem.value  || !email.value || !message.value) {
      evt.preventDefault();
	  popup.classList.remove("modal-error");
	  popup.offsetWidth = popup.offsetWidth; 
      popup.classList.add("modal-error");
  } else {
      if (isStorageSupport) { 
        localStorage.setItem("namem", namem.value);
		localStorage.setItem("email", email.value);
	//	localStorage.setItem("message", message.value);
      }
    }
}); 
 
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
      }
    }
}); 

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
  
  /*ВСПЛЫВАЮЩЕЕ ОКНО КАРТЫ */
  
  var mapLink = document.querySelector(".contacts-button-map");

  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");
  
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
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