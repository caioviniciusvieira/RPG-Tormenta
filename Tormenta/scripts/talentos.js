



function rolar_dado(botao){
    const linha = botao.closest("tr")
    const input_atributo = linha.querySelector('.atributo').value 
    const input_nivel = linha.querySelector('.nivel').value 
    const input_treino = linha.querySelector('.treino').value 
    const input_outros = linha.querySelector('.outros').value 

    console.log(input_nivel,input_atributo,input_outros,input_treino)
    var soma = (parseInt(input_atributo)+parseInt(input_nivel)+parseInt(input_outros)+parseInt(input_treino))
    function dado() {
        return Math.floor(Math.random() * 20) + 1;
    }
    valor = dado()
    resultado = valor + soma
    console.log("Rolagem do dado:",valor)
    console.log("Valor:",resultado)

    window.alert(`1d20[${valor}]+${soma} = ${resultado}`)
}
