class ProducManager {
    constructor (){
        this.eventos = []
    }
    getProducts(){
        return this.eventos
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const eventoId = this.eventos.length +1
        const evento = {
            id : eventoId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.eventos.push(evento)
    }
}

ProducManager.addProduct("Producto prueba", "Este es un producto preuba", 200, "Sin imagen", "abc123", 25)