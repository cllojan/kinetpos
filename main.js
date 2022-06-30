document.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})

let menuToggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () =>{
    menu.classList.toggle("visible")
})