const ul = document.querySelector('nav ul'); //entramos al nav del html

let items = ['Home', 'Pantalones', 'Zapatos', 'Contacto']; //creamos lista para almacenar nombres de items

let marcado = [] //creamos lista vacia para almacenar los items de la lista

//for of 
for (let item of items){
    marcado.push(`<li><a href="${item.toLowerCase()}.html">${item}</a></li>`)
}

console.log(marcado)

//propiedad del body innerHTML para añadir los items del menu al navbar de los html
ul.innerHTML = marcado.join(""); //el .join elimina la coma que tiene el array por defecto para separar sus elementos