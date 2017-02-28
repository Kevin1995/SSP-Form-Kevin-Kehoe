var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
    var jokesEntered = req.param('jokes');
    var jokesArray;
    var test = jokesArray || []
    test.push(jokesEntered)
    res.render('index', { name: jokesEntered });
    console.log(jokesArray);
});

module.exports = router;
