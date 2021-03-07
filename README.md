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

```javascript
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

```javascript
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./mydb.sqlite"
  }
});
```
Uma função pode ser usada para determinar a configuração da conexão dinamicamente. Esta função não recebe parâmetros e retorna um objeto de configuração ou uma promessa para um objeto de configuração.

```javascript
const knex = require('knex')({
  client: 'sqlite3',
  connection: () => ({
    filename: process.env.SQLITE_FILENAME
  })
});
```

## O que são Migrations?

As migrações são uma forma de fazer alterações ou atualizações no banco de dados, como criar ou eliminar tabelas, bem como atualizar uma tabela com novas colunas com restrições por meio de scripts gerados. Podemos construir esses scripts por meio da linha de comando usando a CLI migration.

Se você pretende usar migrations em seu projeto veja os detalhes em [Migration CLI](#migration)

## Query Builder (criando consultas)

O query builder é a interface usada para fazer a crir e executar o CRUD (inserir, selecionar, editar e excluir).

## Migration

Você pode especificar ao inicializar a biblioteca a configuração das migrations.

```javascript
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  },
  migrations: {
    tableName: 'migrations'
  }
});
```

### Migration CLI

A migration CLI é fornecido com a instalação do knex.  Para instalar globalmente, execute:

```bash
  npm install knex -g
```

*Nota: se preferir não instalar globalmente não se esqueça do npx antes dos comandos da cli.*

As migrations usam um arquivo knexfile.js, que especifica várias definições de configuração para o módulo. Para criar um novo knexfile, execute o seguinte:

```bash
  knex init
```

Um arquivo knexfile.js será craido. O arquivo contem várias configurações de banco de dados. Depois do knexfile.js criado você pode usar a cli para criar arquivos migrations, execute:

```bash
  knex migrate:make nome_da_minha_migration
```

Para executar todas novas migrations que ainda não foram executadas, execute:

```bash
  knex migrate:latest
```

Para desfazer as alterações das últimas migrations executadas, execute:

```bash
  knex migrate:rollback
```
Para executar uma migration especifica, execute:

```bash
   knex migrate:up nome_da_migration.js
```

Para desfazer as alterações de uma migration especifica, execute:

```bash
   knex migrate:down nome_da_migration.js
```
