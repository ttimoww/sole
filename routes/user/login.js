const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserDao = new(require('../../models/user/UserDao'))
router.use(express.json());

router.post('/login', (req, resp) => {
    const {email, pass} = req.body;
    console.log(req.body)
    UserDao.getUserByEmail(email, (err, user) => {
        if (err){
            resp.status(500);
            resp.json({message: 'Oops, something went wrong!'})
        }else if(!user){
            resp.status(403);
            resp.json({message: 'Wrong email or password.'})
        }else{
            console.log(user)
            bcrypt.compare(pass, user.pass, (err, res) => {
                if (err){
                    resp.status(500);
                    resp.json({message: 'Oops, something went wrong!'})
                }else if(!res){
                    resp.status(403);
                    resp.json({message: 'Wrong email or password.'})
                }else{
                    resp.status(200)
                    resp.json({
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
                    })
                }
            })
        }
    })
})

module.exports = router;
