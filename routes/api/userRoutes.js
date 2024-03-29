const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);
// /api/students/:studentId/assignments
//router.route('/:userId/friends/').post(addFriend);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);



// /api/students/:studentId/assignments/:assignmentId
//router.route('/:userId/friends/:friendsId').post(addFriend).delete(deleteFriend);


module.exports = router;
