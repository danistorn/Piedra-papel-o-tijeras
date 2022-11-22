// RETO DE PIEDRA PAPEL O TIJERA SENCILLO:


//Opciones que se repiten: Perder, ganar, empatar. BUSCAR BOOLEANOS!
//Cuando se empata? cuando dan igual. Y sino, otra cosa.
//Otro booleano: si ganó o perdió. Si esto, perdió usando esto; si ésto, perdio usando esto; si ésto, perdió usando esto. SINO, GANÓ.
//Dejar un else que recolecte todas las opciones que no se dijeron y que den la ultima alternativa que queda. Ej: ganó!


const btn_stone = document.querySelector('.stone');
const btn_paper = document.querySelector('.paper');
const btn_scissors = document.querySelector('.scissors');
const results = document.querySelector('.results');

//const indicaciones = document.querySelector('.indicaciones');


const cpu_img = document.querySelector('#cpu_img');
const user_img = document.querySelector('#user_img');

let option_user;
let CPUOP;


function num_aleatorio() {
    return random_number = parseInt(Math.random() * 3);
}



function cpu_election(option_cpu) {
    if (option_cpu === 0) {
        cpu_img.src = "img/stone.jpeg";
        console.log('CPU= cero');
        CPUOP = 0;
        
    } else if (option_cpu === 1) {
        cpu_img.src = "img/paper.jpeg";
        console.log('CPU= uno');
        CPUOP = 1;
    } else if (option_cpu === 2) {
        cpu_img.src = "img/scissors.jpeg"
        console.log('CPU= dos');
        CPUOP = 2;
    }
}




btn_stone.onclick = function() {
    option_user = 0;                                    //La opción del usuario
    user_img.src = './img/stone.jpeg';                  //La imagen de la opción del usuario
    cpu_election(num_aleatorio());                      //La opción del CPU y su imagen
    resultado(CPUOP, 0);                                //El mensaje de ganaste/perdiste/empataste
}

btn_paper.onclick = function() {
    option_user = 1;
    user_img.src = './img/paper.jpeg';
    cpu_election(num_aleatorio());
    resultado(CPUOP, 1);
}

btn_scissors.onclick = function() {
    option_user = 2;
    user_img.src = './img/scissors.jpeg';
    cpu_election(num_aleatorio());
    resultado(CPUOP, 2);
}



function resultado (option__cpu, option__user) {
    if (option__cpu === option__user) {
        results.innerHTML = "empate! Vuelvan a jugar";
    } else if (option__cpu != option__user) {

        if (option__cpu === 0 && option__user === 2) {
            results.innerHTML = "Perdiste. La piedra rompió tu tijera :(";
        } else if (option__cpu === 1 && option__user === 0) {
            results.innerHTML ="Perdiste. El papel envolvió tu piedra :(";
        } else if (option__cpu === 2 && option__user === 1) {
            results.innerHTML = "Perdiste. La tijera cortó tu papel :(";
        } else {
            results.innerHTML="ganasteeee!";
        }
    } 
}

