const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("/mern-todo", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log("Connected to DB"))
    .catch(console.error);

    