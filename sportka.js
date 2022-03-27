// SPORTKA

let vyherniCisla = document.querySelector('#vyherni-cisla');
let historieLosovani = document.querySelector('#historie-losovani');
let historickySeznamCisel = [];
let runningTimeouts = [];


function drawNumbers() {
    vyherniCisla.innerHTML = "";
    let osudi = [];
    let tazenaCisla = [];
    clearAllRunningTimeouts();

    // historie losovani
    historieLosovani.innerHTML = '';

    historickySeznamCisel.forEach(function(ele, idx, arr) {
        historieLosovani.innerHTML += '<p class="historicke-losovani">' + ele.join(' ') + '</p>';
    });


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
            drawOneNumber(osudi, tazenaCisla, i)}, 2000*i);

        runningTimeouts.push(timeoutid);

    }

    historickySeznamCisel.unshift(tazenaCisla);

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




