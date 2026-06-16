const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/reports', require('./routes/reports'));
app.use('/api/centers', require('./routes/centers'));
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () =>
    console.log(`API running on port ${process.env.PORT}`)
);