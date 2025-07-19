const { model } = require("mongoose");

const { PositionsSchema } = require("../Schemas/PositionsSchema.js");

const PositionsModel = new model("positions", PositionsSchema);

module.exports =  PositionsModel ;