const Quiz = [
    {pergunta:'Quanto é 1 + 1 ?',itema:'1',itemb:'2',itemc:'3',itemcorreto:'itemb'},
    {pergunta:'Quanto é 1 - 1 ?',itema:'0',itemb:'1',itemc:'2',itemcorreto:'itema'},
    {pergunta:'Quanto é 1/1 ?',itema:'0',itemb:'1',itemc:'2',itemcorreto:'itemb'}
]

var pergunta = document.getElementById('pergunta')
var itema = document.getElementById('item-a')
var itemb = document.getElementById('item-b')
var itemc = document.getElementById('item-c')
var next = document.getElementById('next')
var previous = document.getElementById('previous')
var confirmar = document.getElementById('confirmar')
var nome = document.getElementById('nome').value
var container = document.getElementById('container')

let index = 0
let pontos = 0

function Gabarito () {
    let itema = document.querySelector('input[id="input-a"]:checked');
    let itemb = document.querySelector('input[id="input-b"]:checked');
    let itemc = document.querySelector('input[id="input-c"]:checked');  

    switch (index) {
        case 0:
            if(itemb.value === 'on'){
                pontos++
            }else if(itema.value === 'on' || itemc.value === 'on'){
                pontos = pontos
            }
            break;
        case 1:
            if(itema.value === 'on'){
                pontos++
            }
            break;
        case 2:
            if(itemb.value === 'on'){
                pontos++
            }
            break;
    }
}

function RenderizarTela(){
    pergunta.textContent = `${Quiz[index].pergunta}`
    itema.textContent = `${Quiz[index].itema}`
    itemb.textContent = `${Quiz[index].itemb}`
    itemc.textContent = `${Quiz[index].itemc}`
    if(index === 0){
        previous.style.display = 'none'
        confirmar.style.display = 'none'
        next.style.display = 'block'
    }else if(index > 0 && index < Quiz.length-1){
        previous.style.display = 'block'
    }else if(index === Quiz.length-1){
        confirmar.style.display = 'block'
        next.style.display = 'none'
    }
}

function Validar () {
    Gabarito()
    container.innerHTML = `
    <h2>${pontos}</h2>
    <div>Você acertu tudo parabens!!</div>
    `
}

RenderizarTela()
next.addEventListener('click',proximo = () =>{
    Gabarito()
    index++
    RenderizarTela()
    
})
previous.addEventListener('click', anterior = () =>{
    index--
    RenderizarTela()
})
confirmar.addEventListener('click',Validar)