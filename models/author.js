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
            trustServerCertificate: true
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
    

    const connection = new Connection(config);

    connection.connect((err) => {
      if (err) {
        console.log('Connection Failed');
        throw err;
      }
    
      executeStatement();
    });


    function executeStatement() {
        const request = new Request('select * from MyTable', (err, rowCount) => {
          if (err) {
            throw err;
          }
      
          console.log('DONE!');
          connection.close();
        });

   }}


   
module.exports = Author; 