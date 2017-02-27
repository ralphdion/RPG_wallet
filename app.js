var express = require("express");
var morgan = require("morgan");
var routes = require("./routes");
var bodyParser = require("body-parser");

var app = express();

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(routes);
app.use(bodyParser);

app.listen(8081);
