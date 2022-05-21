
const d = document;

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

scrollButton();


let animado = document.querySelectorAll('.animado');
let animado2 = document.querySelectorAll('.animado2');

function mostrarScroll() {
        let scrollTop = document.documentElement.scrollTop;
        for (let i = 0; i < animado.length; i++) {
            let alturaAnimado = animado[i].offsetTop;
            if (alturaAnimado - 600 < scrollTop) {
                animado[i].style.opacity = 1;  
                animado[i].classList.add('puff-in-center');  
            }           
        }
        for (let i = 0; i < animado2.length; i++) {
            let alturaAnimado = animado2[i].offsetTop;
            if (alturaAnimado - 600 < scrollTop) {
                animado2[i].style.opacity = 1;  
                animado2[i].classList.add('slide-in-left');
            }           
        }
}

window.addEventListener('scroll', mostrarScroll);