
import axios from 'axios'
import helper from './helper'
import {ref} from '@vue/runtime-core'

// private //
const productsMap = ref(new Map());
let products = productsMap.value

// public //
const main = {};

// GET
main.getAllProducts = () => products
main.getAllProductsList = () => Array.from(products.values())

const getProductsAPI = () => {
    axios.get('http://localhost:3000/product').then(res =>  {
        console.log(res)
        res.data.forEach(product => products.set(product.id, product))
    })
}

// SET
main.addProduct = (product) => {
    if(product){
        const productRaw = helper.raw(product)

        if(product.id && product.title && product.price){
            products.set(product.id, productRaw)

            saveToServer(productRaw)
        }
    }
}

main.removeProduct = (productID) => {
    const size = products.size
    products.delete(productID)
    products.size < size ? console.log("Product DELETED") : console.log("Product no exist");
    axios.delete('http://localhost:3000/product' ,{ data: { productID } })
}

const saveToServer = (data) => {
    axios.post('http://localhost:3000/product' ,data)
}

// Run
getProductsAPI()

// Export
export default main