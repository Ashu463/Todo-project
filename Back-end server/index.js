var express = require("express");
var app = express();
var mongoose = require("mongoose");
var port = 3000;
var authRoutes = require("./routes/auth");
var todoRoutes = require("./routes/todo");
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);
app.listen(port, function () {
    console.log("Example app listening at http://localhost:".concat(port));
});
mongoose.connect('mongodb+srv://ashuk971:Unomax123@cluster0.eweig6k.mongodb.net/', { dbName: "courses" });
