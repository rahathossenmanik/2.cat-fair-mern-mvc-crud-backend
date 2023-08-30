const router = require('express').Router();

const petTypeController = require('../controllers/petTypeController');

router.get('/getall', petTypeController.list);
router.get('/getbyid/:id', petTypeController.details);
router.post('/create', petTypeController.create);
router.put('/update/:id', petTypeController.update);
router.delete('/delete/:id', petTypeController.delete);

module.exports = router;
