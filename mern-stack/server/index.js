import express from 'express';
import connection from './database/db.js';

const app =express();
const PORT=9000;

connection();


app.listen(PORT,()=>{
    console.log(`server is running on port number ${PORT}`)
})