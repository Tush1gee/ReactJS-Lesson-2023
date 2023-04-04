const { Router } = require("express");
const { TheatersRoute } = require("../controller");

const router = Router();

router.post("/", createProduct);

module.exports = router;
