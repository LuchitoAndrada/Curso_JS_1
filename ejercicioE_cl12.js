//crear objeto

const cuenta = {
    titular: "Juan Pérez",
    saldo: 1000,

    depositar: function(monto) {
        this.saldo += monto;
        console.log(`Se depositaron ${monto}. Saldo actual: ${this.saldo}`);
    },

    retirar: function(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Se retiraron ${monto}. Saldo actual: ${this.saldo}`);
        } else {
            console.log(`Fondos insuficientes. Saldo actual: ${this.saldo}`);
        }
    }
};


// menu
let opcion = prompt(
`Seleccione una opción:
1. Depositar
2. Retirar
3. Consultar saldo`);

switch (opcion) {
    case "1":
        let montoDeposito = parseFloat(prompt("Ingrese el monto a depositar:"));
        cuenta.depositar(montoDeposito);
        break;

    case "2":
        let montoRetiro = parseFloat(prompt("Ingrese el monto a retirar:"));
        cuenta.retirar(montoRetiro);
        break;

    case "3":
        console.log(`Saldo actual: ${cuenta.saldo}`);
        break;

    default:
        console.log("Opción no válida");
        break;
}