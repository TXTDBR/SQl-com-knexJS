const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((req, resp, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, resp, next) => {
    resp.status(error.status || 500);
    resp.json({ error: error.message })
});

app.listen(3001, console.log('Executando backend na porta 3001...'));