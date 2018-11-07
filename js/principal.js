var titulo = document.querySelector('.titulo');
titulo.textContent = 'Smart Nutri';

var primeiroPaciente = document.querySelector('#primeiro-paciente');
var tdPeso = primeiroPaciente.querySelector('.info-peso');
var tdAltura = primeiroPaciente.querySelector('.info-altura');
var tdImc = primeiroPaciente.querySelector('.info-imc');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000) {
    pesoEhValido = false;
    tdPeso.textContent = 'Peso inválido';
}
if(altura <= 0 || altura >= 3.00) {
    alturaEhValida = false;
    tdAltura.textContent = 'Altura inválida';
}

if(pesoEhValido && alturaEhValida) {
    var valorImc = peso / (altura * altura);
    console.log('IMC: '+ valorImc);
    tdImc.textContent = valorImc;
} else {
    tdImc.textContent = 'Peso e/ou altura inválidos!';
}
