var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burger/post", function(req, res) {
  burger.insert(["burger_name", "devoured"], [req.body.name, 0], function(
    result
  ) {
    res.redirect("/");
  });
});

router.post("/burger/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  console.log(req);
  burger.update({ devoured: 1 }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.redirect("/");
    }
  });
});

router.post("/burger/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;
console.log(condition)
  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.redirect("/");
    }
  });
});

router.get("/burger/reset", function(req, res) {
  var condition = "id <> ''";
console.log(condition)
  burger.delete(condition, function(result) {
        
    
    
  });

  burger.insert(["id","burger_name", "devoured"], ["2","Vegetarian", 0], function(
    result
  ) {
    
  });
  burger.insert(["id","burger_name", "devoured"], ["3","Bison", 0], function(
    result
  ) {
    
  });
  burger.insert(["id","burger_name", "devoured"], ["1","Diablo", 0], function(
    result
  ) {
    res.redirect("/");
  });


});

// Export routes for server.js to use.
module.exports = router;
