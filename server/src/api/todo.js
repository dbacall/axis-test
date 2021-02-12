const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

router.post('/', TodoController.create);
router.get('/', TodoController.getAll);

module.exports = router;
