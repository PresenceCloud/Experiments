// MySQL module testing

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

connection.connect();

connection.query('SELECT count(*) AS count FROM Persons', function(err, rows, fields) {
  if (err) throw err;

  console.log('The count is: ', rows[0].count);
});

connection.end();
