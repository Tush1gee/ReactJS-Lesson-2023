const { Router } = require("express");
const { createTransaction } = require("../controller/transaction.controller");
const {
  creatTransactionWithOutSession,
} = require("../controller/transaction.controller");

const router = Router();

router.get("/shipping", createTransaction);
router.get("/shippingWithoutTransaction", creatTransactionWithOutSession);

module.exports = router;
