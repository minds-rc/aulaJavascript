/* // variável de escopo local
function ola() {
    let bemVindo = 'Olá mundo!!!';
    return bemVindo
}
console.log(bemVindo) // error is not defined

 */
// variável de escopo global
var olaMundo = 'Olá mundo, estou aprendendo javascript';

function hello() {
    return olaMundo;
}
console.log(olaMundo);

function conc() {
    return olaMundo;
}
console.log(olaMundo + ' e logo vou desenvolver meu software')