const Encapsulation = () => {
    // Encapsulation: Hiding the internal state of an object and requiring all interaction to be performed through an object's methods.
    class User {
        // Private field using #
        #password

        constructor(name, post, password) {
            this.name = name
            this.post = post
            this.#password = password
        }
        getUserDetailsMethod() {
            return `Hi, ${this.name} welcome as ${this.post} with password:${this.#password}`
        }
        #getPasswordMethod() {
            return `Password:${this.#password}`
        }
        getPassword() {
            return `The password is ${this.#getPasswordMethod()}`
        }
        changePassword(pw) {
            if (pw.length > 5) {
                this.#password = pw
                return true
            } else {
                console.log(`Password must be at least 6 character long and you provided only:${pw.length}`);
                return false
            }
        }
        checkPassword(pw) {
            return this.#password === pw ? true : false
        }
    }
    const newUser = new User('Risu Singh', 'Sr FullStack Developer', 'Rkps@123')

    console.log(1, newUser);
    console.log('getUserDetailsMethod:', newUser.getUserDetailsMethod());
    // console.log('getPasswordMethod:',newUser.getPasswordMethod());
    console.log('checkPassword', newUser.checkPassword('Rkps@123'));
    console.log('checkPassword', newUser.checkPassword('rkps@123'));
    console.log('changePassword:', newUser.changePassword('1234'));
    console.log('changePassword:', newUser.changePassword('12345'));
    console.log('changePassword:', newUser.changePassword('123456'));

    console.log(2, newUser);
    console.log("getPassword", newUser.getPassword());

}
export { Encapsulation }