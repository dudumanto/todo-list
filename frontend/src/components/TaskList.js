import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, handleEdit, handleDelete }) => {
    return (
        <div className="task-list">
            <h2>Lista de Tarefas</h2>
            {tasks.length === 0 ? (
                <p>Nenhuma tarefa encontrada.</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id} className="task-item">
                            <h3>{task.title}</h3>
                            {task.description && <p>{task.description}</p>}
                            {task.tags && <p className="tags">Tags: {task.tags}</p>}
                            <button onClick={() => handleEdit(task)}>Editar</button>
                            <button onClick={() => handleDelete(task.id)}>Excluir</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;
