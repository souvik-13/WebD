const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Calculator is listening on port ${PORT}`);
});

app.get("/", (req,res) => {
    // res.send("Hello");
    res.sendFile(__dirname + '/index.html');
});

app.post("/", (req,res) => {
    // console.log(req.body.num1);
    // console.log(req.body.num2);
    // console.log(req.body.submit);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send(`The result of this calculation is ${result}`);
})

