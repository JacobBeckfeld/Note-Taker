const express = require("express");
const app = express();
const path = require("path")
const PORT = 8080
const fs = require("fs")
let db = require("./db/db.json")
const uniqid = require("uniqid");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//loads folders assets staticaly the same way i did when using raw html
// need this as boiler plate for server
app.use(express.static("public"));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "./public/index.html")));

app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "./public/notes.html")));


app.get("/api/notes", (req, res) => res.json(db));

app.post("/api/notes", (req, res) => {
    console.log(req.body)
    console.log(uniqid())
    let note = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid()
    }
    console.log(note);
    db.push(note)
    fs.writeFile("./db/db.json", JSON.stringify(db), err => {
        if(err){console.log(err)}
        res.json(db)
    }
    )
})




console.log(db)


app.listen(PORT, () =>{
    console.log(`App is listening on PORT: ${PORT}`);
})