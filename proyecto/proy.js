const observador = new IntersectionObserver((entr) => 
entr.forEach((ent) => {
    if(ent.isIntersecting){
        if((ent.target.className.indexOf('hidNav') != -1)){
            ent.target.classList.add('showNav');
        }else{
            ent.target.classList.add('show');
        }

    }

})
);

const hidden = document.querySelectorAll('.hidden');
const hidNav = document.querySelectorAll('.hidNav');

hidNav.forEach((ele) => observador.observe(ele));
hidden.forEach((ele) => observador.observe(ele));

window.onload(window.scroll({
	top: 0,
	behavior: "smooth"
}));