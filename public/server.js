const express = require("express");
const app = express();
const path = require("path")
const PORT = 8080

app.use(express.urlencoded({ extended: true}));
app.use(express.json());









app.listen(PORT, () =>{
    console.log(`App is listening on PORT: ${PORT}`);
})