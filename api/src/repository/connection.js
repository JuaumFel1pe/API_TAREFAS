import mysql from 'mysql2/promise';

const config = await mysql.createConnection({
    host: process.env.MYSLQ_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    typeCast: function(field, next){
        if(field.type === 'TINY' && field.length === 1){
            return (field.string() === '1');
        } else{
            return next()
        }
    }
})

export default config;