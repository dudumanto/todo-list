import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TaskForm.css';

const TaskForm = ({ fetchTasks, taskToEdit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setTags(taskToEdit.tags);
        } else {
            setTitle('');
            setDescription('');
            setTags('');
        }
    }, [taskToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (taskToEdit) {
            await axios.put(`http://localhost:3000/tasks/${taskToEdit.id}`, { title, description, tags });
        } else {
            await axios.post('http://localhost:3000/tasks', { title, description, tags });
        }
        fetchTasks();
        setTitle('');
        setDescription('');
        setTags('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" />
            <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags/Urgência" />
            <button type="submit">{taskToEdit ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}</button>
        </form>
    );
};

export default TaskForm;
