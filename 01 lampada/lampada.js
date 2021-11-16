const TurnOn = document.getElementById('TurnOn');
const TurnOff = document.getElementById('TurnOff');
const Lamp = document.getElementById('lamp');
function islampBroken (){
    return Lamp.src.indexOf ('quebada') > -1
}
function lampON(){
    if(!islampBroken()){
        Lamp.src = './imagnes/lampada-acesa.png'
    }
}
function lampOff(){
    if(!islampBroken()){
        Lamp.src = './imagnes/lampada.jpg'
    }
}
function lampBroken(){
    Lamp.src = './imagnes/lampada-quebada.jpg'
}


TurnOn.addEventListener('click',lampON)
TurnOff.addEventListener('click',lampOff)
Lamp.addEventListener('dblclick', lampBroken)
Lamp.addEventListener('mouseover',lampON)
Lamp.addEventListener('mouseleave',lampOff)