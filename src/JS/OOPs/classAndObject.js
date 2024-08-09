const oopClassObject = () => {
    // Class: A blueprint for creating objects. A class defines properties and methods common to all objects of a certain kind.

    // Object: An instance of a class. It has properties and methods defined by the class.


    // Defining a class
    class User {
        // constructor
        constructor(name, post) {
            this.name = name
            this.post = post
        }
        // method
        getUserMethod() {
            return `Welcome Mr. ${this.name} at Position of ${this.post}`
        }
    }
    const newUser=new User('Risu Singh','FullStack Developer')
    console.log(newUser.getUserMethod());
    
}
export { oopClassObject }
