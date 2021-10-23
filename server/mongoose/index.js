// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

// Schemas
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });

// Models
const Product = mongoose.model('Product', productSchema);

async function deleteProduct(name = null){
    Product.deleteMany(name ? {name: name} : {}, (err, docs) => {
        if(err){
            console.log(err)
        }
        console.log("Deleted product " + name);
    })
}


async function saveProduct(product){
  if(product && 'name' in product && 'price' in product){
    Product.find({name: product.name}, async (err, docs) => {
        if(docs.length === 0){
            await new Product({
                name: product.name,
                price: product.price
                
            }).save();
            console.log('success')
        }
        else{
            console.log("Error saving product " + product.name);
        }
    })    
    }
}

async function getProducts(){
    const result = await Product.find();
    return result
}

module.exports = {
    getProducts,
    saveProduct,
    deleteProduct
}