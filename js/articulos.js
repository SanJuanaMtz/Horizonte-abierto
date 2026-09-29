// Boton 'Arriba' - aparece al hacer scroll
const btnArriba = document.getElementById('btn-arriba');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnArriba.classList.add('visible');
    } else {
        btnArriba.classList.remove('visible');
    }
});

btnArriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
