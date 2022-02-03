const mongoose = require("mongoose");

const functionSchema = new mongoose.Schema(
  {
    function:{
        type:String,
    },
    category:{
        type:String,
    },
    functionName:{
        type:String
    }
  },
);


const functionModel = mongoose.model("function", functionSchema);
module.exports = functionModel;
