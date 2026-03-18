const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());



const studentsRoutes = require('./routes/students-routes');
app.use('/students', studentsRoutes);



// testing api endpoint
app.get('/test',(req,res)=>{
    res.send('Hello World! working Good Api');
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})