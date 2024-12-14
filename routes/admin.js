const { getAddProducts } = require("../controllers/admin");

const route = require("express").Router();

route.get("/add-product", getAddProducts);

module.exports = route;
