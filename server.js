var express = require('express');
var app = express();
var port = process.env.PORT || 4000;

var yrno = require('yr.no-forecast');
var weather = { test : { test: 1}};

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', function(req, res) {
  function callback(err, data){
    if (!err) {
      res.json(data);
    }
  }

  yrno.getWeather({
    // Haråsvien 8
    lat: 59.918403,
    lon: 10.637828,
  }, function(err, location) {
    if (!err) {
      // Weather for next five days (Array with five object)
      location.getFiveDaySummary(callback);
      // Current conditions
      // location.getCurrentSummary(callback);
      // Weather anytime from now till future
      // location.getForecastForTime(time, callback);
    }
  }, 1.9);
});

app.listen(port, () => {
  console.log(`The weather on port ${port} 🌩`);
});
