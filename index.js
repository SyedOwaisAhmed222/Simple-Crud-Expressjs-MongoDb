const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello brother");
});

app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://syedowaisahmed222:a4uOGsPT9X30rpdr@backenddb.1ftcy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to db");
    app.listen(3000, () => {
      console.log("server is running on 3000");
    });
  })
  .catch(() => {
    console.log("db conenction failed");
  });
