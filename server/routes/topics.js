const express = require('express');
const {getTopics,createTopic,getTopic,updateTopic,deleteTopic,likeTopic,search,getHottest,getNewest}=require("../controllers/topics.js")
const router = express.Router();

router.get('/', getTopics);
router.get('/', getTopics);
router.get('/hottest', getHottest);
router.get('/newest', getNewest);
router.get('/search', search);
router.post('/', createTopic);
router.get('/:id', getTopic);
router.patch('/:id', updateTopic);
router.delete('/:id', deleteTopic);
router.patch('/:id/likeTopic', likeTopic);
 
module.exports = router;
