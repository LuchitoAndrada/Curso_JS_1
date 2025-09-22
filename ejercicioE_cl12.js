//crear objeto

const cuenta = {
    //propiedades
    titular: "Valeria Ortiz",
    saldo: 10_000_000,
    depositar: function(monto){
        let total = monto+this.saldo
        console.log(`Se depositaron ${monto} y su saldo total actual es ${total}.`)
    },
    retirar: function (monto) {
        if (monto<=this.saldo){
            let total = this.saldo-monto
            console.log(`Se retiraron ${monto} y su saldo actual es de ${total}`)
        }else{
            console.log(`El saldo es insuficiente. Saldo actual`)
        }
    }
}

monto = prompt()