const express = require('express');
const connectDB =  require('./db');
const Product = require('./product');

const app = express();
app.use(express.json());

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log("api server started on port 5000");
})