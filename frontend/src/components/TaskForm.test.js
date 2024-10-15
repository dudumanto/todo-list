import { render, screen, fireEvent, act } from '@testing-library/react';
import TaskForm from './TaskForm'; 
import axios from 'axios';

jest.mock('axios');

test('renders TaskForm and submits a new task', async () => {
    const fetchTasksMock = jest.fn();
    render(<TaskForm fetchTasks={fetchTasksMock} />);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
        fireEvent.change(screen.getByPlaceholderText('Título'), { target: { value: 'Nova Tarefa' } });
        fireEvent.change(screen.getByPlaceholderText('Descrição'), { target: { value: 'Descrição da tarefa' } });
        fireEvent.change(screen.getByPlaceholderText('Tags'), { target: { value: 'tag1, tag2' } });
        
        fireEvent.submit(screen.getByRole('button'));
    });

   
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/tasks', {
        title: 'Nova Tarefa',
        description: 'Descrição da tarefa',
        tags: 'tag1, tag2'
    });
    expect(fetchTasksMock).toHaveBeenCalled();
});
