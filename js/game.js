const cube = document.getElementById('cube');
const result = document.getElementById('result');
const game = document.getElementById('game');
let hod = 1;
let hody = [];
let timer = false;

function animation(){
    hod = Math.ceil(Math.random() * 6);
    cube.src = 'img/kostka' + hod + '.png'
}

document.getElementById('game').addEventListener('click',
    function () {
        if (!timer){
            timer = setInterval(animation, 100);
            game.innerText = 'Stop'

        } else{
            clearInterval(timer);
            timer = false
            game.innerText = 'Házej'
            hody.push(hod);
            vysledek();
        }
    });

function suma(cisla) {
    let sum = 0;
    cisla.forEach(function (value, index) {
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    let max = 1;
    cisla.forEach(function (value, index) {
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    let min = 6;
    cisla.forEach(function (value, index) {
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

/*function zvuk2() {
    let zvuk = document.getElementById("prvni");
    zvuk.currentTime = 0;
    zvuk.play();
    window.setTimeout(function()){
        tlacit
    }
}*/
function vysledek() {
    document.getElementById('cube').src = 'img/kostka' + hod + '.png';
    document.getElementById('result').innerHTML = '<p>Hod: ' + hod + '</p>';
    document.getElementById('result').innerHTML += '<p>Počet hodů: ' + hody.length + '</p>';
    document.getElementById('result').innerHTML += '<p>Součet hodů: ' + suma(hody) + '</p>';
    document.getElementById('result').innerHTML += '<p>Průměr hodů: ' + average(suma(hody), hody.length) + '</p>';
    document.getElementById('result').innerHTML += '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    document.getElementById('result').innerHTML += '<p>Nejnižší hod: ' + minimum(hody) + '</p>';
}
