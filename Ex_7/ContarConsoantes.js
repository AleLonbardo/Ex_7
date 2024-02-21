function contarConsoantes(nome) {
    // Converter o nome para minúsculas para facilitar a comparação
    nome = nome.toLowerCase();

    // Inicializar o contador de consoantes
    var contadorConsoantes = 0;

    // Definir um array com as vogais
    var vogais = ['a', 'e', 'i', 'o', 'u'];

    // Iterar sobre cada caractere do nome
    for (var i = 0; i < nome.length; i++) {
        // Verificar se o caractere atual não é uma vogal e é uma letra
        if (!vogais.includes(nome[i]) && nome[i].match(/[a-z]/i)) {
            contadorConsoantes++;
        }
    }

    // Retornar a quantidade de consoantes encontradas
    return contadorConsoantes;
}

// Ler o nome do usuário
var nomeUsuario = prompt("Digite seu nome:");

// Calcular e exibir a quantidade de consoantes no nome
var quantidadeConsoantes = contarConsoantes(nomeUsuario);
console.log("O nome " + nomeUsuario + " contém " + quantidadeConsoantes + " consoantes.");
