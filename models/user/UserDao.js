var mysql = require('mysql')
const connection = require('../../db').connection
const User = require('../../models/user/User')

class UserDao{
    constructor(){

    }

    /**
     * Save an new user to the database
     * Used in: POST/user/register
     * @param {User} user User object 
     * @param {Function} callback Callback to run on completion, only use param on error
     */
    saveUser(User, callback){
        const {pass, email, firstName, lastName} = User;

        connection.query('INSERT INTO `User` (Pass, Email, FirstName, LastName) VALUES (?, ?, ?, ?)', [pass, email, firstName, lastName], (err, res) => {
            if(err){
                console.error(err)
                callback(true)
            }else{
                console.log(res)
                callback();
            }
        });
    }

    /**
     * Check if email is already taken
     * @param {String} email Email to be checked
     * Used in: POST/user/register
     */
    isEmailAvailable(email, callback){
        connection.query('SELECT * FROM `User` WHERE email=?', [email], (err, res) => {
            if (err){
                callback(err, null)
            }
            else if (res.length > 0){
                console.log(`${email} is already taken`)
                callback(null, false)
            }else{
                callback(null, true)
            }
        }) 
    }

    /**
     * Get data of user by email to use as session after login
     * Used in: POST/user/login
     * @param {String} email email of the user to be found
     * @param {Function} callback 
     */
    getUserByEmail(email, callback){
        // console.log(email)
        connection.query('SELECT * FROM `user` WHERE email=?', [email], (err, res) => {
            // console.log(res[0])
            if (err){
                callback(err, null)
            }
            else if (res.length == 0){
                callback(null, false) // No user found with this email
            }
            else{
                const {ID, FirstName, LastName, Email, Pass} = res[0]
                const U1 = new User(ID, FirstName, LastName, Email, Pass)
                callback(null, U1)
            }          
        })
    }

    /**
     * 
     * @param {Integer} id Get
     * @param {*} callback 
     */
    getUserById(id, callback){
        // todo
    }
}

module.exports = UserDao;