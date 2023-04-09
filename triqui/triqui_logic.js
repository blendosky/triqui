
const cuadrados = document.querySelectorAll('.cuadrado');
let jugadorActual = 'X';
let sumajugadorX = 0;
let sumajugadorO = 0;
const jugadores = ['X','0'];
cuadrados.forEach(cuadrado =>{
    cuadrado.addEventListener("click",() => {
        if (cuadrado.textContent === ''){
            cuadrado.textContent = jugadorActual;
            cuadrado.setAttribute('jugador-data', jugadorActual);
            valideGanador();
            jugadorActual = jugadorActual === jugadores[0] ? jugadores[1] : jugadores[0];
            
        }
    }
    )
}
);

const botonReseteo = document.querySelector('#reinicio-btn');
botonReseteo.addEventListener('click', () => {
    resetJuego();
});


function valideGanador(){
    const combinacionGanadores = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let i=0; i<combinacionGanadores.length;i++){
        const [a, b, c] = combinacionGanadores[i];
        const cuadradoA = cuadrados[a];
        const cuadradoB = cuadrados[b];
        const cuadradoC = cuadrados[c];
        
        if(cuadradoA.textContent === jugadorActual &&
            cuadradoB.textContent === jugadorActual &&
            cuadradoC.textContent === jugadorActual
            ){
                const etiquetaGanador = document.querySelector('#resultado');
                etiquetaGanador.textContent = `El ganador fue ${jugadorActual}! Felicitaciones`;
                setTimeout(() => {
                    resetJuego();
                },3000)
                if(jugadorActual==='X'){
                    sumajugadorX = sumar(sumajugadorX);
                }
                else{
                    sumajugadorO++;
                }
                return;
            }
    }
}


function resetJuego(){
    cuadrados.forEach(cuadrado => {
        cuadrado.textContent = '';
        cuadrado.removeAttribute('jugador-data');
    });
    jugadorActual='X';
    const etiquetaGanador = document.querySelector('#resultado');
    const etiquetapuntosx = document.querySelector('#puntosx');
    const etiquetapuntoso = document.querySelector('#puntoso');
    etiquetapuntosx.textContent = 'Victorias X = '+sumajugadorX;
    etiquetapuntoso.textContent = 'Victorias O = '+sumajugadorO;
    etiquetaGanador.textContent = 'No ha ganado nadie hasta el momento';
}


function sumar(x){
    x++;
    return x;
}