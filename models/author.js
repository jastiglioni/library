    const { rejectSeries } = require('async');
const { Connection } = require('tedious');
const server = require('../database/server.js')
    const Request = require('tedious').Request;
    var TYPES = require('tedious').TYPES;

    var config = {  
        server: 'localhost',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'admin', //update me
                password: 'VesonIsM@ritime727'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'shop',  //update me
            trustServerCertificate: true,
            rowCollectionOnRequestCompletion: true
        }
    };   
    
    class Author {
    constructor(author) {
        this.id = author.id;
        this.fname = author.fname;
        this.lname = author.lname;
        this.dob = author.dob;
        this.dod = author.dod;
    }
}





   Author.getAll = (req, res) => {
    
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        if (err) {
            console.log("err: " + err);
        }
        const request = new Request(
            `SELECT * from author`,
            (err, rowCount, rows) => {
              if (err) {
                console.error(err.message);
              } else {
                console.log(`${rowCount} row(s) returned`);
                res.send(rows)
              }
            }
          );
        
          request.on("done", columns => {
            columns.forEach(column => {
              console.log("%s\t%s", column.metadata.colName, column.value);
            }); 
          });
        
          connection.execSql(request);
        console.log("Connected");  
       
    });
    
   connection.connect();

}


   
module.exports = Author; 