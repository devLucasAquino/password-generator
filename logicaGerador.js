
function gerarCaracteresAleatorios(tamanho) {

    var caracteres = '';
    var codigos = [];
    var letrasMinusculas = [];
    var letrasMaiusculas = [];
    var numeros = [];

    // Gerar todos os códigos ASCII para letras maiúsculas e minúsculas
    for (var i =  65; i <=  90; i++) {
        letrasMaiusculas.push(i);
    }
    for (var i =  97; i <=  122; i++) {
        letrasMinusculas.push(i);
    }
    for (var i =  48; i <=  57; i++) {
        numeros.push(i);
    }
    
    // Mesclar todas as fontes de caracteres
    codigos = codigos.concat(letrasMaiusculas, letrasMinusculas, numeros);
    
    
        for (var j =  0; j < tamanho; j++) {
        // Escolher um caractere aleatório dos códigos disponíveis
        var indice = Math.floor(Math.random() * codigos.length);
        // Adicionar o caractere à string
        caracteres += String.fromCharCode(codigos[indice]);
        }


    return caracteres;
}

var result = document.querySelector('#result').textContent;

function gerarSenha(){

    var quantidade = parseInt(document.querySelector('#password-number').value);
    var tamanho = parseInt(document.querySelector('#password-lenght').value);

    var resultElement = document.querySelector('#result');
    resultElement.innerHTML = '';

    // Geração de múltiplas senhas
    for (var k =  0; k < quantidade; k++) {
        var senha = gerarCaracteresAleatorios(tamanho);
        resultElement.innerHTML += senha + "<br>";
    }
}