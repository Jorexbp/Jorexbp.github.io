<<<<<<< HEAD
const observador = new IntersectionObserver((entr) => 
entr.forEach((ent) => {
    if(ent.isIntersecting){
ent.target.classList.add('show');
    }else{
        ent.target.classList.remove('show');
    }
})
);

const hidden = document.querySelectorAll('.hidden')
hidden.forEach((ele) => observador.observe(ele));

window.onload(window.scroll({
	top: 0,
	behavior: "smooth"
}));
=======
const observador = new IntersectionObserver((entr) => 
entr.forEach((ent) => {
    if(ent.isIntersecting){
ent.target.classList.add('show');
    }else{
        ent.target.classList.remove('show');
    }
})
);

const hidden = document.querySelectorAll('.hidden')
hidden.forEach((ele) => observador.observe(ele));
>>>>>>> e62ad5d47e3ed0b75dcd59682eacc920eeb9bf7a
