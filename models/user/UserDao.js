var mysql = require('mysql')
const connection = require('../../db').connection

class UserDao{
    constructor(){

    }

    /**
     * Save an new user to the database
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
}

module.exports = UserDao;