const router = require('express').Router();
const { 
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought);
  
router
    .route('/:userId')
    .post(createThought);

//set up Get one, put 
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

// delete thought
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(deleteThought);

// reaction
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;