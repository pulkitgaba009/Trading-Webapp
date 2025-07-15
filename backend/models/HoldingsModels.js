const { model } = require("mongoose");
const { HoldingSchemas } = require("../Schemas/HoldingsSchemas");

const HoldingsModel = model("holding",HoldingSchemas);

module.exports=HoldingsModel;
