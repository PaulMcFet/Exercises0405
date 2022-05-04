const express = require('express');
const calculator = require('./calculator')

const port = process.env.PORT || 3000;
const app = express();

//app code

app.get("/add", (request, response) => {
    const x = parseInt(request.query.x);
    const y = parseInt(request.query.y);
    response.status("200").send(calculator.add(x,y).toString());
});

const server = app.listen(port, () => {
    console.log(`Server up: ${server.address().address}:${port}`)
});