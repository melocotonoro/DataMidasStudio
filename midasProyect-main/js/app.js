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
