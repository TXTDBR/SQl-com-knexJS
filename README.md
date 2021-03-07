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
