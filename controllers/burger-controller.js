var express = require("express");
var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function (req, res) {

  res.redirect("/index");

});

router.get("/index", function (req, res) {

  burgers.all(function (data) {

    var burgObject = {
      burgers: data
    };

    res.render("index", burgObject);
  
  });

});

router.post("/burgers/create", function (req, res) {

  burgers.create(req.body.burger_name, function (result) {

    res.redirect("/index");

  });

});

router.post("/burgers/eat/:id", function (req, res) {

  burgers.update(req.params.id, function (result) {

    res.redirect("/index");

  });

});

module.exports = router;