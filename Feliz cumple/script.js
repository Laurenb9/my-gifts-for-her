// Variable para controlar el tamaño del botón SÍ
let escalaSi = 1;

// Función para pasar de la caja de regalo a la pregunta
function irAPantalla2() {
    document.getElementById('pantalla-1').classList.remove('activa');
    document.getElementById('pantalla-2').classList.add('activa');
}

// Función para pasar de la pregunta al beso final
function irAPantalla3() {
    document.getElementById('pantalla-2').classList.remove('activa');
    document.getElementById('pantalla-3').classList.add('activa');
}

// El truco divertido: hace crecer el botón SÍ cada vez que presiona NO
function hacerMasGrande() {
    const btnSi = document.getElementById('btn-si');
    
    // Aumentamos la escala de tamaño un 40% cada vez que hace clic en "No"
    escalaSi += 0.4; 
    
    // Aplicamos el cambio de tamaño con CSS transform
    btnSi.style.transform = `scale(${escalaSi})`;
    
    // Opcional: Podemos cambiarle el texto al botón "No" para que sea más chistoso
    const frasesNo = ["¿Segura?", "Piénsalo bien...", "Nop, dale que sí", "¡Obligada!"];
    const btnNo = document.getElementById('btn-no');
    const fraseAleatoria = frasesNo[Math.floor(Math.random() * frasesNo.length)];
    btnNo.innerText = fraseAleatoria;
}