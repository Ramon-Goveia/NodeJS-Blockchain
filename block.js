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

}

//Exportar classe
module.exports = Block