function calcAreaRet(x, y){
    this.base = x;
    this.altura = y;
    let area = base*altura;
    return(area);
}

function basealtura(){
    base = prompt("Qual a base do teu retângulo, amigo?");
    altura = prompt("Agora, manda a altura e eu faço a mágica >:)");
    let retangulo = new Object();
    retangulo.base = base;
    retangulo.altura = altura;
    alert("Um objeto retangulo com base = " + retangulo.base + " e altura = " + retangulo.altura);
    alert("A área é: " + calcAreaRet(base, altura));
}

class Conta{
    constructor(){
        this.nomecorre;
        this.banco;
        this.numconta;
        this.saldo;
    };
    getNome(){
        return this.nomecorre;
    }
    setNome(value){
        this.nomecorre = value;
    }
    getBanco(){
        return this.banco;
    }
    setBanco(value){
        this.banco = value;
    }
    getNumConta(){
        return this.numconta;
    }
    setNumConta(value){
        this.numconta = value;
    }
    getSaldo(){
        return this.saldo;
    }
    setSaldo(value){
        this.saldo = value;
    }
}

class Corrente extends Conta{
    constructor(){
        super();
        this.saldoespecial;
    }
    getSaldoEspecial(){
        return this.saldoespecial;
    }
    setSaldoEspecial(value){
        this.saldoespecial = value;
    }
}

class Poupanca extends Conta{
    constructor(){
        super();
        this.juros;
        this.datavencimento;
    }
    getJuros(){
        return this.juros;
    }
    setJuros(value){
        this.juros = value;
    }
    getData(){
        return this.datavencimento;
    }
    setData(value){
        this.datavencimento = value;
    }
}

function CriarCorrPou(){
    let ContaCorr = new Corrente();
    let ContaPou = new Poupanca();
    ContaCorr.setNome(prompt("Qual o nome correntista da conta corrente?"));    
    ContaCorr.setBanco(prompt("Qual o banco da conta corrente?")); 
    ContaCorr.setNumConta(prompt("Qual o número da conta corrente?"));
    ContaCorr.setSaldo(prompt("Qual o saldo da conta corrente?"));
    ContaCorr.setSaldoEspecial(prompt("Qual o saldo especial da conta corrente?"));

    ContaPou.setNome(prompt("Qual o nome correntista da conta poupança?"));    
    ContaPou.setBanco(prompt("Qual o banco da conta poupança?")); 
    ContaPou.setNumConta(prompt("Qual o número da conta poupança?"));
    ContaPou.setSaldo(prompt("Qual o saldo da conta poupança?"));
    ContaPou.setJuros(prompt("Qual o juros?"));
    ContaPou.setData(prompt("Qual a da de vencimento?"));

    alert("Conta Corrente: \nNome: " + ContaCorr.getNome() + "\nBanco: " + ContaCorr.getBanco() + "\nNúmero da conta: " + ContaCorr.getNumConta() + "\nSaldo: " + ContaCorr.getSaldo() + "\nSaldo Especial: " + ContaCorr.getSaldoEspecial());
    alert("Conta Poupança: \nNome: " + ContaPou.getNome() + "\nBanco: " + ContaPou.getBanco() + "\nNúmero da conta: " + ContaPou.getNumConta() + "\nSaldo: " + ContaPou.getSaldo() + "\nJuros: " + ContaPou.getJuros() + "\nData de vencimento: " + ContaPou.getData());
}