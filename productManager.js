class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const product = {
            id: this.#getNextId() + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        if (!this.products.find((product) => product.code === code)) {
            this.products.push(product)
        } else console.log('Este codigo ya esta asignado a otro producto')
    }

    #getNextId(){
        let nextId = 0
        this.products.map((product)=>{
            if(product.id > nextId) nextId = product.id
        })
        return nextId
    }

    getProducts() {
        return this.products
    }

    getProductById(productId) {
        const productWanted = this.products.find((product) => product.id === productId)
        if(productWanted) {
            return productWanted
        } else console.log('not found')
    }
}

const productManager = new ProductManager

productManager.addProduct('sandalia', 'sandalia verde', 300, 'img1', 'aZxY0102', 15)
productManager.addProduct('ojota', 'ojota roja', 175, 'img2', 'aZxY0102', 12)
productManager.addProduct('zapatilla', 'zapatilla azul', 525, 'img3', 'aZxY0103', 20)

console.log(productManager.getProducts())
console.log(productManager.getProductById(2))
console.log(productManager.getProductById(7))
