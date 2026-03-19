let students = require('../data/students-data');

const {sql , getConnection} = require('./services/db');


exports.getAllStudents = async (req , res)=>{

    // res.json(students)

    // here i wwill fetch data fom DB and send it back to the front end 

try {

    console.log("HITTTING ")

    // const pool = await getConnection();
    // const result = await  pool.request().query('SELECT * FROM Students');
    // console.log('result: ', result);
    // res.json(result.recordset); 


        res.json(students)


}
catch(err){

res.status(500).send("Database connection error");
}




}


exports.deleteStudent = async (req , res)=>{


    try{

          const studentId = parseInt(req.params.id);


//     const pool = await getConnection();


//     // delete record from DB
//     await pool.request()
//     .input('id',sql.Int,studentId)
//     .query('DELETE FROM Students WHERE Id = @id');



//     // need to fetch fresh data from database after deleting

//   const result = await  pool.request().query('SELECT * FROM Students');
//     console.log('result: ', result);

//     res.json(result.recordset); 

    students = students.filter(student => student.id !== studentId);



    
        res.json(students)


    }
    catch(err){
        console.log('err: ', err);

    }

    


  




}



