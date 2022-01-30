//MENU RESPONSIVE

var menu_toggle = document.querySelector(".menu-toggle");
var menu = document.querySelector(".menu");
menu_toggle.onclick = function(){
    menu_toggle.classList.toggle('active');
    menu.classList.toggle('responsive');
}

/*********************************************/
//POP UP

document.addEventListener("click",function (e){
  if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
        myModal.show();
  }
})

/*********************************************/

//BACK TO TOP

const backToTop = document.querySelector('.back-to-top');
let hauteur = one.clientHeight;

window.addEventListener('scroll', ()=>{
    if(window.scrollY>(hauteur)){
        backToTop.classList.add("active");
    }else{
        backToTop.classList.remove("active");
    }
})