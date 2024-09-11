# API_REST
 API REST para consumo de dados
Para subir o projeto no ar com SQLite, copie o arquivo envexemplo.txt para .env
Adicione uma secret key no arquivo .env

`TOKEN_SECRET='sua_secret_key_aqui'`

Execute os comandos abaixo:
`npm i`
`npx sequelize db:migrate`
`npx sequelize db:seed:all`
`npm run dev`

###
Para migrar para MySQL, MariaDB, configure o
`src/config/database.js`
###

`require('dotenv').config();`

`module.exports = {`
  `host: process.env.DATABASE_HOST,`
  `port: process.env.DATABASE_PORT,`
  `username: process.env.DATABASE_USERNAME,`
 ` password: process.env.DATABASE_PASSWORD,`
  `database: process.env.DATABASE,`
 ` dialectOptions: {`
   ` timezone: 'America/Sao_Paulo',`
  `},`
 ` timezone: 'America/Sao_Paulo',`

  `define: {`
    `timestamps: true,`
    `underscored: true,`
    `underscoredAll: true,`
    `createdAt: 'created_at',`
    `updatedAt: 'updated_at',`
  `},`
`};`
###
Para SQLite as configs são:
`require('dotenv').config();`

`module.exports = {`
`  dialect: 'sqlite',`
  `storage: './db.sqlite',`
`  define: {`
 `   timestamps: true,`
   ` underscored: true,`
  `  underscoredAll: true,`
    `createdAt: 'created_at',`
`    updatedAt: 'updated_at',`
  `},`
`};`


###
Você pode obter o token jwt na rota /tokens, passandos os dados JSON:
{
	"email": "admin@email.com",
	"password": "123456"
}
