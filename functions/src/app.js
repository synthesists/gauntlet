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

app.use('/api/v1', routes)

app.listen(port, () => console.log(`Listening on port ${port}!`))