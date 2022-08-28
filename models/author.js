    const sql = require('../database/server.js')
    
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
    let query = "SELECT * from author"
    
    sql.query(query, function(err, data) {
        if (err) throw err;
        res.send(JSON.stringify(data))
     })

   }

   Author.getAuthor = (req, res) => {
    if (!req.body) {
        console.log("There is no data entered: author.js 25");
    } 

    sql.query("SELECT * FROM author WHERE author_id = ?", [req.params.id], function (err, data) {
        if (err) throw err;
        res.send(JSON.stringify(data))
    })
   }

   Author.createAuthor = (req, res) => {
    if (!req.body) {
        console.log("There is no data entered: author.js 37");
    } 

    // sql.query("INSERT INTO author ('first_name', 'last_name', 'data_of_birth', 'date_of_death') VALUES")
   }

   
module.exports = Author; 