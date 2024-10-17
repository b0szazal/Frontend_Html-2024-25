import express from 'express';
import * as controllers from '../controllers/product.js';

import __dirname from '../util/rootpath.js'

const router = express.Router();
router.get('/add-product', controllers.getAddProdutct);

router.post('/add-product', controllers.postAddProduct);

export default router;