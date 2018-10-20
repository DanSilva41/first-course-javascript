var titulo = document.querySelector('.titulo');
titulo.textContent = 'Smart Nutri';

var primeiroPaciente = document.querySelector('#primeiro-paciente');
var tdPeso = primeiroPaciente.querySelector('.info-peso');
var tdAltura = primeiroPaciente.querySelector('.info-altura');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
console.log(peso);
console.log(altura);

var valorImc = peso / (altura * altura);
console.log('IMC: '+ valorImc);
var tdImc = primeiroPaciente.querySelector('.info-imc');
tdImc.textContent = valorImc;