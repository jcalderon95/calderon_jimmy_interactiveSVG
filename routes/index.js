var express = require('express');
var router = express.Router();
var path = require('path');

const sql = require('../utils/sql');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile((path.join(__dirname, "../views/index.html")));
    
});

router.get('/drivers/:id', function(req, res, next) {

  let query = `SELECT * FROM tbl_driver WHERE ID="${req.params.id}"`;

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result); // should see objects wrapped in an array

       res.json(result[0]);
       
    })
    
});



module.exports = router;
