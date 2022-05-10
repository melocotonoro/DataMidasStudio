window.onload=()=>{
animationNavBar();
collapse();
scrollButton();
transitionWeImg();
}
function animationNavBar(){
$(".sectionNavBar").hide();

$(".sectionNavBar").prepend(`<nav class="containerItemsNav">
<div> <p class="logo">MIDAS</p>
      <P class="logo">DATA STUDIO</P>
</div>
<button class="menuIcon">
    <i class="fa-solid fa-bars"></i>  
</button>
<ul class="itemsNavBar itemsNavBar_visible">
    <li>
        <a href="#">Nosotros</a>
    </li>
    <li>
        <a href="#">Nuestros servicios</a>
    </li>
    <li>
        <a href="#">Trabajos realizados</a>
    </li>
    <li>
        <a href="#">¿Que dicen?</a>
    </li>
    <li>
        <a href="#">Trabajá con nosotros</a>
    </li>
    <li>
        <a href="#">Contacto</a>
    </li>
</ul>
</nav>`);

$(".sectionNavBar").fadeIn(3000);
}


// NAV BAR
function collapse(){
const buttomNav= document.querySelector(".menuIcon")
const navList= document.querySelector(".itemsNavBar")

buttomNav.addEventListener("click", ()=>{
    navList.classList.toggle("itemsNavBar_visible")
});


}
// SCROLL BUTTON
function scrollButton(){
const scrollBtn = document.querySelector('.scrollTopBtn');
window.addEventListener('scroll', () => {
 let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 if(scrollTop > 300){ 
  scrollBtn.classList.remove('none');
 }else{
  scrollBtn.classList.add('none');
 }
});
document.addEventListener('click', e => {
 if(scrollBtn){
  window.scrollTo({
   behavior: 'smooth',
   top: 0
  })
 }
});
}

//TRANSITION SECTION WE

function transitionWeImg(){
$(".sectionAbout").hide();
$(".sectionAbout").prepend(`<img src="./assets/image/weImg.jpg" alt="Our History" class="bgAbout"> <div class="aboutTextcontainer">
<p class="textAbout">Somos un equipo de desarrolladores y profesionales con 
experiencia en el campo de la ciencia de datos.</p></div>
<button class="btnAbout">BUTTOM</button>`)
$(".sectionAbout").fadeIn(6000)
}

