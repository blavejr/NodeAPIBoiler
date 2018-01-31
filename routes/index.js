const express = require('express');
const router = express.Router();
const jobRoutes = require('../routes/user.routes');
router.use('/user', jobRoutes);

module.exports = router;
