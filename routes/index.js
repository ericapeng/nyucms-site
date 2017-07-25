var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', {layout: 'layout-dark'});
});

router.get('/eboard', function(req, res, next) {
  res.render('eboard', {layout: 'layout-dark'});
});

router.get('/event', function(req, res, next) {
  res.render('event', {layout: 'layout-dark'});
});

module.exports = router;
