//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos [];

function adicionarAmigo(){
    var name = document.getElementById("amigo").value;
    if (nome.trim() === "") {
        alert("Por favor, preencha o campo com seu nome."); //Alerta pra o usuário.
    } else {
        amigos.push(nome); // Adiciona o nome ao array.
        console.log(nome); // Aqui podemos fazer algo com o nome, como inseri-lo ou utiliza-lo em outra parte.
        document.getElementById("amigo").value = ""; // Utilizad para redefinir o campo de texto para vazio.
        atualizarLista(); // Comando para atualizar a lista de nomes
    }
 }
