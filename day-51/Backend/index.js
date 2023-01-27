console.log('DAY-51 : API Express JS');
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const { response, request } = require('express');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json())


let data = [
    {
        "id": "1",
        "name":"Tushig",
        "age":"19-Year old",
    }
]

app.get("/", (request, response) => {
    response.send('Here Im a brutaly powerful express server!');
})

app.get("/data", (request, response) => {
    response.json(data);
})

app.post("/data", (request, response) => {
    console.log(request.body);
    const length = data.length;
    const newData = {
        id: length + 1,
        name: request.body.name,
        age: request.body.age,
    }

    data = [...data, newData]
    response.json(data);
})

app.delete("/data", (request, response) => {
    console.log(request.body)
    const newData = data.filter(d => d.id !== request.body.id);
    data = newData
    console.log(data)
    response.json(data);
})

app.put("/data", (request, response) => {
    console.log(request.body)
    console.log(data);

    const newData = data.map(d => {
        if(d.id === request.body.id) {
            d.name = request.body.name
            d.name = request.body.age
        }
        return d
    })

    data = newData;

    response.json(data);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})