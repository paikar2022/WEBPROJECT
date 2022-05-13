// this is event listener, showing on the index page 
let p =document.querySelector("p");
p.addEventListener("mouseenter", changeColor);
p.addEventListener("mouseleave", changeColor);
function changeColor(){
    p.classList.toggle("textcolor");
}
