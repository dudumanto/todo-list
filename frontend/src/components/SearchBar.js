import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = ({ setTasks, fetchTasks }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        if (searchTerm) {
            try {
                const response = await axios.get(`http://localhost:3000/tasks?search=${searchTerm}`);
                setTasks(response.data);
            } catch (error) {
                console.error('Erro ao buscar tarefas:', error);
            }
        } else {
            fetchTasks(); 
        }
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Buscar Tarefa" 
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};

export default SearchBar;
