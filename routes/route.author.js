const router = require('express').Router();
const authorController = require('../app/controllers/controller.author');

router.get('/', authorController.getAll);
router.post('/', authorController.create);

module.exports = router;
