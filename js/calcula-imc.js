var pacientes = document.querySelectorAll('.paciente');
console.log(pacientes);

for(var i = 0; i < pacientes.length; i++) {
    var tdPeso = pacientes[i].querySelector('.info-peso');
    var tdAltura = pacientes[i].querySelector('.info-altura');
    var tdImc = pacientes[i].querySelector('.info-imc');

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido) {
        tdPeso.textContent = 'Peso inválido';
    }
    if(!validaAltura) {
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

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura < 3.0) {
        return true;
    } else {
        return false;
    }
}

function calcularImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}












