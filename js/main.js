var elMenuOpenBtn = document.querySelector(".js-menu-open-btn");
var elHeader = document.querySelector(".site-header");

elMenuOpenBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-header--open");
})
