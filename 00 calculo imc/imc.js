const calcular = document.getElementById('calcular')

function imc () {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso =  document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){
       const valorIMC = (peso / (altura * altura)).toFixed(1)
       let classificacao = ''
       if(valorIMC < 18.5){
        classificacao = 'Abaixo do peso!!'
       }else if(valorIMC < 25){
        classificacao = 'com o Peso ideal!!'
       }else if(valorIMC < 30){
        classificacao = 'Um pouco acima do peso!!'
       }else if(valorIMC < 35){
        claffisicacao = 'com Obesidade grau I'
       }else if(valorIMC < 40){
        classificacao = 'com Obesidade grau II'
       }else{
        classificacao = 'com Obesidade morbida cuidado!!!'
       }
       resultado.textContent = `${nome} o senhor está com o indice de massa corporal em:${valorIMC} e você está ${classificacao}`
    }else{
        resultado.textContent = 'Preencha todos os campos'
    }
}
calcular.addEventListener('click',imc) 

  