# Mini-Projeto de Gerenciamento de Tarefas (To-Do List)
Descrição
Este é um mini-projeto de gerenciamento de tarefas que integra um sistema legado em PHP, uma API RESTful em Node.js e uma interface em React. O projeto permite a listagem, criação, atualização, exclusão e filtragem de tarefas, utilizando um sistema de tags.

# Tecnologias Utilizadas
- PHP: Sistema legado que interage com um banco de dados MySQL.
- Node.js: API RESTful que se comunica com o sistema PHP.
- React: Interface do usuário que consome a API Node.js.
- Axios: Para realizar requisições HTTP na interface React.
- Jest: Para testes unitários no backend e frontend.


# Como Executar o Projeto
Pré-requisitos ter instalado todas essa tecnologias, caso não tenha segue o link do site para download.
<br>
Node.js : https://nodejs.org/pt
<br>
PHP: https://www.php.net/
<br>
MySQL: https://www.mysql.com/downloads/
<br>

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/dudumanto/todo-list
 

2.  Entre na pasta api-node :
    ```bash
    cd api-node

3. Instale as dependências:
   ```bash
   npm install

4. Rode o servidor
    ```bash
    node server.js

5. Vamos voltar para a raiz do projeto
    ```bash
    cd .. 
    
6. Vamos para o front-end
    ```bash
    cd frontend

7. Instale as dependências:
   ```bash
   npm install

8. Rode o servidor
   ```bash
   npm start

9. Vamos configurar o sistema PHP
   ```bash
   Instale o Wamp ou Xamp

10. Rode o Xamp ou Wamp

11. Crie um banco de dados, eu criei um banco com o nome todo_db, mas você pode escolher o noem da sua preferência.

12. Crie a tabela no banco de dados, eu deixei dentro do projeto, na pasta php, um arquivo chamado schema.sql, nele vai ter a estrutura do sql, só copiar e colar no seu sql, dentro da tabela que você criou


# Teste Unitários no Node

1. Entre na pasta api-node

2. Rode o comando 
   ```bash
   npm test

3. se estiver tudo certo não vai aparecer nenhum erro no terminal.

# Teste Unitários no React

1. Entre na pasta frontend

2. Rode o comando 
   ```bash
   npm test

3. se estiver tudo certo não vai aparecer nenhum erro no terminal.


