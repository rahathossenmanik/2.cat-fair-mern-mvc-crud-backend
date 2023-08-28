const router = require('express').Router();

const petController = require('../controllers/petController');

router.get('/getall', petController.list);
router.get('/:id', petController.details);
router.post('/create', petController.create);
router.put('/update/:id', petController.update);
router.delete('/delete/:id', petController.delete);

module.exports = router;
