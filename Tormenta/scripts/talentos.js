function Check_Training_Status(input, nivel){
    if (input == "sim"){ 
        if (nivel >= 1 && nivel < 7) {
            return 2;
        }
        else if (nivel >= 7 && nivel < 15){
            return 4
        }
        else if (nivel >= 15 && nivel <=20){
            return 6
        }
        else{
            alert("erro na hora de calcular o nível")
        }
    }
    else{
        return 0
    }
}

function rolar_dado(botao){
    const linha = botao.closest("tr")
    const input_atributo = linha.querySelector('.atributo').value 
    const input_nivel = linha.querySelector('.nivel').value 
    const input_treino = linha.querySelector('.treino').value 
    const input_outros = linha.querySelector('.outros').value 
    console.log(input_nivel,input_atributo,input_outros)

    const nivel = parseInt(input_nivel)
    var bonus_nivel = Math.floor(nivel/2)
    console.log(bonus_nivel)
    let bonus_nivel_pericia = Check_Training_Status(input_treino, nivel)

    let bonus = bonus_nivel+bonus_nivel_pericia
    var soma = (parseInt(input_atributo)+bonus+parseInt(input_outros))
    function dado() {
        return Math.floor(Math.random() * 20) + 1;
    }

    valor = dado()
    resultado = valor + soma
    console.log("Rolagem do dado:",valor)
    console.log("Valor:",resultado)
    console.log(input_treino)
    window.alert(`1d20[${valor}]+${soma} = ${resultado}`)
}
