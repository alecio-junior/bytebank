import { Conta } from "./conta/Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    sacar(valor){
        const taxa = 1.08;
        return this._sacar(valor, taxa);
    }
}

