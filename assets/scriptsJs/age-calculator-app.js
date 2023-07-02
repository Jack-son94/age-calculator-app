
//MOSTRAR RESULTADO FINAL\\
const mostrarDia = document.getElementById('resultado-dia');
const mostrarMes = document.getElementById('resultado-mes');
const mostrarAno = document.getElementById('resultado-ano');
//FIM MOSTRAR RESULTADO FINAL\\

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    //PEGAR DATA ATUAL\\
    const dataAtual = new Date();
    var diaAtual = dataAtual.getDate();

    var mesCerto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var mesCorrigido = mesCerto[dataAtual.getMonth()];
    var mesAtual = mesCorrigido;

    var anoAtual = dataAtual.getFullYear();
    //FIM PAGA DATA\\

    //PEGAR DATA DIGITADA\\
    var diaDigitado = document.getElementById('dia').value;
    var mesDigitado = document.getElementById('mes').value;
    var anoDigitado = document.getElementById('ano').value;
    //FIM PEAR DATA DIGITADA\\

    //MENSAGENS DE ERRO\\
    var msgDia = document.querySelector('div#erro-dia');
    var label = document.querySelector('label#day');

    var msgMes = document.querySelector('div#erro-mes');
    var label2 = document.querySelector('label#month');

    var msgAno = document.querySelector('div#erro-ano');
    var label3 = document.querySelector('label#year');

    var bordaDia = document.getElementById("dia");
    var bordaMes = document.getElementById("mes");
    var bordaAno = document.getElementById("ano");
    //FIM MENSAGENS DE ERRO\\

    //CONTAR OS DIAS NO MES\\
    var diasNoMes = new Date(anoDigitado, mesDigitado, 0);
    //FIM CONTA DIAS NO MES\\
    var botao = document.querySelector('.enviar');

    //CALCULO DE IDADE\\
    var calcularIdade = anoAtual - anoDigitado;
    if (mesAtual != mesDigitado) {
        if (mesAtual < mesDigitado)
            calcularIdade--;
    } else {
        if (diaAtual < diaDigitado)
            calcularIdade--;
    }
    if (anoDigitado == anoAtual) {
        calcularIdade = 0;
    }
    //FIM CALCULO DE IDADE\\


    if (diaDigitado.length == 0) {
        label.style.color = 'hsl(0, 100%, 67%)';
        msgDia.style.display = "block";
        msgDia.innerHTML = "campo obrigatório";
        bordaDia.style.borderColor = 'hsl(0, 100%, 67%)';
        mostrarDia.innerHTML = "--";

    } else if (diaDigitado > diasNoMes.getDate() || diaDigitado < 1) {
        label.style.color = 'hsl(0, 100%, 67%)';
        msgDia.style.display = 'block';
        msgDia.innerHTML = "dia inválido";
        mostrarDia.innerHTML = "--";

    } else {
        diaDigitado.length != 0;
        msgDia.style.display = 'none';
        label.style.color = 'hsl(0, 1%, 44%)';
        bordaDia.style.borderColor = 'hsl(0, 0%, 86%)';
        botao.style.backgroundColor = 'hsl(0, 0%, 8%)';
        if (diaDigitado < diaAtual) {
            mostrarDia.innerHTML = diaAtual - diaDigitado;
        } else {
            mostrarDia.innerHTML = diaDigitado - diaAtual;
        }
    }

    if (mesDigitado.length == 0) {
        label2.style.color = 'hsl(0, 100%, 67%)';
        msgMes.style.display = "block";
        msgMes.innerHTML = "campo obrigatório";
        bordaMes.style.borderColor = 'hsl(0, 100%, 67%)';
        mostrarMes.innerHTML = "--";

    } else if (mesDigitado < 1 || mesDigitado > 12) {
        label2.style.color = 'hsl(0, 100%, 67%)';
        msgMes.style.display = "block";
        msgMes.innerHTML = "mês inválido";
        mostrarMes.innerHTML = "--";

    } else {
        mesDigitado.length != 0;
        msgMes.style.display = 'none';
        label2.style.color = 'hsl(0, 1%, 44%)';
        bordaMes.style.borderColor = 'hsl(0, 0%, 86%)';
        botao.style.backgroundColor = 'hsl(0, 0%, 8%)';
        if (mesDigitado < mesAtual) {
            mostrarMes.innerHTML = mesAtual - mesDigitado;
        } else {
            mostrarMes.innerHTML = mesDigitado - mesAtual;
        }
    }

    if (anoDigitado.length == 0) {
        label3.style.color = 'hsl(0, 100%, 67%)';
        msgAno.style.display = "block";
        msgAno.innerHTML = "campo obrigatório";
        bordaAno.style.borderColor = 'hsl(0, 100%, 67%)';
        mostrarAno.innerHTML = "--";

    } else if (anoDigitado > anoAtual || anoDigitado < 1) {
        label3.style.color = 'hsl(0, 100%, 67%)';
        msgAno.style.display = "block";
        msgAno.innerHTML = "ano inválido";
        mostrarAno.innerHTML = "--";

    } else {
        anoDigitado.length != 0;
        msgAno.style.display = 'none';
        label3.style.color = 'hsl(0, 1%, 44%)';
        bordaAno.style.borderColor = 'hsl(0, 0%, 86%)';
        mostrarAno.innerHTML = calcularIdade;
        botao.style.backgroundColor = 'hsl(0, 0%, 8%)';
    }


});