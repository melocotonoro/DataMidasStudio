window.onload=()=>{
    animationNavBar();
}

function animationNavBar(){
$("sectionNavBar").hide();

$("sectionNavBar").prepend(`<nav class="containerItemsNav">
<div> <p class="logo">MIDAS</p>
    <P class="logo">DATA STUDIO</P>
</div>
<button class="menuIcon">
    <i class="fa-solid fa-bars"></i>  
</button>
<ul class="itemsNavBar itemsNavBar-visible">
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

$("sectionNavBar").fadeIn(3000);
}


// NAV BAR
const buttomNav= document.querySelector(".menuIcon")
const navList= document.querySelector(".itemsNavBar")

buttomNav.addEventListener("click", ()=>{
    navList.classList.toggle("itemsNavBar-visible")
});

// SCROLL BUTTON
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
