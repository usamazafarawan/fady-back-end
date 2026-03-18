const express = require('express');
const router = express.Router();


const studentController = require('../controllers/students-controller');


router.get('/get-all-data', studentController.getAllStudents)
router.delete('/delete-student/:id' ,studentController.deleteStudent) 


module.exports = router