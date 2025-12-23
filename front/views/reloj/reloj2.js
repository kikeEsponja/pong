let tiempoJ1 = 75;
let tiempoJ2 = 75;
let jugadorActual = 1;
let intervalo;

function actualizarTiempo(){
    if(jugadorActual === 1){
        tiempoJ1 -= 1;
        mostrarTiempo(tiempoJ1, jugadorActual);
        if(tiempoJ1 <= 0){
            finalizarPartida(2, "Tiempo agotado");
            detenerReloj();
        }
    }else{
        tiempoJ2 -= 1;
        mostrarTiempo(tiempoJ2, jugadorActual);
        if(tiempoJ2 <= 0){
            finalizarPartida(1, "Tiempo agotado");
            detenerReloj();
        }
    }
}

function mostrarTiempo(tiempo, jugador){
    console.log(`Tiempo del jugador ${jugador}: ${Math.floor(tiempo / 60)}:${tiempo % 60}`);
    var tiempoElemento = document.getElementById('tiempo');
    tiempoElemento.innerHTML = `tiempo: ${Math.floor(tiempo / 60)}:${tiempo % 60}`;
    //front
}

function finalizarPartida(ganador, motivo){
    console.log(`la partida terminó. Jugador ${ganador} gana por ${motivo}.`);   
}

/*function cambiarTurno(){
    clearInterval(intervalo);
    if(jugadorActual === 1){
        intervalo = setInterval(actualizarTiempo, 1000);
    }else{
        intervalo = setInterval(actualizarTiempo, 1000);
    }
    jugadorActual = (jugadorActual === 1)? 2 : 1;
}*/

setInterval(actualizarTiempo, 1000);

function realizarMovimiento(){
    cambiarTurno();
}