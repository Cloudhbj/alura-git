import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";



//console.clear(); // não funciona corretamente
console.log("\n\n ----->  INÍCIO \n\n");

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente( 102, cliente2);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

console.log(`Ricardo ->`, contaCorrenteRicardo, `\nAlice`, conta2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);
//--A------------------------------------------------

console.log(`Ricardo: CPF -> `, cliente1.cpf, ", Saldo -> ", contaCorrenteRicardo.saldo);
console.log(`Alice:   CPF -> `, cliente2.cpf, ", Saldo -> ", conta2.saldo);
console.log("\n->", ContaCorrente.numeroDeContas, " contas foram criadas até o momento.\n\n");

console.log("Testando o Git... Atualização da Ana");
console.log("Testando branch..."); 
console.log("Test");
console.log("theByteBank OK!");

//--B-------------------------------------
console.log("Ana está OK!");