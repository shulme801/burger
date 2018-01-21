/* require Express and instantiate a variable of type "Router"
*/
var express = require('express');
var router  = express.Router();

// Import the model (burger.js) so we can use its database functions.
var burger  = require('../models/burger.js');

// Create the routes and associated logic
router.get('/', function(req, res) {

  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});


router.post('/', function(req, res) {
  burger.insertOne([
    'burger_name',
  ], [
    req.body.burger_name

  ], function(data) {
    res.redirect('/');
  });
});


router.post('/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// Export routes for the server.js to use.
module.exports = router;