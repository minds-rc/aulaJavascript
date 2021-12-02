/* crie uma array, percora-o utilizando for, altere e exiba seus elementos
   modificados e os também os valores originais. */

let dano = [40, 45, 46, 51, 55]
console.log('----DANO SIMPLES----')

for (let i = 0; i < dano.length; i++) {
    console.log(dano[i])
}

console.log('----DANO CRÍTICO----')

for (let i = 0; i < dano.length; i++) {
    let critico = dano[i] * 2
    console.log(critico + '!!')
}