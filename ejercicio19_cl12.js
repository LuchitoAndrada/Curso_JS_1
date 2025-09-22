//crear objeto llamado libro

const libro = {
    //propiedades
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry.",
    año: 1943,
    mostrarInfo: function() {
        console.log(`${this.titulo}-${this.autor}(${this.año})`);
    }
}

//mostrar datos
libro.mostrarInfo()