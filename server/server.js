require('dotenv').config();
const express = require('express');
const cors = require('cors');

const apiRoutes = require('./routes/api');
const mongoConnect = require('./db/mongoConnect');

const app = express();

mongoConnect();
app.use(express.json());
app.use(cors());

app.use('/', apiRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});