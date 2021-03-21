//Arquivo de teste
//Função para chamar o construtor
const Block = require('./block.js')
/* Bloco estático
const block = new Block(
    '242321', 
    '2346233192d72d982ef', 
    '623867drsfra1242', 
    '100'
    )
console.log(block.toString())*/
console.log(Block.genesis().toString())

const primeiroBloco = Block.mineBlock(Block.genesis(), '$500')
console.log(primeiroBloco.toString())