const express = require("express");
const app = express();

let resp = ["Yes","No","Maybe"]

app.get("/", function (req, res) {
    res.statusCode = 200;
    const rnd = Math.floor(Math.random() * 3);
    let par = req.query.forced
    if (resp.includes(par)){
        res.json({
            "Message": par,
            "forced":true
        })
    } else {
        res.json({
            "message": resp[rnd],
            "forced": false
        })
    }
});

app.listen(3000, () => {
    console.log("http://127.0.0.1:3000");
});
