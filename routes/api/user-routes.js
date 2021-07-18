const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser, 
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// Set up Get all and post
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// set up Get one, put, and delete
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// add and delete friends
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend); 

module.exports = router;