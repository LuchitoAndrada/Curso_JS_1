//crear objeto

const coche = {
    //propiedades
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    encendido: false,
    //metodos
    encender: function() {
        this.encendido = true
        console.log("El coche está encendido.")
    },
    apagar: function () {
        this.encendido = false
        console.log("El coche está apagado..")
    }
}

//probar

coche.encender()
coche.apagar()