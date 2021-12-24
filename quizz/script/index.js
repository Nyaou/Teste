const ListadeQuiz = [
    {nome:'Bleach',img:'imagens/bleach.jpg',caminho:'quizz/quizBleach.html'},
    {nome:'One Piece',img:'imagens/one-piece.png',caminho:'quizz/quizOnePiece.html'},
    {nome:'Bunny girl senpai',img:'imagens/bunny-girl-senpai.jpg',caminho:'quizz/quizBunnyGirl.html'}
]
var next = document.getElementById('next')
var previous  = document.getElementById('previous')
var lista = document.getElementById('lista-de-quiz')
var index = 0

function ResetIndex(){
    if(index > ListadeQuiz.length-1){
        index = 0
    }else if(index < 0){
        index = ListadeQuiz.length-1
    }
}

function renderizarTela(){
    lista.innerHTML = `
    <a href="${ListadeQuiz[index].caminho}" target="_self"><img src="${ListadeQuiz[index].img}" alt="${ListadeQuiz[index].nome}"></a>
    <p><small>${ListadeQuiz[index].nome}</small></p>`
}

renderizarTela()
next.addEventListener('click',next = () =>{
    index++
    ResetIndex()
    renderizarTela()
} )
previous.addEventListener('click',previous = () => {
    index--
    ResetIndex()
    renderizarTela()
})


/*
<a href="${ListadeQuiz[0].caminho}" target="_self"><img src="${ListadeQuiz[0].img}" alt="${ListadeQuiz[0].nome}"></a>
*/