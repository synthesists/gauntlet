const express = require('express');
const routes = require('./routes')
const app = express();
const port = 4000;


app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/v1', routes)

app.listen(port, () => console.log(`Listening on port ${port}!`))