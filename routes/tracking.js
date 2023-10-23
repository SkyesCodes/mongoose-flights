const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/tracking');

// POST /movies/:id/reviews (create review for a movie)
router.post('/flights/:id/tracking', flightsCtrl.create);

module.exports = router;