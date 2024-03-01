const express = require('express');

const app = express();
const port = 3200;


// Middleware to parse JSON in the request body
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/login', (req, res) => {
    const user = req.body;
    console.log(user)
    res.send('Login successful!')
})


app.listen(port, () => console.log(`listening at http://localhost:${port}`));


