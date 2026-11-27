const express = require('express');
const math = require('./math.js');
const users = require('./user.js');

const app = express();

console.log("Hello from Exress");

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Darshan! Hello from Express');
});

// app.get('/about', (req, res) => {
//     res.send (`
//         <body style = "background-color:lightgray">
//             <h1 style = "color:green; text-align:center">
//             This is about page<br>
//                This is the about ${users.name} and He is ${users.age} years old. 

//             </h1>
//         </body>
//     `);
// });

// let users = {};

// app.post("/data", (req, res) => {
//     const {name, age, city} = req.body;
//     users = {name, age, city};
//     // users[name] = {age, city};
//     res.send(`Data received: Name - ${name}, Age - ${age}, City - ${city}`);
// });

// app.get("/data", (req, res) => {
//     res.json(users);
// });

// console.log(math.add(5, 10));
// console.log(math.substract(10, 5));
// console.log(math.multipy(5, 10));
// console.log(math.divide(10, 5));
let employee = [];
let count = 0;

app.post('/users', (req, res) => {
    const { name, age, designation} = req.body;

    count++;
     
    const user = users(count, name, age, designation);

    // employee = [...employee, user];

    employee.push(user);

    res.json(user);

    
    console.log(user);
    
    console.log(user.name);
    console.log(user.age);
    console.log(user.designation);
});

app.get('/emp', (req, res) => {
    res.json(employee);
})

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});