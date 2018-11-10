var titulo = document.querySelector('.titulo');
titulo.textContent = 'Smart Nutri';

var pacientes = document.querySelectorAll('.paciente');
console.log(pacientes);

for(var i = 0; i < pacientes.length; i++) {
    calcularImc(pacientes[i]);
}

function calcularImc(paciente) {
    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');
    var tdImc = paciente.querySelector('.info-imc');

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
        tdImc.textContent = valorImc.toFixed(2);
    } else {
        tdImc.textContent = 'Peso e/ou altura inválidos!';
        paciente.classList.add("paciente-invalido");
    }
}

//titulo.addEventListener("click", mostraMensagem);

//function mostraMensagem() {
//    console.log("Clicando do Titulo!!");
//}

titulo.addEventListener("click", function() {;
    console.log("Clicando do Titulo!!");
});

var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");
btnAdicionarPaciente.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Adicionando paciente....");
    
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabelaPacientes = document.querySelector("#tabela-pacientes");
    tabelaPacientes.appendChild(pacienteTr);

});

function adicionarDiv() {
    var h1 = document.createElement("h1");
    
    h1.classList.add("paciente-invalido");
    h1.textContent = "Agora simm!";

    var p = document.createElement("p");
    p.textContent = "Haha";

    titulo.appendChild(h1);
    titulo.appendChild(p);
};