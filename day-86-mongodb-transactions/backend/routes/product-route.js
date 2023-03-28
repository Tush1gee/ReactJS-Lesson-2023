const { Router } = require("express");
const { createProduct } = require("../controller/product.controller");

const router = Router();

router.post("/create", createProduct);

module.exports = router;
