class ProducManager {
    constructor (){
        this.products = []
    }
    getProducts(){
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const eventoId = this.products.length +1
        const evento = {
            id : eventoId,
            title,
            description,
            price,
            thumbnail,
            stock
        }
        this.products.push(evento)

    getProductsById => {
        this.products.find((evento) => evento.id === eventoId)
    }
    }
}

const productos = new ProducManager()
productos.addProduct("Producto prueba", "Este es un producto preuba", 200, "Sin imagen", "abc123", 25)
console.log(productos)