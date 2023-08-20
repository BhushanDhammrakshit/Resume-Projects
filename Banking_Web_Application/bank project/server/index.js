const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const {signup,login}=require('./controllers/authControllers')
const {transfer}=require('./controllers/transferControllers')
const {deposit,withdraw}=require('./controllers/servicesControllers')

const app=express()
const port=1337

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/bankdb')

app.post('/api/signup',signup);
app.post('/api/login',login);
app.post('/api/transfer',transfer);
app.post('/api/deposit',deposit);
app.post('/api/withdraw',withdraw);


app.listen(port,()=>{
    console.log(`Server started successfully on port ${port}`)
})