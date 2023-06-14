const express = require('express')
const cors = require('cors')
require('dotenv').config();
const tasks = require('./Routes/tasks')
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
}));
app.use('/API/fxjournal',tasks)
app.listen(port,()=>{
    console.log("Server is running on port: "+port)
})