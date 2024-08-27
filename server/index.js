const express = require("express");
require('dotenv').config();
const cors = require("cors");

const db = require('./config/database');
const routes = require("./route/route")

const app = express();
const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(cors());
db.dbConnect();
app.use("/api",routes);

app.listen(PORT,(req,res)=>{
    console.log("server is starting at Port no. ",PORT);
})
