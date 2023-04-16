const express = require('express');
const app = express();//to initialise
const port=5000;

const userRouter=require('./routers/userRouter'); //import user router

const cors =require('cors');
app.use(cors({
    origin:['http://localhost:3000'],
}));

app.use(express.json());

//middleway
app.use('/user',userRouter);

//creating routes, here / is route
app.get('/', (req, res)=>{
    res.send('Working Perfectly')
});

app.get('/add', (req, res)=>{
    res.send('Response from add')
});


app.get('/getall', (req, res)=>{
    res.send('Response from getall')
});

app.get('/update', (req, res)=>{
    res.send('Response from update')
});

app.listen(port, () => {console.log('server started')});//code to create server

