// SPORTKA

let vyherniCisla = document.querySelector('#vyherni-cisla');
let historieCisel = document.querySelector('#historie-losovani');
let runningTimeouts = [];

function drawNumbers() {
    vyherniCisla.innerHTML = "";
    let osudi = [];
    let tazenaCisla = [];
    clearAllRunningTimeouts();

    // generovani osudi
    for (let i = 1; i <= 49; i = i + 1) {
        osudi.push(i);
    }

    // z osudi vyberu 7 nahodnych cisel
    for (let i = 0; i < 7; i++) {

        let vyherniIndex = Math.floor(Math.random() * osudi.length);
        let vyherniCislo = osudi[vyherniIndex];

        tazenaCisla.push(vyherniCislo);
        osudi.splice(vyherniIndex, 1);

        let timeoutid = setTimeout(function() {
            drawOneNumber(osudi, tazenaCisla, i)}, 500*i);

        runningTimeouts.push(timeoutid);

    }

    historieCisel.innerHTML += '<p class="historicke-losovani">' + tazenaCisla.join(' ') + '</p>';


}


function drawOneNumber(osudi, tazenaCisla, i) {

    // vypis do HTML
    vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[i] + '</span>';
}

function clearAllRunningTimeouts() {
    for (let i = 0; i < runningTimeouts.length; i++) {
        let timeoutid = runningTimeouts[i];
        clearTimeout(timeoutid);
    }

    runningTimeouts = [];

}





// history saves too early
// make more delay