import express from 'express';

import { getAllProducts} from '../controllers/product.js';

import __dirname from '../util/rootpath.js'

const router = express.Router();

router.get('/', getAllProducts);

export default router;