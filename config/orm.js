// Import the MySQL connection object
var connection = require ('./connection.js');

// Helper function for generating '?' to use in MySQL statements
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}
//This function pushes 'key value'='value of key' and returns it as a string
function objToSql(myObj) {
	var arr = [];

	for (var key in myObj) {
		arr.push(key + "=" + myObj [key]);
	}

	return arr.toString();
}

// Create the ORM object to perform SQL queries
var orm = {
	// Function that returns all table entries
	selectAll: function(tableInput, cb) {
		// Construct the query string that returns all rows from the target table
		var queryString = "SELECT * FROM " + tableInput + ";";

		// Perform the database query that we built into queryString and return the results in...result!
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// The callback function returns the result
			cb(result);
		});
	},

	// Function that inserts one row into a table. "cb" is, as usual, our trusty callback function
	insertOne: function(table, cols, vals, cb) {
		// Construct a query to insert one row into the table
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		// Query database now
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			// The callback function returns the result
			cb(result);
		});
	},

	// Function to update one row in the table
	updateOne: function(table, objColVals, condition, cb) {
		// Construct the query string that updates a single entry in the target table
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;


		// Query database now
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// The callback function returns the result
			cb(result);
		});
	}
};

// Export the Object Relational Model so other modules can use it
module.exports = orm;
