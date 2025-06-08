module.exports = class User {
    static Usuarios = []
    constructor(fullName, email, password) {
        this.fullName = fullName
        this.email = email
        this.password = password
    }
}