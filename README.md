# Usando Knex.js em projetos node

Knex.js  é um criador de consultas SQL para Postgres , MSSQL , MySQL , MariaDB , SQLite3 , Oracle e Amazon.

**OBS**: esse tutorial foi feito em base a versão 0.95.0 da documentação oficial do [Knex.js](https://knexjs.org/)

## Instalação

### Node.js

Primeiro você precisará instalar a bibliotecla do knex.js:
```bash
  npm install knex --save
```

Depois você precisa instalar uma das seguntes bibliotecas de banco de dados que deseja utilizar em seu projeto: Postgres , MSSQL , MySQL , MariaDB , SQLite3 , Oracle e Amazon.

```
 npm install pg
 npm install sqlite3
 npm install mysql
 npm install mysql2
 npm install oracledb
 npm install mssql
```
*Se você quiser usar uma instância MariaDB, você pode usar o mysql driver.*

## Inicializando a biblioteca

O próprio knex módulo é uma função que pega um objeto de configuração para Knex classe, aceitando alguns parâmetros. O client parâmetro é obrigatório e determina qual adaptador cliente será usado com a biblioteca.

```
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  }
});
```
As opções de conexão são passadas diretamente para o cliente de banco de dados apropriado para criar a conexão e podem ser um objeto, uma string de conexão ou uma função que retorna um objeto:

*Nota: A versão do banco de dados pode ser adicionada na configuração do knex, quando você usa o adaptador PostgreSQL para conectar um banco de dados não padrão.*


Quando você usa o adaptador SQLite3, é necessário um nome de arquivo, não uma conexão de rede. Por exemplo:

```
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./mydb.sqlite"
  }
});
```
Uma função pode ser usada para determinar a configuração da conexão dinamicamente. Esta função não recebe parâmetros e retorna um objeto de configuração ou uma promessa para um objeto de configuração.

```
const knex = require('knex')({
  client: 'sqlite3',
  connection: () => ({
    filename: process.env.SQLITE_FILENAME
  })
});
```


