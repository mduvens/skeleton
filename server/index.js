const fs = require('fs');
const cors = require('cors')
const express = require('express');
const mongoose = require('./mongoose/index')

const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const log = (msg) => process.stdout.write(msg + '\n')

const middleware = (req, res, next) => {
    console.log("yoooooooooo");
    next()
}
/**
 * PRODUCT
 */
app.route('/product')
    .post(middleware, async function (req, res) {
        // post products
        const product = req.body;
        await mongoose.saveProduct(product)
        res.send("ok")
    })
    .get(async function (req, res) {
        // retrieve products
        const result = await mongoose.getProducts();
        console.log(result)
        res.json(result)


    })
    .delete(function (req, res) {
        // delete products
    })


// Static folder
app.use(express.static(__dirname + '/public/'))

// Handle SPA (Vue Router)
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.listen(PORT, () => {
    console.log(`E-Commerce APP @ PORT ${PORT}`)
})