const productController = require('./../controllers/productController')


const router = require('express').Router()


router.get("/products", productController.getAllProduct)
router.get("/products/:id", productController.getProductById)
router.post("/products", productController.postProduct)
router.delete("/products/:id", productController.deleteProduct)


module.exports = router