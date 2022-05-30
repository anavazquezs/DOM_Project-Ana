//Contador del jugador uno.
//Crear un objeto el cual contenga el puntaje del primer jugador
//Selecionar el boton del jugador uno
//Selecionar el display del jugador uno
const j1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
};
//Contador del jugador dos.
//Crear un objeto el cual contenta el puntaje del segundo jugador
//Seleccionar el boton del jugador dos
//Selecionar el display del jugador dos
const j2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
}

//Selecionar el boton de reset
const resetButton = document.querySelector("#reset");

// Selecionar el texto de quien juega
const winningScoreSelect = document.querySelector("#playto");
// // Declarar variable de cuantos juegos se haran
let winningScore = 3;
// //Declarar booleano para saber si el juego termino o no
let isGameOver = false;

//Funcion para actualizar los scores, debe cambiar los colores si el juego termino!
// 'has-text-success' (Color verde)
// 'has-text-danger' (Color rojo)
// Si un score llega al winning score, es game over!
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


//Poner la funcion update scores a los botones de ambos jugadores!
j1.button.addEventListener("click", function () {
    updateScores(j1, j2);
});
j2.button.addEventListener("click", function(){
    updateScores(j2, j1);
});

//Poner la funcion de reset al boton de reset
winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset()
});
// resetButton.addEventListener("click", reset);
resetButton.addEventListener("click", reset);
// // Funcion para reiniciar todo!
function reset() {
    isGameOver = false;
    for (let j of [j1, j2]) {
        j.score = 0;
        j.display.textContent = 0;
        j.display.classList.remove("has-text-success", "has-text-danger");
        j.button.disabled = false;
    };
};