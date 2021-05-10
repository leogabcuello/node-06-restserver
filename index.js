require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/users', (req, res) => {
    const user = [
        {
            id:1,
            name:'leo'
        },
        {
            id:2,
            name:'pepe'
        },
    ]
    res.json(user);
});

app.post('/users/:id', (req, res) => {
    
    const user = req.body;

    user.id = 854564;

    const result = {
        message: 'user create',
        user
    }
    res.status(201).json(result);
});

app.put('/users/:id', (req, res) => {
    
    const { id } = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'user update',
        user
    }
    res.json(result);
});

app.patch('/users/:id', (req, res) => {
    
    const { id } = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'user update',
        user
    }
    res.json(result);
});

app.delete('/users/:id', (req, res) => {
    
    const { id } = req.params;
    const result = {
        message: `user with id: ${id} deleted`
    }
    res.json(result);
});
 
app.listen(port, () =>{
    console.log(`app started in port ${port}`);
});