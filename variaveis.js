//-----Declarando com VAR-----
var nome = 'Ricardo'
nome = 'Danilo' //para redeclarar a variavel, não precisa utilizar "var"
var email = 'ricardo.mcruz119@Gmail.com'
email = 'ricardocruz@gmail.com'

console.log(nome)
console.log(email)

//-----Declarando com LET-----

/* variaveis declaradas com LET são utilizadas somente dentro de um escopo */
let nome2 = 'Roberto'
nome2 = 'Arthur' //aqui também não precisa utilizar LET para redeclarar

console.log(nome2)

//-----Declarando com CONST-----

const nome3 = "Ricardo Mendes"
/* nome3 = 'Renan' // nesse caso não pode reatribuir pois CONST é para apenas 1 "constante" */