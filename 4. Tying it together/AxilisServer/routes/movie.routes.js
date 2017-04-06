'use strict';

const express = require('express');
const router = express.Router();

const MovieCtrl = require('../controllers/movie.controller');

router.get('/all', MovieCtrl.getAll);

router.post('/save', MovieCtrl.saveMovie);

router.post('/:movieId/setWatched', MovieCtrl.setWatched);

router.get('/:movieId', MovieCtrl.getMovie);

router.delete('/:movieId', MovieCtrl.deleteMovie);


module.exports = router;
