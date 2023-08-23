class ProducManager {
    constructor (){
        this.products = []
    }
    getProducts(){
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const eventoId = this.products.length +1
        const eventoCode = this.products
        const productoEncontrado = this.products.find((evento) => evento.id === eventoId)
        if (productoEncontrado) {
            console.log("Ya exite el código")
            return
        }
        const evento = {
            id : eventoId,
            title,
            description,
            price,
            thumbnail,
            code : eventoCode,
            stock
        }
        this.products.push(evento)
    }
}


ProducManager.addProduct("Producto prueba", "Este es un producto preuba", 200, "Sin imagen", "abc123", 25)