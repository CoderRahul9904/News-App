//Imports
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import colors from 'colors'
import bodyParser from 'body-parser';
import connectDB from './db/conn.js'

dotenv.config();
const app = express();

//Middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));
app.use(bodyParser.json())

const port = process.env.PORT || 3000

connectDB();

app.get('/',(req,res)=>{
    res.send(req.body)
})

app.listen(port,()=>{
    console.log(`Listening on Port ${port}`)
})