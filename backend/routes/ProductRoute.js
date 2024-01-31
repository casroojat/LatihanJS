import express from 'express';
import { createProducts, deleteProducts, getProducts, getProductsById, updateProducts } from '../controllers/ProductController.js';

const router = express.Router();

router.get('/products', getProducts)
router.get('/products/:id', getProductsById)
router.post('/products', createProducts)
router.patch('/products/:id', updateProducts)
router.delete('/products/:id', deleteProducts)

export default router;