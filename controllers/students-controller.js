let students = require('../data/students-data');


exports.getAllStudents = (req , res)=>{

    res.json(students)
}


exports.deleteStudent = (req , res)=>{


    const studentId = parseInt(req.params.id);
    console.log('studentId: ', studentId);



    // students = students.filter(student => student.id !== studentId);


    
    


    res.json(students)


}



