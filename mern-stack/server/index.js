import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv';
import Routes from './routes/route.js'
import cors from 'cors';
import bodyParser from 'body-parser';

const app =express();
const PORT=9000;
dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/",Routes)


const username=process.env.DB_USERNAME;
const password=process.env.DB_PASS;
connection(username,password);


app.listen(PORT,()=>{
    console.log(`server is running on port number ${PORT}`)
})