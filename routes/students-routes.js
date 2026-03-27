const express = require('express');
const router = express.Router();


const studentController = require('../controllers/students-controller');

const verifyToken  = require('../middleware/middleware')



router.get('/get-all-data' ,   verifyToken   ,studentController.getAllStudents)
router.delete('/delete-student/:id' ,studentController.deleteStudent) 


module.exports = router