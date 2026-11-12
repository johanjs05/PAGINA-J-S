
/* =========================================
   1. FECHA DE INICIO DE LA RELACION
========================================= */

// CAMBIA ESTA FECHA POR LA FECHA REAL
// Formato: año, mes (0-11), día, hora, minuto

const fechaInicio = new Date(2025, 8, 30, 0, 0, 0);


/* =========================================
   2. CONTADOR DE TIEMPO EN TIEMPO REAL
========================================= */

function actualizarReloj() {

    const ahora = new Date();

    if (ahora < fechaInicio) {
        return;
    }

    // Calcular años y meses completos
    let anios = ahora.getFullYear() - fechaInicio.getFullYear();

    let fechaAniversario = new Date(fechaInicio);
    fechaAniversario.setFullYear(
        fechaInicio.getFullYear() + anios
    );

    if (fechaAniversario > ahora) {
        anios--;
    }

    fechaAniversario = new Date(fechaInicio);
    fechaAniversario.setFullYear(
        fechaInicio.getFullYear() + anios
    );

    let meses =
        (ahora.getFullYear() - fechaAniversario.getFullYear()) * 12 +
        (ahora.getMonth() - fechaAniversario.getMonth());

    let fechaMes = new Date(fechaAniversario);
    fechaMes.setMonth(fechaMes.getMonth() + meses);

    if (fechaMes > ahora) {
        meses--;
    }

    fechaMes = new Date(fechaAniversario);
    fechaMes.setMonth(fechaMes.getMonth() + meses);

    // Calcular días, horas, minutos y segundos
    let diferencia = ahora - fechaMes;

    const segundosTotales = Math.floor(diferencia / 1000);

    const dias = Math.floor(segundosTotales / 86400);

    const horas = Math.floor(
        (segundosTotales % 86400) / 3600
    );

    const minutos = Math.floor(
        (segundosTotales % 3600) / 60
    );

    const segundos = segundosTotales % 60;

    // Mostrar resultados en HTML
    document.getElementById("anios").textContent = anios;

    document.getElementById("meses").textContent = meses;

    document.getElementById("dias").textContent = dias;

    document.getElementById("horas").textContent = horas;

    document.getElementById("minutos").textContent = minutos;

    document.getElementById("segundos").textContent = segundos;
}

// Actualizar inmediatamente
actualizarReloj();

// Actualizar cada segundo
setInterval(actualizarReloj, 1000);


/* =========================================
   3. CORAZONES FLOTANTES
========================================= */

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon-flotante");

    corazon.innerHTML = "❤";

    // Posición horizontal aleatoria
    corazon.style.left = Math.random() * 100 + "vw";

    // Tamaño aleatorio
    corazon.style.fontSize =
        Math.random() * 20 + 12 + "px";

    // Duración aleatoria
    const duracion = Math.random() * 4 + 5;

    corazon.style.animationDuration = duracion + "s";

    document.body.appendChild(corazon);

    // Eliminar cuando termina la animación
    setTimeout(() => {
        corazon.remove();
    }, duracion * 1000);
}

// Crear corazones periódicamente
setInterval(crearCorazon, 700);


/* =========================================
   4. ANIMACION DE CORAZONES AL HACER CLIC
========================================= */

document.addEventListener("click", function(event) {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon-clic");

    corazon.innerHTML = "❤";

    corazon.style.left = event.clientX + "px";

    corazon.style.top = event.clientY + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 1000);

});


/* =========================================
   5. ANIMACION DE APARICION DE SECCIONES
========================================= */

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(
    ".galeria, .tiempo, .historia, .cartas, .cancion"
).forEach((seccion) => {

    seccion.classList.add("aparecer-seccion");

    observador.observe(seccion);

});


/* =========================================
   6. MENSAJE DE BIENVENIDA
========================================= */

window.addEventListener("load", function() {

    console.log("Nuestra historia ha comenzado ❤️");

});
