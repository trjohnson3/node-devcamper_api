const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: 'true', message: 'show all bootcamps' });
});

router.post('/', (req, res) => {
    res.status(200).json({ success: 'true', message: 'add new bootcamp' });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ success: 'true', message: `show bootcamp id: ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ success: 'true', message: `delete bootcamp id: ${req.params.id}` });
});

module.exports = router;