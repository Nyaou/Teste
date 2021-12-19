const Musica = [
    {art:'The Whole Other' , msc:'An Army of None', url:'musicas/An Army of None - The Whole Other.mp3', img:'imagens/bateria.jpg'},
    {art:'Chris Haugen' , msc:'Backwoods BBQ', url:'musicas/Backwoods BBQ - Chris Haugen.mp3',img:'imagens/violaosolo.jpg'},
    {art:'The Whole Other' , msc:'Barrel Full of Sea Monkeys', url:'musicas/Barrel Full of Sea Monkeys - The Whole Other.mp3', img:'imagens/bateria2.jpg'},
    {art:'Nathan Moore' , msc:'Ginormous Robots', url:'musicas/Ginormous Robots - Nathan Moore.mp3',img:'imagens/violaosolo2.jpg'},
    {art:'The Whole Other' , msc:'Go Go Gadget Rockstar', url:'musicas/Go Go Gadget Rockstar - The Whole Other.mp3',img:'imagens/violao.jpg'},
    {art:'Nathan Moore' , msc:'Moon Rock', url:'musicas/Moon Rock - Nathan Moore.mp3',img:'imagens/blues.jpg'}
]
let direction = ''
let index = 0
let imagem = document.getElementById('imagem')
let audio = document.getElementById('audio')
let play = document.getElementById('play')
let pause = document.getElementById('pause')
let artista = document.getElementById('artista')
var listadeMusica = document.getElementById('lista')
let proximo = document.getElementById('next')
let anterior = document.getElementById('previous')
let duracao = document.getElementById('temporizador')
let progresso = document.querySelector('progress')

function Lista (Musica) {

    for (const element of Musica) {
        
            let artista = document.createElement('h2')
            let musica  = document.createElement('p')

            artista.innerHTML = `${element.art} <i class="fas fa-volume-up" id="${index}"></i>`
            musica.innerHTML =`${element.msc}`

            listadeMusica.appendChild(artista)
            listadeMusica.appendChild(musica)
            index++
    }
}

function resetIndex () {
    if(index > Musica.length-1){
        index = 0
    }else if(index < 0){
        index = Musica.length-1
    }
}

function statusSom () { 
    let status = document.getElementById(index)
    // gambiarra maior que deu mais certo ainda
    if (index === 0 && direction === 'right') {
        status.style.display = 'block'
        status = document.getElementById(5)
        status.style.display = 'none'
    } else if(index === 5 && direction === 'left'){
        status.style.display = 'block'
        status = document.getElementById(0)
        status.style.display = 'none'
    }else if(index === 0){
        status.style.display = 'block'
        // gambiarra que deu certo
        if(direction === 'left'){
            status.style.display = 'block'
            status = document.getElementById(index+1)
            status.style.display = 'none'
        }
    }else if(direction === 'left'){
        status.style.display = 'block'
        status = document.getElementById(index+1)
        status.style.display = 'none'
    }else {
        status.style.display = 'block'
        status = document.getElementById(index-1)
        status.style.display = 'none'
    }
}

function Artista() {
    artista.innerHTML = `
    <h2>${Musica[index].art}</h2>
    <p>${Musica[index].msc}</p>
    `
    imagem.src = `${Musica[index].img}`
}

function tempoMusica(){
    let minutos = Math.floor((audio.duration)/60)
    let segundos = Math.floor(audio.duration % 60)
    let temporizador
    if(segundos > 9){
        temporizador = `0${minutos}:${segundos}`
    }else{
        temporizador = `0${minutos}:0${segundos}`
    }

    duracao.innerHTML = ` 
        <p>00:00</p>
        <p>${temporizador}</p>
    `
}

function tempoAtual () {
    let tempo = (((Math.floor(audio.currentTime)) / Math.floor(audio.duration)).toFixed(2))*100
    progresso.style.width = `${tempo}%`
}

function tocar () {
    resetIndex()
    Artista()
    statusSom()
    audio.src = `${Musica[index].url}`
    audio.play()
    play.style.display = 'none'
    pause.style.display = 'block'
}

function pausar () {
    audio.pause()
    pause.style.display = 'none'
    play.style.display = 'block'
}

Lista(Musica)

play.addEventListener('click',tocar)
audio.addEventListener('loadeddata',tempoMusica)
audio.addEventListener('timeupdate',tempoAtual)
pause.addEventListener('click',pausar)
proximo.addEventListener('click',next = () => {
    direction = 'right'
    pausar()
    index++
    tocar()
})
anterior.addEventListener('click',previous = () =>{
    direction = 'left'
    pausar()
    index--
    tocar()
})