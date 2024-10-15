const request = require('supertest');
const app = require('../server'); 

describe('Testes de API de Tarefas', () => {
    
    it('deve criar uma nova tarefa', async () => {
        const response = await request(app)
            .post('/tasks')
            .send({ title: 'Teste', description: 'Teste de descrição', tags: 'tag1,tag2' });

        expect(response.statusCode).toBe(201);
        expect(response.body.status).toBe('Task created');
    });

    
    it('deve listar as tarefas', async () => {
        const response = await request(app).get('/tasks');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
    

    it('deve buscar tarefa pelo título', async () => {
        const response = await request(app)
            .get('/tasks?search=Teste');
        
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0); 
    });
});
