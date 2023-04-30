const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUser).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUser);



// /api/students/:studentId/assignments/:assignmentId
//router.route('/:userId/friends/:friendsId').post(addFriend).delete(deleteFriend);


module.exports = router;
