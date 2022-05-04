const express = require('express');
const { print } = require('../my-first-express-app/my_js_modules/helper');
const calculator = require('./calculator')

const port = process.env.PORT || 3000;
const app = express();

//app code

app.get("/add", (request, response) => {
    const x = parseInt(request.query.x);
    const y = parseInt(request.query.y);
    response.status("200").send(calculator.add(x,y).toString());
});

app.get("/subtract", (request, response) => {
    const x = parseInt(request.query.x);
    const y = parseInt(request.query.y);
    response.status("200").send(calculator.subtract(x,y).toString());
});

app.get("/multiply", (request, response) => {
    const x = parseInt(request.query.x);
    const y = parseInt(request.query.y);
    response.status("200").send(calculator.multiply(x,y).toString());
});

app.get("/divide", (request, response) => {
    const x = parseInt(request.query.x);
    const y = parseInt(request.query.y);
    response.status("200").send(calculator.divide(x,y).toString());
});

app.get("/iseven", (request, response) => {
    const x = parseInt(request.query.x);
    response.status("200").send(calculator.iseven(x).toString());
});

app.get("/isodd", (request, response) => {
    const x = parseInt(request.query.x);
    response.status("200").send(calculator.isodd(x).toString());
});

const server = app.listen(port, () => {
    console.log(`Server up: ${server.address().address}:${port}`)
});