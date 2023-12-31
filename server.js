const express= require('express') 
const app= express ()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()


const port = process.env.PORT || 8083


app.use(express.json())
app.use("/api" , require('./routes/userRoutes'))


mongoose.connect(process.env.MONGO_URI).then(()=> console.log("database connected"))
app.listen(port, () => console.log("listening on port :", port));

