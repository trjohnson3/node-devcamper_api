const express = require('express')
const dotenv = require('dotenv')

//LOAD ENV Vars
dotenv.config({ path: './config/config.env'});

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: 'true', message: 'show all bootcamps' });
});

app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: 'true', message: 'add new bootcamp' });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: 'true', message: `show bootcamp id: ${req.params.id}` });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: 'true', message: `delete bootcamp id: ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
