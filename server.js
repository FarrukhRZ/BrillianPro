const { compareSync } = require('bcryptjs');
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./keys');


const app = express();

//mongoDB config
const db = require('./keys').MongoURI;

//routes
const users = require('./routes/api/users');
const courses = require('./routes/api/courses');
const materials = require('./routes/api/materials');
const assessment = require('./routes/api/assessment');
//Mongodb Connect
mongoose
    .connect(db)
    .then(()=> console.log("MongoDB connected"))
    .catch((err) => console.log("Error" + err))


app.use('/api/users',users)
app.use('/api/courses',courses)
app.use('/api/materials',materials)
app.use('/api/assessment',assessment)

app.get('/',(req,res) =>{
    res.send('Hello');
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));