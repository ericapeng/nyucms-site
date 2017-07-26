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

//ATTEMPTED TO TRANSFER TO /EVENTS, BUT KEEPS REQUESTING STATIC FILES AT /EVENTS TOO

/*router.get('/yuan', function(req, res, next) {
  console.log(__dirname);
  var directory = '/images/Event_Photos/Yuan/';
  var fileNames = [];
  for(var i = 1; i < 13; i++) {
    fileNames.push(directory+'yuan'+i+'.jpg');
  }
  var desc = "Come join us~";
  res.render('event', {title: 'Boba Tasting', description: desc, photos: fileNames, layout: 'layout-dark'});
});

router.get('/bubble-tea-tasting', function(req, res, next) {
  console.log(__dirname);
  var directory = '/images/Event_Photos/Bubble_Tea_Tasting/';
  var fileNames = [];
  for(var i = 1; i < 6; i++) {
    fileNames.push(directory+'bbttasting'+i+'.jpg');
  }
  var desc = "Come join us~";
  res.render('event', {title: 'Boba Tasting', description: desc, photos: fileNames, layout: 'layout-dark'});
});

router.get('/christmas-soiree', function(req, res, next) {
  console.log(__dirname);
  var directory = '/images/Event_Photos/Christmas_Soiree/';
  var fileNames = [];
  for(var i = 1; i < 7; i++) {
    fileNames.push(directory+'soiree'+i+'.jpg');
  }
  var desc = "Come join us~";
  res.render('event', {title: 'Boba Tasting', description: desc, photos: fileNames, layout: 'layout-dark'});
});

router.get('/soup-dumpling-tasting', function(req, res, next) {
  console.log(__dirname);
  var directory = '/images/Event_Photos/Soup_Dumpling_tasting/';
  var fileNames = [];
  for(var i = 1; i < 5; i++) {
    fileNames.push(directory+'sdtasting'+i+'.jpg');
  }
  var desc = "Come join us~";
  res.render('event', {title: 'Boba Tasting', description: desc, photos: fileNames, layout: 'layout-dark'});
});

router.get('/study-break', function(req, res, next) {
  console.log(__dirname);
  var directory = '/images/Event_Photos/Study_Break/';
  var fileNames = [];
  for(var i = 1; i < 10; i++) {
    fileNames.push(directory+'studybreak'+i+'.jpg');
  }
  var desc = "Come join us~";
  res.render('event', {title: 'Boba Tasting', description: desc, photos: fileNames, layout: 'layout-dark'});
});*/

module.exports = router;
