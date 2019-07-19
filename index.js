let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let apiRoutes = require("./api_routes");
const  db = require('./config/database')
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(bodyParser.json(
    {limit: '50mb', extended: true}
));

db.authenticate()
    .then( () => {
        console.log('conectado')
    })
    .catch( err => {
        console.log('error')
    })
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App
app.use('/api', apiRoutes)
app.use('/inicio', apiRoutes)
app.use('/customer',require('./routes/customerRoutes'))
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});