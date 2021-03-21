const SHA256 = require('crypto-js/sha256')

//Classe
class Block{
    //Construtor
    //Atributos
    constructor(timestamp, lastHash, hash, data){
        //vincular inputs aos atributos
        this.timestamp = timestamp
        this.lastHash = lastHash
        this.hash = hash
        this.data = data
    }

    /*Função de conversão da classe para string, 
    para receber o valor dos inputs*/
    toString(){
        return `Block = 
                Timestamp = ${this.timestamp}
                lastHash = ${this.lastHash.substring(0, 10)}
                hash = ${this.hash.substring(0, 10)}
                data = ${this.data}
                `
    }

    //Função bloco gênesis
    static genesis(){
        //retorna nova instância da classe bloco
        return new this('Genesis time', '--------', '21032021', [])
    }

    //Função gerar novo bloco
    static mineBlock(lastBlock, data) {
        const timestamp = Date.now()
        const lastHash = lastBlock.hash
        const hash = Block.hash(timestamp, lastHash, data)

        return new this(timestamp, lastHash, hash, data)
    }

    //Função hash SHA256
    static hash(timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString()
    }

}
//Exportar classe
module.exports = Block