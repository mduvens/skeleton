const fs = require('fs');
const cors = require('cors')
const express = require('express');

const JSONdb = require('simple-json-db');
const inventory = new JSONdb('database.json');

const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const log = (msg) => process.stdout.write(msg + '\n')



let GLOBAL_PRODUCTS = [];

const middle = (req, res, next) => {
    console.log("yoooooooooo");
    next()
    // next();
}
/**
 * PRODUCT
 */
app.route('/product')
    .post(middle,function(req,res){
        let exists = false;
        const NEW_PRODUCT = req.body;
        
        GLOBAL_PRODUCTS.forEach(product => {
            if('id' in NEW_PRODUCT && product.id  === NEW_PRODUCT.id ){
                exists = true
            }
        })

        if(!exists) GLOBAL_PRODUCTS.push(NEW_PRODUCT)
        
        saveProductsDB()

        res.send('OK')
    })
    .get(function(req,res){
        GLOBAL_PRODUCTS = inventory.get('products')
        res.send(inventory.get('products'))

    })
    .delete(function(req,res){

        var deleteID = req.body.productID;
        GLOBAL_PRODUCTS = GLOBAL_PRODUCTS.filter(p => p.id !== deleteID)
        saveProductsDB()
        res.send("OK")
    })

    
const saveProductsDB = () => {
    inventory.set('products', GLOBAL_PRODUCTS);
}


// Static folder
app.use(express.static(__dirname + '/public/'))

// Handle SPA (Vue Router)
app.get(/.*/,(req,res) => res.sendFile(__dirname + '/public/index.html'))

app.listen(PORT, () => {
  console.log(`E-Commerce APP @ PORT ${PORT}`)
})