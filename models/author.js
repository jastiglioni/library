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

   Author.getAll = () => {
    let query = "SELECT * from author"
    
   sql.query(query, function(err, res) {
    
    })
   }

module.exports = Author; 