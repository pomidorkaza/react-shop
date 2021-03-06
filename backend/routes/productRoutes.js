import express from 'express';
import Product from '../models/productModel.js';
import  asyncHandler from 'express-async-handler';
import {getProductById, getProducts} from '../controllers/productController.js';

const router = express.Router();



router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

// router.get('/', asyncHandler( async (req,res)=>{
//     const products =await Product.find({});
//     return res.json(products);
// }));

//@desc fetch single product
//@route GET /api/products/:id
//@access Public
// router.get('/:id',asyncHandler( async(req,res)=>{
//       const product = await Product.findById(req.params.id);
//       if(product){
//         return res.json(product);
//      } else{
//          res.status(404);
//          throw new Error('Product not found ');
//      }
// }));

export default router;