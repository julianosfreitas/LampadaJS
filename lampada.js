const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

// LIGAR LÂMPADA
function lampOn () {
    if (!isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
}

turnOn.addEventListener ('click', lampOn);

//DESLIGAR LÂMPADA
function lampOff () {
    if (!insLampBroken () ) {
        lamp.src = './img/desligada.jpg';
    }
}

turnOff.addEventListener ('click', lampOff);

//LÂMPADA LIGADR AO PASSAR O MOUSE POR CIMA
lamp.addEventListener ('mouseover', lampOn);

//LÂMPADA DESLIGAR AO TIRA O MOUSE DE CIMA
lamp.addEventListener('mouseleave', lampOff);

//LÂMPADA QUEBRAR
function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

lamp.addEventListener('dblclick', lampBroken);

//LÂMPADA QUEBRADA NÃO PODER LIGAR NEM DESLIGAR
function isLampBroken () { 
    return lamp.src.indexOf ('quebrada') > -1
}