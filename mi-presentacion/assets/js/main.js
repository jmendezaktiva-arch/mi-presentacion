// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides');

    // Itera sobre cada objeto de diapositiva en el array slideContent
    slideContent.forEach(slideData => {
        // Crea el elemento <section> para la diapositiva
        const slide = document.createElement('section');

        // Asigna la clase de layout
        slide.className = slideData.layout || 'layout-default';

        // Asigna el fondo si está definido
        if (slideData.background) {
            if (slideData.background.startsWith('http')) {
                slide.setAttribute('data-background-image', slideData.background);
            } else {
                slide.setAttribute('data-background-color', slideData.background);
            }
        }

        // Construye el HTML interno de la diapositiva
        let innerHTML = '';

        if (slideData.title) {
            let titleStyle = slideData.titleColor ? `style="color:${slideData.titleColor}"` : '';
            innerHTML += `<h1 ${titleStyle}>${slideData.title}</h1>`;
        }
        if (slideData.subtitle) {
            innerHTML += `<h3>${slideData.subtitle}</h3>`;
        }

        // Maneja diferentes estructuras de contenido basadas en el layout
        if (slideData.layout === 'layout-split' && slideData.image2) {
             // Caso especial para la diapositiva 4 con dos imágenes de facilitador
             innerHTML += `<p>${slideData.content.split('<div')[0]}</p>`; // Contenido antes del div
             innerHTML += `<div class="content-wrapper">
                            <div style="text-align: center;">
                                <img src="${slideData.image}" alt="Facilitador 1" style="border-radius: 50%;">
                                <p style="margin-top:10px;">Nombre Facilitador 1</p>
                            </div>
                            <div style="text-align: center;">
                                <img src="${slideData.image2}" alt="Facilitador 2" style="border-radius: 50%;">
                                <p style="margin-top:10px;">Nombre Facilitador 2</p>
                            </div>
                          </div>`;
             innerHTML += `<div style="text-align: center; margin-top: 40px; font-size: 1.2em; font-weight: bold;">${slideData.content.split('bold;">')[1]}</div>`;
        } else if (slideData.layout === 'layout-split') {
            innerHTML += `<div class="content-wrapper">
                            <div>${slideData.content}</div>
                            <div><img src="${slideData.image}" alt="${slideData.title}"></div>
                          </div>`;
        } else {
            innerHTML += slideData.content || '';
            if (slideData.image) {
                innerHTML += `<img src="${slideData.image}" alt="${slideData.title}" style="margin-top: 20px;">`;
            }
        }

        slide.innerHTML = innerHTML;

        // Añade la diapositiva al contenedor
        slidesContainer.appendChild(slide);
    });

    // Inicializa Reveal.js después de que todas las diapositivas han sido creadas
    Reveal.initialize({
        hash: true,
        slideNumber: 'c/t',
        plugins: [ RevealNotes ]
    });
});
