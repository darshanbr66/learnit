const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Darshan! Hello from Express');
});

app.get('/about', (req, res) => {
    res.send (`
        <body style = "background-color:lightgray">
            <h1 style = "color:green; text-align:center">
               This is the about page and being served by the express server
            </h1>
        </body>
        `);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});