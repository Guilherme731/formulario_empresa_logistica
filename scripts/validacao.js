function validarFormulario(){
    //Obter Dados

    //Motorista
    const nomeMotorista = document.getElementById('nomeMotorista').value;
    const dataNacmentoMotorista = document.getElementById('dataNascimentoMotorista').value;
    const cpfMotorista = document.getElementById('cpfMotorista').value;
    const telefoneMotorista = document.getElementById('telefoneMotorista').value;
    const emailMotorista = document.getElementById('emailMotorista').value;
    const registroCnhMotorista = document.getElementById('registroCnhMotorista').value;
    const categoriaCnhMotorista = document.getElementById('categoriaCnhMotorista').value;
    const validadeCnhMotorista = document.getElementById('validadeCnhMotorista').value;

    //Caminhão:
    const marcaCaminhao = document.getElementById('marcaCaminhao').value;
    const modeloCaminhao = document.getElementById('modeloCaminhao').value;
    const potenciaCaminhao = parseFloat(document.getElementById('potenciaCaminhao').value);
    const quilometragemCaminhao = parseFloat(document.getElementById('quilometragemCaminhao').value);
    const corCaminhao = document.getElementById('corCaminhao').value;
    const consumoCaminhao = parseFloat(document.getElementById('consumoCaminhao').value);
    const renavamCaminhao = document.getElementById('renavamCaminhao').value;
    const placaCaminhao = document.getElementById('placaCaminhao').value;

    //Carga
    const nomeCarga = document.getElementById('nomeCarga').value;
    const pesoCarga = parseFloat(document.getElementById('').value);
    const tipoCarga = document.getElementById('tipoCarga').value;
    const larguraCarga = parseFloat(document.getElementById('larguraCarga').value);
    const comprimentoCarga = parseFloat(document.getElementById('comprimentoCarga').value);
    const valorCarga = parseFloat(document.getElementById('valorCarga').value);

    //Viagem
    const cidadeOrigem = document.getElementById('cidadeOrigem').value;
    const estadoOrigem = document.getElementById('estadoOrigem').value;
    const enderecoOrigem = document.getElementById('enderecoOrigem').value;
    const cidadeDestino = document.getElementById('cidadeDestino').value;
    const estadoDestino = document.getElementById('estadoDestino').value;
    const enderecoDestino = document.getElementById('enderecoDestino').value;
    const distanciaViagem = parseFloat(document.getElementById('distanciaViagem').value);
    const tempoEstimadoViagem = document.getElementById('tempoEstimadoViagem').value;
    const dataHoraPartida = document.getElementById('dataHoraPartida').value;
    const dataHoraChegada = document.getElementById('dataHoraChegada').value;
    const pedagioViagem = document.getElementById('pedagioViagem').value;

    //Validar Dados
}