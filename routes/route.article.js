const router = require('express').Router();
const articleController = require('../app/controllers/controller.article');

router.get('/banner', articleController.getArticleBanner);
router.get('/filter', articleController.getByName);
router.get('/', articleController.getAll);
router.get('/:id', articleController.getOnce);
router.post('/', articleController.create);
router.delete('/:id', articleController.delete);
router.put('/:id', articleController.update);

module.exports = router;
