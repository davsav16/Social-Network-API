const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser, 
    updateUser,
    deleteUser
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

module.exports = router;