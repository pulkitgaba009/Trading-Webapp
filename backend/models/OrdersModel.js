const { model } = require("mongoose");

const { OrdersSchema } = require("../Schemas/OrdersSchema.js");

const OrdersModel = new model("order", OrdersSchema);

module.exports =  OrdersModel ;