function contarConsoantes(nome) {
    // Converter o nome para min�sculas para facilitar a compara��o
    nome = nome.toLowerCase();

    // Inicializar o contador de consoantes
    var contadorConsoantes = 0;

    // Definir um array com as vogais
    var vogais = ['a', 'e', 'i', 'o', 'u'];

    // Iterar sobre cada caractere do nome
    for (var i = 0; i < nome.length; i++) {
        // Verificar se o caractere atual n�o � uma vogal e � uma letra
        if (!vogais.includes(nome[i]) && nome[i].match(/[a-z]/i)) {
            contadorConsoantes++;
        }
    }

    // Retornar a quantidade de consoantes encontradas
    return contadorConsoantes;
}

// Ler o nome do usu�rio
var nomeUsuario = prompt("Digite seu nome:");

// Calcular e exibir a quantidade de consoantes no nome
var quantidadeConsoantes = contarConsoantes(nomeUsuario);
console.log("O nome " + nomeUsuario + " cont�m " + quantidadeConsoantes + " consoantes.");
