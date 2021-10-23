
import axios from 'axios'
import helper from './helper'
import {ref} from '@vue/runtime-core'

// private //
const productsMap = ref(new Map());

let products = productsMap.value

// public //
const main = {};

// const getProductsAPI = async () => {
//     const res = await axios.get('http://localhost:3000/product')

//     console.log(res)
    
//     if(Array.isArray(res.data)){
//         res.data.forEach(product => products.set(product.id, product))
//     }
    
// }



// GET
main.getAllProducts = () => products

main.getAllProductsList = async () => {
    const res = await axios.get('http://localhost:3000/product')
    console.log(res.data)
    return res.data;
    // return Array.from(products.values())
}

// SET
main.addProduct = (product) => {
    if(product){
        const productRaw = helper.raw(product)

        if(product.name && product.price){
            products.set(product.name, productRaw)

            axios.post('http://localhost:3000/product' ,productRaw)
            .then(res => console.log(res))
            .catch(e => console.log(e))
        }
    }
}

main.removeProduct = (productID) => {
}

// Export
export default main