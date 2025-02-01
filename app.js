//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    var nome = document.getElementById("amigo").value;
    if (nome.trim() === "") {
        alert("Por favor, preencha o campo com seu nome."); // Alerta para o usuário
    } else {
        amigos.push(nome); // Adiciona o nome ao array
        console.log(nome); // Aqui você pode fazer algo com o nome, como exibi-lo ou usá-lo em outra parte do código.
        document.getElementById("amigo").value = ""; // Redefine o campo de texto para vazio
        atualizarLista(); // Atualiza a lista com os nomes
    }
}

    function atualizarLista() {
    var listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos

    for (var i = 0; i < amigos.length; i++) {
        var li = document.createElement("li"); // Cria um novo elemento <li>
        li.textContent = amigos[i]; // Define o texto do <li> como o nome do amigo
        listaAmigos.appendChild(li); // Adiciona o <li> à lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear."); // Alerta se o array estiver vazio
        return; // Sai da função se não houver amigos
    }

    var indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    var amigoSorteado = amigos[indiceAleatorio]; // Seleciona o amigo sorteado
    console.log("Amigo sorteado: " + amigoSorteado); // Exibe o amigo sorteado no console
        // Atualiza o conteúdo do elemento de resultado
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}