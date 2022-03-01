const listaDeTeclas = document.querySelectorAll(".tecla");
const controles = [ "Digit1", "Digit2", "Digit3", "Digit4", "Digit5" , "Digit6", "Digit7","Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Insert"]

let audioPlayed = false;

for (i=0; i<listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas [i];
    
    //informa a nota pelo classlist
    const nota = tecla.classList[1];
    
    //manipula o nome do audio por string
    const idAudio = `#som_${nota}`;
    const teclasControles = controles [i];
        
    document.addEventListener("keydown", function (evento) {
        if (evento.code === teclasControles && audioPlayed === false) {
            tecla.classList.add('ativa');
            tocaSom(idAudio);
            audioPlayed = true
         }    
    });
    document.addEventListener("keyup", function  () {
        tecla.classList.remove('ativa');
        audioPlayed = false;
        });

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
}

function tocaSom (idAudio) {
   let audio = document.querySelector(idAudio)

   if (audio.paused) {audio.play()}
   else {audio.currentTime = 0}
    }
