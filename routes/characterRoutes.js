const router = require('express').Router();

const characterController = require('../controllers/characterController');

router.get('/getall', characterController.list);
router.get('/getbyid/:id', characterController.details);
router.post('/create', characterController.create);
router.put('/update/:id', characterController.update);
router.delete('/delete/:id', characterController.delete);

module.exports = router;
