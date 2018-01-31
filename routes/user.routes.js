const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User.controller');
router.get('/', UserController.findAll);
router.post('/', UserController.create);
router.get('/:id', UserController.findOneById);
router.put('/:id', UserController.updateById);
router.delete('/:id', UserController.deleteById);

module.exports = router;
