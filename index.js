const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const users = [
    {id: 1, email:'@mail.com', name: "RK"},
    {id: 2, email:'@mail.com', name: "RK"},
    {id: 3, email:'@mail.com', name: "RK"},
    {id: 4, email:'@mail.com', name: "RK"},
]

app.get('/', (req, res) => {
    res.send('User Management server is running');
});

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('Post API hitting')
    console.log(req.body);
    newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});