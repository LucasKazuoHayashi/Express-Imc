var express = require("express");
var calculateImc = require("../services/imc");

var router = express.Router();

/* calculate the sum of two numbers */
router.post("/", function (req, res) {
  console.log("Imc running ...");
  const payload = req.body;
  var value = calculateImc.calculate(payload.weight, payload.height);

  res.json({
    weight: payload.weight,
    height: payload.height,
    description: value.description,
    imc: value.imc,
  });
});

module.exports = router;
