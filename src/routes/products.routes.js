const { Router } = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controllers')

const router = Router();

router.get('/products', getAllProducts);

router.post('/products', createProduct);

router.put('/products/:id', updateProduct);

router.delete('/products/:id', deleteProduct);

module.exports = router;