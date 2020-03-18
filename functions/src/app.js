const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const bodyParser = require('body-parser')
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/v1', routes)

if (process.env.REACT_APP_SERVER_LOCATION === 'local') {
    app.listen(port, () => console.log(`Listening on port ${port}!`))
}

module.exports = app;
