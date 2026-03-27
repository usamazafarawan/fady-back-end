let students = require('../data/students-data');

const { sql, getConnection } = require('./services/db');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()


exports.createUser = async (req, res) => {



    try {

        console.log('data paload', req.body)

        const { firstName, lastName, email, password, role } = req.body;
        console.log('role: ', role);
        console.log('password: ', password);
        console.log('email: ', email);
        console.log('lastName: ', lastName);
        console.log('firstName: ', firstName);


        // we use bYcrypty stuff

const saltRound = 10; // use for encrption process 
const hashPassword  = await bcrypt.hash(password,saltRound);



        const pool = await getConnection();
        await pool.request()
            .input('firstName', sql.VarChar, firstName)
            .input('lastName', sql.VarChar, lastName)
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, password)
            .input('role', sql.VarChar, role)
            .input('hash', sql.VarChar, hashPassword)
            .query(`
            INSERT INTO Users (firstName, lastName, email, password, role, hash)
            VALUES (@firstName, @lastName, @email, @password, @role, @hash)
        `);


        console.log('pool: ', pool);

        res.status(201).json({
            message: 'user created Successsfully'
        })
    }
    catch (err) {

        res.status(500).send("Database connection error");
    }

}


exports.loginUser = async (req, res) => {



    try {

        console.log('data paload', req.body)

        const { email, password } = req.body;
        console.log('password: ', password);
        console.log('email: ', email);





        const pool = await getConnection();

        const result = await pool.request()
            .input('email', sql.VarChar, email)
            .query('SELECT * FROM Users WHERE email = @email')


        if (result.recordset.length === 0) {
            return res.status(400).json({ message: 'User Not Found' })

        }

        const user = result.recordset[0]; // hash stored in db 

        // we check bycrpty password rather it is coorect or not

        const isMatch =  await  bcrypt.compare(password,user.hash)


        // if (user.password !== password) {
        //     return res.status(400).json({ message: 'Password Not Matched' })
        // }

        if (!isMatch) {
            return res.status(400).json({ message: 'Password Not Matched' })
        }


        /// here is the place where we will generate token JWT



        const token = jwt.sign(

            {
                id: user.id,
                email: user.id,
                role: user.role
            },
            process.env.JWT_SECRET,

            {
                expiresIn: '15s'
            }
        ) 

        
        console.log('token: ', token);




        res.status(200).json({
            message: 'Login Succesfully',
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
            }
        })


    }
    catch (err) {

        res.status(500).send("Database connection error");
    }

}

