import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import SearchBar from './components/SearchBar';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleEdit = (task) => {
        setTaskToEdit(task);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
            try {
                await axios.delete(`http://localhost:3000/tasks/${id}`);
                fetchTasks();
            } catch (error) {
                console.error('Erro ao excluir tarefa:', error);
            }
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Gerenciador de Tarefas</h1>
            <SearchBar setTasks={setTasks} fetchTasks={fetchTasks} />
            <TaskForm fetchTasks={fetchTasks} taskToEdit={taskToEdit} />
            <TaskList tasks={tasks} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    );
};

export default App;
