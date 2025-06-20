const express = require('express');
const app = express();
app.use(express.json());

// Store user data in memory
const users = []
let nextID = 1;

// POST /users
app.post('/users', (req, res) => {
    const { name, email } = req.body;
})

if (!name || !email) {
    return res.status(400).json({message: 'Name and email are required!'})
}
const user = {
    id: nextID++,
    name,
    email
}
users.push(user);
res.status(201).json(user)

