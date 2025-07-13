const { model } = require("mongoose");
const { HoldingSchemas } = require("../Schemas/HoldingsSchemas");

const HoldingsModel = new model("holding",HoldingSchemas);

module.exports={HoldingsModel};
