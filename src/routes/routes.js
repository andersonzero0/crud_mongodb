import { Router } from 'express';
import { insertProduct, getProducts, getProduct } from '../controllers/controllerProducts.js';

const router = Router();

// CREATE
router.post('/products', async (req, res) => {

    const { name, amount, price } = req.body;

    try {

        await insertProduct(name, amount, price);

        res.send('Product added successfully');
        
    } catch (error) {

        console.log(error);
        
    }
  
});

router.get('/products', async (req, res) => {

    try {

        const data = await getProducts();

        res.send(data);
        
    } catch (error) {

        console.log(error);
        
    }
    
})

router.get('/products/:product', async (req, res) => {

    try {

        const product = req.params.product;

        const data = await getProduct(product);

        res.send(data);
        
    } catch (error) {

        console.log(error);
        
    }
    
})

export default router;


// READ