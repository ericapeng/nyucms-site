var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get('/yuan', function(req, res, next) {
  console.log(__dirname);
  var directory = '/images/Event_Photos/Yuan/';
  var fileNames = [];
  for(var i = 1; i < 13; i++) {
    fileNames.push(directory+'yuan'+i+'.jpg');
  }
  var desc = ["In celebration of Asian Heritage Month, Chinese Mei Society of New York University annually presents our greatest cultural production of the year, Yuan. Since 1988, Yuan has been one of our largest productions, attracting 200 to 250 guests on a yearly basis with an inspiring blend of performances, fashion, and fine dining. All proceeds are donated to charity."];
  desc.push("Check out some of our photos from YUAN V15ION, where our theme was Chinese festivals with a sleek and modern twist.");
  res.render('event', {title: '緣 | YUAN', description: desc, photos: fileNames, layout: 'layout-dark'});
});

router.get('/bubble-tea-tasting', function(req, res, next) {
  console.log(__dirname);
  var directory = '/images/Event_Photos/Bubble_Tea_Tasting/';
  var fileNames = [];
  for(var i = 1; i < 6; i++) {
    fileNames.push(directory+'bbttasting'+i+'.jpg');
  }
  var desc = "Love bubble tea? We order a selection of the most delicious bubble tea from some of the best boba vendors in the city, such as Gongcha, Coco's, and Chatime for our annual Bubble Tea Tasting event. Come find out if you really know what your favorite bubble tea tastes like or just come by to try each one to find out which place suits your tastes!";
  res.render('event', {title: 'Bubble Tea Tasting', description: [desc], photos: fileNames, layout: 'layout-dark'});
});

router.get('/christmas-soiree', function(req, res, next) {
  console.log(__dirname);
  var directory = '/images/Event_Photos/Christmas_Soiree/';
  var fileNames = [];
  for(var i = 1; i < 7; i++) {
    fileNames.push(directory+'soiree'+i+'.jpg');
  }
  var desc = "Celebrate the holiday season with CMS! This is our annual winter-themed RSVP-only event, where we reward dedicated members by throwing a festive event with fun cultural games, raffles and bonding between all members of the club.";
  res.render('event', {title: 'Christmas Soiree', description: [desc], photos: fileNames, layout: 'layout-dark'});
});

router.get('/soup-dumpling-tasting', function(req, res, next) {
  console.log(__dirname);
  var directory = '/images/Event_Photos/Soup_Dumpling_Tasting/';
  var fileNames = [];
  for(var i = 1; i < 5; i++) {
    fileNames.push(directory+'sdtasting'+i+'.jpg');
  }
  var desc = "Get a taste of some of the best soup dumplings in NYC, and guess where they're from to win free bubble tea! Invite all your friends to try soup dumplings from various vendors, and see who can get the most correct answers!";
  res.render('event', {title: 'Soup Dumpling Tasting', description: [desc], photos: fileNames, layout: 'layout-dark'});
});

router.get('/study-break', function(req, res, next) {
  console.log(__dirname);
  var directory = '/images/Event_Photos/Study_Break/';
  var fileNames = [];
  for(var i = 1; i < 10; i++) {
    fileNames.push(directory+'studybreak'+i+'.jpg');
  }
  var desc = "Midterms got you down? Tired from studying? Need a break? Join CMS for a Midterm Study Break and enjoy some SNOWDAYS SHAVED ICE... on us!! Leave your books behind for the night and have a good time. (You deserve it!!!)";
  res.render('event', {title: 'Study Break', description: [desc], photos: fileNames, layout: 'layout-dark'});
});

module.exports = router;
