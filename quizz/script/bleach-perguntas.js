const Quiz = [
    {pergunta:'Quanto é 1 + 1 ?',itema:'1',itemb:'2',itemc:'3',gabarito:'itemb'},
    {pergunta:'Quanto é 1 - 1 ?',itema:'0',itemb:'1',itemc:'2',gabarito:'itema'},
    {pergunta:'Quanto é 1/1 ?',itema:'-1',itemb:'0',itemc:'1',gabarito:'itemc'}
]

var pergunta = document.getElementById('pergunta')
var itema = document.getElementById('item-a')
var itemb = document.getElementById('item-b')
var itemc = document.getElementById('item-c')
var next = document.getElementById('next')
var previous = document.getElementById('previous')
var confirmar = document.getElementById('confirmar')
var container = document.getElementById('container')

let index = 0
let pontos = 0

function Pontuacao() {
    let itema = document.getElementById('input-a')
    let itemb = document.getElementById('input-b')
    let itemc = document.getElementById('input-c')

    switch (index) {
        case 0:
            if(itemb.checked){
                pontos++               
            }else{
                pontos = pontos
            }
            break;
        case 1:
            if(itema.checked){
                pontos++
            }else{
                pontos = pontos
            }
            break;
        case 2:
            if(itemc.checked){
                pontos++
            }else{
                pontos = pontos
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
    Pontuacao()
    let nome = document.getElementById('nome').value
    container.innerHTML = `
    <div class="pontuacao">
        <h2>${nome}</h2>
        <h3>Sua pontuação foi de ${pontos}</h3>
        <p>Obrigado por jogar meu jogo se diverta.</p>
        
    </div>
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
