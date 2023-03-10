var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var shipRouter = require('./routes/shipsRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ship', shipRouter);

app.use(cors({
    origin: 'http://localhost:4200'
}));

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json'); 
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {}));

module.exports = app;
