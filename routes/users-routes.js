const express = require('express');
const router = express.Router();


const userController = require('../controllers/users-controller');


router.post('/create', userController.createUser)
router.post('/login', userController.loginUser)


// router.get('/get-all-data', studentController.getAllStudents)
// router.delete('/delete-student/:id' ,studentController.deleteStudent) 


module.exports = router