const {Client} = require('pg')

const client = new Client ({
    host: "localhost",
    user: "postgres",
    port:5432,
    password:"root",
    database:"practice"
})


client.connect();

client.query('select * from data',(err, result)=>{
    if(!err){
        console.log(result.rows);
    }
    client.end()
})