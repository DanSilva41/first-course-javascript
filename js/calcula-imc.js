var pacientes = document.querySelectorAll('.paciente');
console.log(pacientes);

for(var i = 0; i < pacientes.length; i++) {
    var tdPeso = pacientes[i].querySelector('.info-peso');
    var tdAltura = pacientes[i].querySelector('.info-altura');
    var tdImc = pacientes[i].querySelector('.info-imc');

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
        var valorImc = calcularImc(peso, altura);
        console.log('IMC: '+ valorImc);
        tdImc.textContent = valorImc;
    } else {
        tdImc.textContent = 'Peso e/ou altura inválidos!';
        pacientes[i].classList.add("paciente-invalido");
    }
}

function calcularImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}












