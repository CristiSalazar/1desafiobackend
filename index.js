import { promises as fs } from "fs";

class ProductManager {
    constructor (){
        this.products = []
    }
    addProduct = async(title, description, price, thumbnail, code, stock) => {
        const eventoId = this.products.length +1
        const evento = {
             title,
             description,
             price,
             thumbnail,
             code,
             stock,
             id : eventoId,
         } 
         this.products.push(evento)
         await fs.writeFile("./producto.txt", JSON.stringify(this.products))
    }

    readProducts = async () => {
        let respuesta = await fs.readFile("./producto.txt", "utf-8")
        return JSON.parse(respuesta)
    }
    
    getProducts = async () =>{
        let respuesta2 = await this.readProducts()
        return console.log(respuesta2)
     }

    getProductsById = async (id) =>{
        let respuesta3 = await this.readProducts()
        let filtrar = respuesta3.find(product => product.id === id)
        console.log(filtrar)
     }
    
    deletProductsById = async (id) => {
        let respuesta3 = await this.readProducts()
        let deleteProduct = respuesta3.filter(product => product.id != id)
        await fs.writeFile("./producto.txt", JSON.stringify(deleteProduct))
        console.log("el producto se eliminó")
    } 

    updateProductsById = async (id, ...producto) => {
        await this.deletProductsById(id)
        let productAntiguo = await this.readProducts()
        let productoModificado = [
            {id, ...producto}, ...productAntiguo]
        await fs.writeFile("./producto.txt", JSON.stringify(productoModificado))
    }
}


const productos = new ProductManager()
productos.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)
productos.addProduct("Producto prueba 2", "Este es un producto prueba 2", 300, "Sin imagen 2", "abc1232", 22)
productos.deletProductsById(1)
productos.updateProductsById