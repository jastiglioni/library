var Connection = require('tedious').Connection;  
var Request = require('tedious').Request;
    // var config = {  
    //     server: 'localhost',  //update me
    //     authentication: {
    //         type: 'default',
    //         options: {
    //             userName: 'admin', //update me
    //             password: 'VesonIsM@ritime727'  //update me
    //         }
    //     },
    //     options: {
    //         // If you are on Microsoft Azure, you need encryption:
    //         encrypt: true,
    //         database: 'shop'  //update me
    //     }
    // };  
    
    
    
    module.exports = {


        
        connectSQL: function() {

        },

        executeSQL: function(connection, requestString, callback) {
          let results = [];
  
          const request = new Request(requestString, function(err) {
              callback(err);
          });
  
          request.on("row", columns => {
            columns.forEach(column => {
              console.log("%s\t%s", column.metadata.colName, column.value);
            });
          });
  
          request.on('requestCompleted', function(){
              console.log('Finished');
              callback(null, results);
          });
  
          connection.execSql(request);
      }
    }
