const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalId = null
// função que reseta o intervalId para não ficar só acrescentando e faz com que o objeto turnON mude as cores do semáforo.
const trafficLight = (event) => {
   stopAutomatic()
    turnOn [event.target.id]()
} 
// faz com que o colorIndex fique atualizando para que a função changedColor funcione corretamente.
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0
// uasdo para mudar as cores e assim fazer o automatic funcionar correto.
const changedColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}
// reseta o intervalId para que não fique acumulando e faça com que o botão automático fique fazendo os semáforo mudar mais rápido.
const stopAutomatic = () => {
    clearInterval(intervalId)
}
// objeto que armazena as cores e quando um botão for acionado muda a cor do semáforo.
const turnOn = {
    'red': () => img.src =  'img/semaforo-vermelho.png',
    'green': () => img.src =  'img/semaforo-verde.png',
    'yellow': () => img.src =  'img/semaforo-laranja.png',
    'automatic': () => intervalId = setInterval(changedColor,1000)
}


buttons.addEventListener('click', trafficLight)