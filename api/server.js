const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:5000", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("connection established"))
    .catch(console.error);

app.listen(3001, () => console.log("server started on port 3001"));
