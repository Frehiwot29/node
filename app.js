const express = require('express');
const mongoose = require('mongoose');
const { config } = require('dotenv')
const cors = require('cors');
config()
mongoose.connect(process.env.MONGO_DB_URL, (err) => {
    if (err) {
        console.log('DB Error: ', err.message);
    } else {
        console.log('DB Connected');
    }
})
require("./models/product.model")
require("./models/user.model")
require("./config/data.config").init()
const routes = require('./routes');

const app = express()
app.use(express.json())
app.use(cors())


app.use('/api', routes)

const PORT = parseInt(process.env.PORT) || 5000;
app.listen(PORT, () => console.log(`listing the server on 3000......${PORT}`))