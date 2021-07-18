const { User } = require('./../models');

const userController = {
    // get all users
    getAllUser(req, res) {
        User.find({})
            .populate({
                path:'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path:'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create User
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    // add a friend
    addFriend({ params, body }, res) {
        User.findOneAndUpdate(
            {_id: params.userId },
            { $addToSet: { friends: params.friendsId } },
            { new: true, runValidators: true }
        )
        .then(dbAddFriendData => {
            if (!dbAddFriendData) {
                res.status(404).json({ message: 'No user data to add a friend' });
                return;
            }
            res.json(dbAddFriendData)
        })
        .catch(err => res.json(err));
    },

    //delete a friend
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            {_id: params.userId },
            { $addToSet: { friends: params.friendsId } },
            { new: true }
        )
        .then(dbFriendData => res.json(dbFriendData))
        .catch(err => res.json(err));
    },

    // update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    //delete User
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = userController;