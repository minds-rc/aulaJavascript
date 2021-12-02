//1. Crie um array que contenha nomes de produtos para compra;
let carrinho = ['tenis', 'calça', 'moletom', 'boné']


//2. Após isto, exiba no console os resultados das métodos relacionadas aos arrays, que são: join(), pop(), push(), shift(), unshift() e demais...
console.log('une os itens do array em uma unica string e Separa o array pelo sinal indicado como parâmetro')
let carrinhoJoin = carrinho.join('-') //se nao colocar o sinal, por padrao, os itens serão separados por virgula
console.log(carrinhoJoin)


console.log('o metodo pop retira o ultimo item do array')
carrinho.pop()
console.log(carrinho)


console.log('o metodo push adiciona os itens indicados como parâmetro ao final do array')
carrinho.push('camiseta')


console.log('o metodo shift retira o primeiro item do array')
carrinho.shift()


console.log('o metodo unshift adiciona os itens indicados como parâmetro no inicio do array')
carrinho.unshift('cordão')



/* console.log('o metodo indexOf qual a opsição do intem indicado, no array')
console.log(carrinho.indexOf('moletom')) */
/* 3. Descreva com duas palavras, no console o que cada método faz;
      exemplo: console.log("O método join realiza tal ação")
               console.log(RESULTADO_DO_JOIN) */