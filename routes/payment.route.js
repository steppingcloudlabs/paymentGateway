const router = require("express-promise-router")();
const PaymentController = require("../controller/payment.controller");
router
  .route("/payment")
  .post((req, res, next) => PaymentController.payment(req, res, next));

module.exports = router;
