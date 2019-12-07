require('dotenv').config();
const express = require('express');
const app = express();
const massive = require("massive")
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const c = require("./controller.js")

massive(CONNECTION_STRING).then(db => {
    console.log('Connnected to db')
    app.set('db', db)
})
const port = SERVER_PORT;



app.use(express.json())
app.listen(port, () => {
    console.log(`Up and running on port ${port}`)
});
app.get('/api/dummydata', c.dummy)

app.get("/api/inventory", c.getAllItems);

app.delete("/api/product/:id", c.deleteItem);

app.post("/api/inventory", c.postItem)



