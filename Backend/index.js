const express=require('express');
const authrouter=require('./routes/authRouter');
const  partyRoutes = require('./routes/partyRoutes');
const voterRoutes = require('./routes/voteRoutes');
require('dotenv').config();
const app=express();
app.use(express.json())
const cors= require('cors');
app.use(cors());
const connectDB=require('./configs/db');
connectDB();
const Port=process.env.PORT || 8082;
app.use('/api/user',authrouter);
app.use('/api/party', partyRoutes);
app.use('/api/vote', voterRoutes);
app.get('/',(req,res)=>{
    res.send('Server is running..')
});
app.listen(Port,()=>{
    console.log(`server is running at ${Port}`)
});