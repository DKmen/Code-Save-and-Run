const express = require("express");
const cors = require("cors");
const fs = require("fs");

function appendFileAndRead(userFunction, userFunctionName) {
  fs.writeFileSync(
    "Function.js",
    `${userFunction}
  
    const data = ${userFunctionName}();
    module.exports= data;`
  );
}

const app = express();

app.use(cors());
app.use(express.json());

const functionModel = require("./model/functionModel");

app.post("/addFunction", async (req, res, next) => {
  try {
    const responce = await functionModel.create({
      function: req.body.function,
      category: req.body.category,
      functionName: req.body.functionName,
    });

    res.status(200).json({
      name:responce.functionName,
      id:responce.id,
      category:responce.category
    });
  } catch (err) {
    next(new Error("error is occure"));
  }
});

app.get("/getFunction/:id", async (req, res, next) => {
  try {
    const userFunction = await functionModel.findById(req.params.id);
    appendFileAndRead(userFunction.function, userFunction.functionName);
    
    const UserResult = require('./Function');
    res.status(200).json({
      responce : UserResult
    })
  } catch (err) {
    console.log(err)
    next(new Error("error is occure"));
  }
});

app.all("*", (req, res, next) => {
  const error = new Error(`we can not found ${req.originalUrl}`);
  next(error);
});

app.use((err, req, res, next) => {
  res.status(404).json({
    message: err.message,
  });
});

module.exports = app;
