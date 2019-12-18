class User {
    /**
     * User instance
     * @param {Integer} id User ID
     * @param {String} firstName User First Name
     * @param {String} lastName User Last Name
     * @param {String} email User email
     * @param {String} password User password
     */
    constructor(id, firstName, lastName, email, pass) {
            this.id = id,
            this.firstName = firstName,
            this.lastName = lastName,
            this.email = email,
            this.pass = pass
    }
}

module.exports = User;