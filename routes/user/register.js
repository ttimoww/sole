const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/user/User')
const UserDao = new(require('../../models/user/UserDao'))
router.use(express.json());


/**
 * Register an new user
 * Expected body: {email: string, firstname: string, lastname: string, pass: string}
 */
router.post('/register', (req, resp) => {
    const {email, firstName, lastName, pass} = req.body;
    
    UserDao.isEmailAvailable(email, (err, result) => {
        if (err){
            resp.status(500);
            resp.json({message: 'Oops, something went wrong.'})
        }
        // In this case email is already in use
        else if(!result){
            resp.status(409);
            resp.json({message: 'Sorry, this email is already taken.'})
        }else{
            const hashedPass = bcrypt.hashSync(pass, 10);
            const U1 = new User(null, firstName,lastName, email, hashedPass)

            UserDao.saveUser(U1, error => {
                if (error){
                    resp.status(503);
                    resp.json({message: 'Oops, something went wrong.'})
                }else{
                    resp.status(200)
                    resp.json({message: 'User succesfully created!'})
                }
            });
        }
    })
})

module.exports = router


