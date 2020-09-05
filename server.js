const express = require('express');
const app = express();
const PORT = process.env.port || 5000;
const connectDb = require('./config/db');

// Connect DB
connectDb();

app.get('/', (req, res) => {
    res.send('Run');
});

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
