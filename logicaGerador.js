function gerarNumerosAleatorios(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +  1)) + min;
  }
  
function gerarCaracteresAleatorios(tamanho) {

    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var number = '1234567890';
    
    var password = '';
    
    if(verificarCheckBoxLowerCase() && verificarCheckBoxUpperCase()){
        var caracteres = '';
        
        caracteres = caracteres.concat(upperCase, lowerCase, number);

        for(var i = 0; i < tamanho; i++){
            
            password += caracteres.charAt(gerarNumerosAleatorios(0, caracteres.length));
        }
    }





    else if(verificarCheckBoxLowerCase()){

        var lowerCase_Number = '';
        lowerCase_Number = lowerCase_Number.concat(lowerCase, number);

        for(var i = 0; i < tamanho; i++){


            password += lowerCase_Number.charAt(gerarNumerosAleatorios(0, lowerCase_Number.length));
        }
        
    }





    else if(verificarCheckBoxUpperCase()){

        var upperCase_Number = '';
        upperCase_Number = upperCase_Number.concat(upperCase, number);

        for(var i = 0; i < tamanho; i++){

            password += upperCase_Number.charAt(gerarNumerosAleatorios(0, upperCase_Number.length));
        }

    }



    else{

        for(var i = 0; i < tamanho; i++){
            
            password += number.charAt(gerarNumerosAleatorios(0, number.length));
        }
    }



    return password;
}

function gerarSenha(){
    var resultElement = document.querySelector('#result');

    resultElement.innerHTML = '';

    var quantidade = parseInt(document.querySelector('#password-number').value);
    var tamanho = parseInt(document.querySelector('#password-lenght').value);


    for (var k =  0; k < quantidade; k++) {
        var senha = gerarCaracteresAleatorios(tamanho);
        resultElement.innerHTML += senha + "<br>";
    }
}

function clearPassword(){
    var resultElement = document.querySelector('#result');
    resultElement.innerHTML = '';
}

function verificarCheckBoxUpperCase(){

    var checkboxUpperCase = document.getElementById('upperCase');
    
    if(checkboxUpperCase.checked){
        return true;
    }
    else{
        return false;
    }
}

function verificarCheckBoxLowerCase(){

    var checkboxLowerCase = document.getElementById('lowerCase');
    
    if(checkboxLowerCase.checked){
        return true;
    }
    else{
        return false;
    }
}