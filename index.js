const observador = new IntersectionObserver((entr) => 
entr.forEach((ent) => {
    if(ent.isIntersecting){
ent.target.classList.add('show');
    }
})
);

const hidden = document.querySelectorAll('.hidden')
hidden.forEach((ele) => observador.observe(ele));

window.onload(window.scroll({
	top: 0,
	behavior: "smooth"
}));
