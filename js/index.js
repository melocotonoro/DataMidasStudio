const buttomNav= document.querySelector(".menuIcon")
const navList= document.querySelector(".itemsNavBar")

buttomNav.addEventListener("click", ()=>{
    navList.classList.toggle("itemsNavBar-visible")
});