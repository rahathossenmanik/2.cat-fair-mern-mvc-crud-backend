const router = require('express').Router();

const petController = require('../controllers/petController');

router.get('/getall', petController.list);
router.get('/:id', petController.details);
router.post('/create', petController.create);
router.put('/update/:id', petController.update);
router.delete('/delete/:id', petController.delete);

router.get('/getalldog', petController.dogList);
router.get('/getallcat', petController.catList);
router.get('/getallbird', petController.birdList);
router.get('/getallreptile', petController.reptileList);
router.post('/love/:id', petController.loveReaction);

module.exports = router;
