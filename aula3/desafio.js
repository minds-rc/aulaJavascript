/* Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.
Crie uma função podeEntrar() que receba dois parâmetros: 
altura da pessoa;
se está acompanhada.
Deve retornar uma mensagem se a pessoa pode entrar ou não na montanha-russa, baseado nas seguintes condições:
A pessoa deve medir mais de 1.40m e menos de 2 metros.
Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada. */

// vamos utilizar function & if ou swich, reflitam!!!

/* -----------------------------UTILIZANDO IF ELSE----------------------------- */

function podeEntrar(altura, acompanhante = false) {

    if (altura >= 1.40 && altura <= 2.00) {
        console.log('Pode Entrar')
        return true
    } else if ((altura < 1.40 && altura >= 1.20) && (acompanhante == true)) {
        console.log('pode entrar com acompanhante')
        return true;
    } else if (altura < 1.40 && altura >= 1.20) {
        console.log('precisa de um acompanhante')
        return false
    } else {
        console.log('não pode entrar')
        return false
    }
}

podeEntrar(1.35, true);


/* -----------------------------UTILIZANDO SWITCH CASE----------------------------- */

/* function podeEntrar(altura, acompanhante) {
    switch (altura, acompanhante) {
        case (altura >= 1.40 && altura <= 2.00):
            console.log('pode entrar')
            break;

        case ((altura < 1.40 && altura >= 1.20) && (acompanhante == true)):
            console.log('pode entrar com acompanhante')
            break;

        case ((altura < 1.40 && altura >= 1.20) && (acompanhante == false)):
            console.log('precisa de um acompanhante')
            break;

        default:
            console.log('não pode entrar');
    }
}

podeEntrar(1.35, false); */