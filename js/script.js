const openConstactsButton = document.querySelector(".header__open-contacts-button");
const modalCloseButton = document.querySelector(".modal__close-button");
const modal = document.querySelector(".modal");
const modalHover = document.querySelector(".body-hover");
const body = document.querySelector(".body");

openConstactsButton.addEventListener("click", function(){
    modalOpen();    
});
modalCloseButton.addEventListener("click", function(){
    modalOpen();
})

// header scripts

//menu burger

const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if(menuIcon){    
    menuIcon.addEventListener("click", function(e){
       toggleBurger();       
    });
}

function modalOpen(){
    if(document.querySelector(".menu__body--active"))    {
        toggleBurger();
    }
    bodyLock();
    modalHover.classList.toggle("body-hover--opened");
    modal.classList.toggle("modal--opened");  
}

function toggleBurger(){
    bodyLock();
    menuIcon.classList.toggle("menu__icon--active");
    menuBody.classList.toggle("menu__body--active"); 
}

function bodyLock(){
    body.classList.toggle("body--lock");
}
