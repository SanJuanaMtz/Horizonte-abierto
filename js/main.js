// 1. Seleccionamos todos los botones de filtro
const botones = document.querySelectorAll('.filtros button');

// 2. Seleccionamos todas las tarjetas
const tarjetas = document.querySelectorAll('.card');

// 3. Elementos de la modal
const modal = document.getElementById('modal');
const modalCerrar = document.getElementById('modalCerrar');
const modalTitulo = document.getElementById('modalTitulo');
const modalFecha = document.getElementById('modalFecha');
const modalCategorias = document.getElementById('modalCategorias');
const modalImagen = document.getElementById('modalImagen');
const modalExtracto = document.getElementById('modalExtracto');
const modalEnlace = document.getElementById('modalEnlace');

// ===== MODAL: abrir al hacer clic en una tarjeta =====
tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        const titulo = tarjeta.querySelector('h2').textContent;
        // Llenar la modal con los datos de la tarjeta
        modalTitulo.textContent = tarjeta.querySelector('h2').textContent;
        modalFecha.textContent = tarjeta.querySelector('.fecha').textContent;
        modalCategorias.textContent = tarjeta.dataset.categorias;
        modalImagen.src = tarjeta.querySelector('img').src;
        modalImagen.alt = tarjeta.querySelector('img').alt;
        modalExtracto.textContent = tarjeta.dataset.extracto;

        //Imagen desde el objeto de imágenes, si existe
        const imgSrc = (imagenesArticulos && imagenesArticulos[titulo]) || tarjeta.querySelector('img').src;
        modalImagen.src = imgSrc;

        //Credito de la imagen
        const credito = (creditosArticulos && creditosArticulos[titulo]) || {};
        const creditoEl = document.getElementById("modalCredito");
        if (credito.nombre) {
            if (credito.enlace) {
                creditoEl.innerHTML = `<a href="${credito.enlace}" target="_blank" rel="noopener">${credito.nombre}</a>`;
            } else {
                creditoEl.textContent = credito.nombre;
            }
        } else {
            creditoEl.textContent = "";
        }

        // Conectar el enlace "Leer completo" con el artículo correspondiente
        modalEnlace.href = enlacesArticulos[titulo] || '#'; // Si no hay enlace, usar '#'

        document.addEventListener('contextmenu', e => e.preventDefault());
        // Mostrar la modal
        modal.classList.add('visible');
    });
});

// ===== MODAL: cerrar =====
modalCerrar.addEventListener('click', () => {
    modal.classList.remove('visible');
});

// Cerrar al hacer clic fuera de la modal (en el fondo oscuro)
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('visible');
    }
});

// Cerrar con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('visible');
    }
});

// FILTRO Y VER MAS
const btnVerMas = document.getElementById('btn-ver-mas');
const POR_PAGINA = 6;
let visibles = POR_PAGINA;
let categoriaActual = 'todas';

function pasaFiltro(t) {
    if (categoriaActual === 'todas') return true;
    const cats = t.dataset.categorias.split(' ');
    return cats.includes(categoriaActual);
}

function aplicarVisibilidad() {
    let visiblesEnPantalla = 0;
    tarjetas.forEach(t => {
        if (pasaFiltro(t)) {
            const dentroLimite = visiblesEnPantalla < visibles;
            t.style.display = dentroLimite ? 'block' : 'none';
            if (dentroLimite) visiblesEnPantalla++;
        } else {
            t.style.display = 'none';
        }
    });

    const totalEnFiltro = [...tarjetas].filter(pasaFiltro).length;
    btnVerMas.style.display = (visiblesEnPantalla >= totalEnFiltro) ? 'none' : 'block';
}

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        botones.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');
        categoriaActual = boton.dataset.categoria;
        visibles = POR_PAGINA;
        aplicarVisibilidad();
    });
});

btnVerMas.addEventListener('click', () => {
    visibles += POR_PAGINA;
    aplicarVisibilidad();
});

aplicarVisibilidad();

