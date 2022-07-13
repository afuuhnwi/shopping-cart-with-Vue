const express = require('express');
const PORT = 3000;
const bodyParser = require('body-parse');
const fs = require('fs');
const path = require('path');



const app = express();
//const product_data = path.join(_dirname, 'product-data.json');
//const cart_data = path.join(__dirname,'cart-data.json');


app.use(bodyParser.json())
app.use(express.json());
//app.use(bodyParser.urlencode({ extended: true}))
app.use((req, res, next) =>{
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-catch');
    res.setHeader('Expire', '0');
    next();
})

app.get('/',(req,res) => res.send("hellow worldy") )

/* creating the variou methods with end points

*/

 

function writeFile(){

    fs.writeFile(cart_data, JSON.stringify(cartProducts, null, 4), () =>{
        res.setHeader('Cache-control', 'no-cache');
        res.json(cartProducts);
    });
}

app.post('/cart',(req, res) =>{
    fs.readFile(cart_data, (err,data) => {
        const cartProducts = JSON.parse(data);
        const newCartProduct = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image_tag: req.body.image_tag,
            quantity: 1
        };
        let productExists = false;
        cartProducts.map((cartProduct) =>{
            if(cartProduct.id === newCartProduct.id){
                cartProduct.quantity++;
                productExists = true;
            }
        });
        if (!productExists) cartProducts.push(newCartProduct);
        
        writeFile();
    });
});

app.delete('/cart/delet', (req, res) => {
    fs.readFile(cart_data, (err, data) =>{
        let cartProducts = JSON.parse(data);
        cartProducts.map((cartProduct) =>{
            if(cartProduct.id === req.body.id && cartProduct.quantity > 1){
                cartProduct.quantity--;
            } else if(cartProduct.id === req.body.id && cartProduct.quantity ===1 ){
                const index = cartProducts.findIndex(
                    cartProduct =>
                     cartProduct.id === req.body.id);
                     cartProducts.splice(index, 1);
            }
        });

        writeFile();
    });
});

app.get('/products', (req, res) =>{
    fs.readFile(product_data, (err,data) =>{
        res.setHeader('Cache-control', 'no-cache');
        res.json(JSON.parse(data));
    });
});

app.get('/cart',(req, res) => {
    fs.readFile(cart_data, (err, data) =>{
        res.setHeader('Cache-Control' , 'no-catche');
        res.json(JSON.parse(data));
    });
});



app.listen(PORT, () =>
 console.log(`App Listerning at http://localhost:${PORT}`))