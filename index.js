let express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
let app = express();

app.engine('handlebars', exphbs({defaultLayout: false}));
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post('/settings', function(req, res){
    let smsCost = req.body.smsCost;
    let callCost = req.body.callCost;
    let warningLevel = req.body.warningLevel;
    let criticalLevel = req.body.criticalLevel;

    var settings = {
      smsCost,
      callCost,
      warningLevel,
      criticalLevel
    };

    // process data
    globalSetings = settings;
    //console.log(globalSetings);

    // note that data can be sent to the template
    res.render('home', {settings})
    // res.json({'code': 'userCreated'})
});

// app.get('/', function(req, res){
//     res.render('home');
// });

// app.get('/', function(req, res){
//     res.send('Bill Settings WebApps');
// });

let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
    console.log('App starting on port', PORT);
});



// var express = require('express');
// var app = express();

// // create a route
// app.get('/hello', function (req, res) {
//  res.send('Hello codeX!');
// });

// //start the server
// var server = app.listen(3007, function () {

//  var host = server.address().address;
//  var port = server.address().port;

//  console.log('Example app listening at http://%s:%s', host, port);

// });
