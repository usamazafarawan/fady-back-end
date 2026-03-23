const express = require('express');
const cors = require('cors');


const { getConnection } = require('./controllers/services/db');

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());



const studentsRoutes = require('./routes/students-routes');
const usersRoutes = require('./routes/users-routes');

app.use('/students', studentsRoutes);
app.use('/users', usersRoutes);




// testing api endpoint
app.get('/test',(req,res)=>{
    res.send('Hello World! working Good Api');
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



getConnection().then(()=>{

    console.log('Database connection successful');

}).catch((err)=>{
    console.log('err: ', err);

})