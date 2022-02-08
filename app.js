const express = require('express');
const mysql = require('mysql2');
const { body, validationResult } = require('express-validator');
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM("");
const $ = require('jquery')(dom.window);
const cors = require('cors');
const app = express();

require('dotenv').config();


const corsOptions = {
    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
};
app.use(cors(corsOptions)); 
const database = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME 
});     
/*app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});*/
app.get('/cities', (req,res) => {
    const sqlQuery = 'SELECT * FROM capitalcities';

    database.query(sqlQuery, (err, result) =>{
        if(err) throw err;

        res.json({'cities': result});
    })
});
/*app.get('/country', (req,res) => {
    let code = req.params.countryName2;
   // res.send(code);'
   console.log(code);
    const sqlPost = 'SELECT * FROM capitalcities WHERE countrycode = "' +code;+'"';
    database.query(sqlPost, (err, result) =>{
        if(err) throw err;
        res.send({'cities':result});
    })
});*/

app.listen(5000, () =>{
    console.log('Now running on port 5000');
});
/*$(document).ready(function(){
    $('path').click(function(){
        let countryName = this.getAttribute("class");
        let countryName2 = countryName.slice(-2);
        document.getElementById("eu").innerHTML = countryName2;
    })
}); */