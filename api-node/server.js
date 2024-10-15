const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PHP_API_URL = 'http://localhost/todo-list/php'; 

app.get('/tasks', async (req, res) => {
    const searchTerm = req.query.search || '';

    try {
        const response = await axios.get(`${PHP_API_URL}/read.php`);
        const tasks = response.data;

    
        const filteredTasks = tasks.filter(task =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (task.tags && task.tags.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        res.json(filteredTasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/tasks', async (req, res) => {
    try {
        const response = await axios.post(`${PHP_API_URL}/create.php`, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.put('/tasks/:id', async (req, res) => {
    try {
        await axios.put(`${PHP_API_URL}/update.php?id=${req.params.id}`, req.body);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.delete('/tasks/:id', async (req, res) => {
    try {
        await axios.delete(`${PHP_API_URL}/delete.php?id=${req.params.id}`);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


module.exports = app;


if (require.main === module) {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}


