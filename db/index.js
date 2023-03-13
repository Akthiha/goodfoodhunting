const { Pool } = require("pg")

const cofig ={
    dev: {
        database : "goodfoodhunting",
    },
    prod: {
        connectionString : process.env.DATABASE_URL,
    },
}
module.exports = new Pool(process.env.DATABASE_URL ? config.prod : config.dev)