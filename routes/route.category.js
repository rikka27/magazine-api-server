const router = require('express').Router();
const categoryController = require('../app/controllers/controller.category');

router.get('/', categoryController.getAll);
router.post('/', categoryController.create);
router.delete('/:id', categoryController.delete);

module.exports = router;
