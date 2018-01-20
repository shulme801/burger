// Need to require the mysql package
var mysql = require('mysql');

// Now, we create the MySQL connection object
var connection;

//The following code is from the Heroku deployment process instructions for MySQL
if (process.env.JAWSDB_URL) {
	// We're on Heroku and will let MySQL's createConnection connect us, using the JawsDB URL that's in our process environment
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// else we are running on our old friend localhost. Use the standard 3306 port
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers'
	})
};

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;