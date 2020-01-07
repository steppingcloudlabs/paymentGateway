const router = require("express-promise-router")();
const PaymentController = require("../controller/payment.controller")();
router
  .route("/test")
  .post((req, res, next) => PaymentController.test(req, res, next));

module.exports = router;
