const ProductsServices = require('../services/products.services');

const getAllProducts = async (req, res, next) => {
    try {
        const offset = req.query.offset ?? 0;
        const limit = req.query.limit ?? 10;
        const result = await ProductsServices.getProducts(offset, limit);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Faltan datos",
        });
    }
};

const createProduct = async (req, res, next) => {
    try {
        const newProduct = req.body;
        const result = await ProductsServices.createAProduct(newProduct);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Faltan datos",
        });
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { category } = req.body;
        if(category) {
            const result = await ProductsServices.update(id, category)
            res.status(200).json(result);
        } else {
            res.status(400).json({ message: `Cannot read properties of undefined ( readind 'category')` });
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Faltan datos",
        });
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await ProductsServices.delete(id);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Faltan datos",
        });
    }
}

module.exports = { getAllProducts, createProduct, updateProduct, deleteProduct }