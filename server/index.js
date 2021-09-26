const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

var db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crud",
    dateStrings: true
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/get", (req,res) => {
    const command1 = " select * from crud.students;";
    db.query(command1, (err, result) => {
        res.send(result)
        console.log(result)
    });
});

app.post("/api/insert", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const date = req.body.date;
    const command2 = "INSERT INTO students (ID, Fullname, DoB) VALUES ("+id+",'"+name+"', STR_TO_DATE('"+date+"', '%Y-%m-%d'));";
    console.log(command2)
    db.query(command2, (err, result) => {
        console.log(result)
        console.log(err)
    })
});

app.put("/api/update", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const date = req.body.date;
    const command4 = "UPDATE students SET Fullname = '"+name+"', DoB =  STR_TO_DATE('"+date+"', '%Y-%m-%d') WHERE ID = "+id+";";
    console.log(command4)
    db.query(command4, (err, result) => {
        console.log(result)
        console.log(err)
    })
});

app.delete("/api/delete/:id", (req, res) => {
    const id = req.params.id;
    console.log(id)
    const command3 = "delete from students where ID = "+id+";";
    db.query(command3, (err, result) => {
        console.log(result)
        console.log(command3)
        console.log(err)
    });
})

app.listen(3001, () => {
    console.log('running');
});