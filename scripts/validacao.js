function validarFormulario(){

    //Obter Dados

    let formulario = {
        nomeMotorista:  document.getElementById('nomeMotorista'),
        dataNascimentoMotorista: document.getElementById('dataNascimentoMotorista'),
        cpfMotorista: document.getElementById('cpfMotorista'),
        telefoneMotorista: document.getElementById('telefoneMotorista'),
        emailMotorista: document.getElementById('emailMotorista'),
        registroCnhMotorista: document.getElementById('registroCnhMotorista'),
        categoriaCnhMotorista: document.getElementById('categoriaCnhMotorista'),
        validadeCnhMotorista: document.getElementById('validadeCnhMotorista'),

        marcaCaminhao: document.getElementById('marcaCaminhao'),
        modeloCaminhao: document.getElementById('modeloCaminhao'),
        potenciaCaminhao: document.getElementById('potenciaCaminhao'),
        quilometragemCaminhao: document.getElementById('quilometragemCaminhao'),
        corCaminhao: document.getElementById('corCaminhao'),
        consumoCaminhao: document.getElementById('consumoCaminhao'),
        renavamCaminhao: document.getElementById('renavamCaminhao'),
        placaCaminhao: document.getElementById('placaCaminhao'),

        nomeCarga: document.getElementById('nomeCarga'),
        pesoCarga: document.getElementById('pesoCarga'),
        tipoCarga: document.getElementById('tipoCarga'),
        larguraCarga: document.getElementById('larguraCarga'),
        comprimentoCarga: document.getElementById('comprimentoCarga'),
        valorCarga: document.getElementById('valorCarga'),

        cidadeOrigem: document.getElementById('cidadeOrigem'),
        estadoOrigem: document.getElementById('estadoOrigem'),
        enderecoOrigem: document.getElementById('enderecoOrigem'),
        cidadeDestino: document.getElementById('cidadeDestino'),
        estadoDestino: document.getElementById('estadoDestino'),
        enderecoDestino: document.getElementById('enderecoDestino'),
        distanciaViagem: document.getElementById('distanciaViagem'),
        tempoEstimadoViagem: document.getElementById('tempoEstimadoViagem'),
        dataHoraPartida: document.getElementById('dataHoraPartida'),
        dataHoraChegada: document.getElementById('dataHoraChegada'),
        pedagioViagem: document.getElementById('pedagioViagem')
    }

    //Verificar se todos não estão vazios ou nulos

    for(let elemento of Object.values(formulario)) {
        if(!elemento.value){
            let label = document.querySelector('label[for="' + elemento.id + '"]').innerHTML.split(':')[0]; //Acessa a label, retirando o ':' e utilizando o atributo 'for'
            alert('Não deixe ' + label + ' vazio');
            return;
        }
    }

    //Verificar se são números (os que devem ser números)

    if(!validarNumero(potenciaCaminhao, 0, 1000))return;
    if(!validarNumero(quilometragemCaminhao, 0, 10000000))return;
    if(!validarNumero(consumoCaminhao, 0, 30))return;
    if(!validarNumero(pesoCarga, 0, 1000))return;
    if(!validarNumero(larguraCarga, 0, 50))return;
    if(!validarNumero(comprimentoCarga, 0, 200))return;
    if(!validarNumero(valorCarga, 0, 1000000000000))return;
    if(!validarNumero(distanciaViagem, 0, 100000))return;
    if(!validarNumero(pedagioViagem, 0, 1000000))return;
    

    //Verificar se os números que são strings (como CPF e RENAVAM) são apenas números
    if(!validarNumeroString(cpfMotorista, 11))return;
    if(!validarNumeroString(telefoneMotorista, 11))return;
    if(!validarNumeroString(registroCnhMotorista, 11))return;
    if(!validarNumeroString(renavamCaminhao, 11))return;

    //Verificar se textos simples (como nome e cidade) não possuem caracteres especiais e números
    if(!validarString(nomeMotorista, 3, 50))return;
    if(!validarString(categoriaCnhMotorista, 1, 3))return;
    if(!validarString(marcaCaminhao, 1, 30))return;
    if(!validarString(nomeCarga, 1, 40))return;
    if(!validarString(cidadeOrigem, 2, 30))return;
    if(!validarString(estadoOrigem, 2, 2))return;
    if(!validarString(cidadeDestino, 2, 30))return;
    if(!validarString(estadoDestino, 2, 2))return;

}
function validarNumero(elemento, valorMinimo, valorMaximo){
    let numero = parseFloat(elemento.value);
    if(isNaN(numero) || numero < valorMinimo || numero > valorMaximo){
        let label = document.querySelector('label[for="' + elemento.id + '"]').innerHTML.split(':')[0]; //Acessa a label, retirando o ':' e utilizando o atributo 'for'
        alert('Insira um valor válido em ' + label + ' (verifique se é um número e se é maior que ' + valorMinimo + ' e menor que ' + valorMaximo);
        return false;
    }
    return true;
}
function validarNumeroString(elemento, numeroCaracteres){
    let string = elemento.value;
    if(isNaN(parseInt(string)) || string.length != numeroCaracteres){
        let label = document.querySelector('label[for="' + elemento.id + '"]').innerHTML.split(':')[0]; //Acessa a label, retirando o ':' e utilizando o atributo 'for'
        alert('Insira um valor válido em ' + label + ' (verifique se possui ' + numeroCaracteres + ' caracteres');
        return false;
    }
    return true;
}
function validarString(elemento, caracteresMin, caracteresMax){
    let string = elemento.value;
    //Verifica o máximo de caracteres
    if(string.length > caracteresMax){
        let label = document.querySelector('label[for="' + elemento.id + '"]').innerHTML.split(':')[0]; //Acessa a label, retirando o ':' e utilizando o atributo 'for'
        alert('O campo ' + label + ' possui mais de ' + caracteresMax + ' caracteres');
        return false;
    }
    //Verifica o mínimo de caracteres
    if(string.length < caracteresMin){
        let label = document.querySelector('label[for="' + elemento.id + '"]').innerHTML.split(':')[0]; //Acessa a label, retirando o ':' e utilizando o atributo 'for'
        alert('O campo ' + label + ' possui menos de ' + caracteresMin + ' caracteres');
        return false;
    }
    //Verifica se possui números ou caracteres especiais
    for(let caractere of Object.values(string)) {
        if(!isNaN(parseInt(caractere)) || caractereEspecial(caractere)){
            let label = document.querySelector('label[for="' + elemento.id + '"]').innerHTML.split(':')[0]; //Acessa a label, retirando o ':' e utilizando o atributo 'for'
            alert('O campo ' + label + ' tem um valor inválido. ');
            return false;
        }
    }
    return true;
}
function caractereEspecial(caractere){
    const especiais = ['/', '@', ']', '[', '{', '}', '<', '>', '?', '!', '#', '$'];
    for(let element of Object.values(especiais)) {
        if(element === caractere){
            return true;
        }
    }
    return false;
}