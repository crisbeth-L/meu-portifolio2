//javascript

function calcularIMC(){//Pega a função  de calcular IMC do index.html
    const peso = parseFloat(document.getElementById("peso").value);//pega as variaveis que ja foram declaradas no index
    const altura = parseFloat(document.getElementById("altura").value);//pega as variaveis que ja foram declaradas no index
    const resultado = document.getElementById("resultado");//pega as variaveis que ja foram declaradas no index

    if (peso > 0 && altura > 0){
        const imc = peso /(altura*altura);//Faz o calculo do IMC
        let classificacao= "";//limita a variável declarada somente para classificacao

//condição
    if (imc < 18.5) classificacao = "Abaixo do Peso";//se o IMC esta abixo de 18.5 mostra "Abaixo do peso"
    else if (imc < 25) classificacao = "Peso Normal";//se o IMC esta abixo de 18.5 mostra "Peso Normal"
    else if (imc < 30) classificacao = "Sobrepeso";//se o IMC esta abixo de 18.5 mostra "Sobrepeso"
    else classificacao = "Obesidade";//senão o IMC mostra "Obesidade"

    resultado.textContent = `Imc: ${imc.toFixed(2)} (${classificacao})`;
    } //fehca o primeiro if
    else {
        resultado.textContent = "Digite valores válidos";//só vai mostrar quando tenha valoes invalidos
    }//fecha o Else
}//fecha principal
//ATIVIDADE
//comentar o que faz as linhas de codigo de js.