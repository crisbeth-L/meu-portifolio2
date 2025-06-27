let compras= JSON.parse(localStorage.getItem("compras")) || []; // variavel compras, vetor vacio, JSON converte em string

function comprar() { //função comprar
    let continuar = true; //se a variável "continuar" for verdadeira

    while(continuar) { //laço de repetição while 
        let item = prompt("Digite um item:"); //pede ao usuário e guarda na variavel item

        if (item && item.trim() !== " ") { //faz a comparação 
            compras.push(item.trim()); //compras vai receber os itens, ou seja, o que pessoa vai digitar
        }
        let resposta = prompt("Adicionar outro item? (s/n)"); //variavel de resposta rebece se quer continuar adicionando items ou não
        if (!resposta || resposta.toLowerCase() !== "s") continuar = false; //comparação para adicionar mais itens na lista  
    }
    localStorage.setItem("compras", JSON.stringify(compras)); //JSON coverte em string
}
function atualizarLista(){ //função de atualizar a lista 
    const lista = document.getElementById("listaCompras"); // const: valores constantes que não podem ser trocados
    lista.innerHTML = " "; 
    compras.forEach((item,i) => {
    const li = document.createElement("li"); //variavel constante de "li" 
    li.textContent = `${i + 1}. ${item}`; //conta desde o primeiro item, exemplo 1 arroz, 2 carne.  Os identificadores que contêm $ são nomes de variáveis   válidos.
    lista.appendChild(li); //lê lista de compras 
    });
}

function limparLista() {//limpa lista 
  compras = []; //vetor vacio
  localStorage.removeItem("compras"); //vai leer a string compras e remover o que tem 
  atualizarLista(); //atualiza a lista 
}

window.addEventListener("DOMContentLoaded", atualizarLista);