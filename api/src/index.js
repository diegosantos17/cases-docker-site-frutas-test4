const mysql = require("mysql2");
const express = require("express");

const app = express();

var connection = mysql.createConnection(
    {
        host: 'mysql-container-test4',
        user: 'root',
        password: 'root',
        database: 'db_site_frutas4'
    }
);

connection.connect(function(err){

    if(err){
        throw err;
    }

    console.log('Connect!');
});

app.get('/products', function(req, res){
    connection.query("SELECT * FROM products", function(err, results){
        if(err){
            throw err;
        }

        res.send(results.map(item => ({name: item.name, price: item.price})));
    })
});

app.listen(9001, '0.0.0.0', function(){
    console.log('Listem on port 9001');
});