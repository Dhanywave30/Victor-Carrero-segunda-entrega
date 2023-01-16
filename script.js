// Segunda entrega correspondiente al curso de js. Es una Ecommerce,acerca de una casa fitness en donde se eligen los productos que estan por categorias


// 

class Producto {
    constructor(id, nombre, precio, cantidad, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}




let producto1 = new Producto(1, 'banda elastica', 2000, 1, 'accesorio');
let producto2 = new Producto(2, 'banda circular', 1200, 1, 'accesorio');
let producto3 = new Producto(3, 'colchoneta', 6400, 1, 'accesorio');
let producto4 = new Producto(4, 'cinturon', 12600, 1, 'accesorio');
let producto5 = new Producto(5, 'almohadilla de balance', 4500, 1, 'accesorio');
let producto6 = new Producto(6, 'Proteina 1kg', 9800, 1, 'suplementacion');
let producto7 = new Producto(7, 'Mass Gainer 3kg', 6000, 1, 'suplementacion')
let producto8 = new Producto(8, 'Quemador de grasa', 2300, 1, 'suplementacion')
let producto9 = new Producto(9, 'Glutamina', 2100, 1, 'suplementacion')
let producto10 = new Producto(10, 'Creatina', 14600, 1, 'suplementacion')
let producto11 = new Producto(11, 'Vitamina pro', 1800, 1, 'suplementacion')
let producto12 = new Producto(12, 'Caminadora', 130000, 1, 'maquinas')
let producto13 = new Producto(13, 'Bicicleta fija', 81000, 1, 'maquinas')
let producto14 = new Producto(14, 'Eliptico', 120000, 1, 'maquinas')

const mercaderia = []
mercaderia.push(producto1) 
mercaderia.push(producto2)
mercaderia.push(producto3)
mercaderia.push(producto4)
mercaderia.push(producto5)
mercaderia.push(producto6)
mercaderia.push(producto7)
mercaderia.push(producto8)
mercaderia.push(producto9)
mercaderia.push(producto10)
mercaderia.push(producto11)
mercaderia.push(producto12)
mercaderia.push(producto13)
mercaderia.push(producto14)



const carrito=[]
let continuar;
do {

    const productoAComprar = prompt("Ingrese el producto a comprar")
    const productoElegido = mercaderia.find(mercaderia => mercaderia.nombre === productoAComprar)
    if (productoElegido) {
        carrito.push(productoElegido)
        alert('agregado al carrito')
    }
    else { 
        alert('el producto no existe,vuelva a intentarlo')
    }

    // lógica para agregar el producto al carrito

    continuar = prompt("desea agregar otro producto? Si/No")

} while (continuar !== "No")

 let precio=prompt('¿su total es?')
let precioTotalCompra = carrito.reduce((acum,mer) => acum + mer.precio, 0)
alert(precioTotalCompra)


