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

11. Crie um banco de dados, eu criei um banco com o nome todo_db, mas você pode escolher o nome da sua preferência.

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

3. Se estiver tudo certo não vai aparecer nenhum erro no terminal.

<br>
1. Parte Teórica
<br>
1.1 Questões de Múltipla Escolha
<br>
Qual das seguintes afirmações sobre o PHP é correta?

Resposta Certa
<br>
c) PHP pode ser embutido em HTML 


No contexto do Node.js, o que é o Event Loop?
<br>
Resposta Certa
<br>
b) Um mecanismo que permite I/O não bloqueante 1


Qual dos seguintes não é um hook do React?
<br>
Resposta Certa
<br>
d) useServer 
<br>
Em Oracle SQL, qual cláusula é usada para combinar linhas de duas ou mais tabelas com base em uma condição relacionada?
<br>
Resposta Certa
<br>
b) JOIN 

<br>
Qual é a principal diferença entre let e var em JavaScript?
<br>
Resposta Certa
<br>
a) let tem escopo de bloco, enquanto var tem escopo de função 1

<br>
1.2 Questões Discursivas
<br>
Explique o conceito de "Injeção de Dependência" e como ele contribui para um código mais modular e testável. Forneça um exemplo prático de sua implementação em PHP ou JavaScript.
<br>
É uma forma de implementar a inversão de IOC, com isso um componente recebe dependências de fora, assim não precisando criar as suas próprias dependências4

<br>
Descreva o padrão de arquitetura MVC (Model-View-Controller) e como você o aplicaria em um projeto que utiliza React no frontend e Node.js no backend. Quais são os benefícios e possíveis desafios dessa abordagem?
<br>

É um padrão de organização de código, ela utiliza três princípios, que são Model, View e Controller.
Model: Faz o gerenciamento de dados e regras com o banco de dados.
View: É tudo que o usuário vê na tela e também pega as interações dos usuários.
Controller: Ela faz o meio de campo entre a Model e a View, ela que recebe todos os comandos que o usuário solicita e através disso, ela atualiza a view
<br>
Benefícios
Fácil manutenção e escalabilidade, facilidade na hora de criação de testes separados.
<br>
Desafios
Acredito que seja para aplicações menores, pois se eu for fazer uma aplicação menor, um crud simples, eu não preciso utilizar o MVC, pois isso vai ocupar bastante espaço na aplicação, eu posso fazer um pdo mais simples e utilizar ele.
Acredito que o MVC é bom para aplicações grandes e com grande complexidade, pois pode deixar a aplicação estruturada e fácil de manutenção 


