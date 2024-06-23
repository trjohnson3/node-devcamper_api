const express = require('express');
const {
    getBootcamps,
    getBootcamp,
    createtBootcamp,
    upadteBootcamp,
    deleteBootcamp
} = require('../controllers/bootcamps');

const router = express.Router();

router
    .route('/')
    .get(getBootcamps)
    .post(createtBootcamp);

router
    .route('/:id')
    .get(getBootcamp)
    .put(upadteBootcamp)
    .delete(deleteBootcamp);

module.exports = router;