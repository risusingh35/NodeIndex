const Inheritance = () => {
    console.log('Inheritance ');
    class User {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        getUserNameAge() {
            return `Hi ${this.name} welcome as ${this.age}`
        }
    }
    const newUser = new User('Risu Singh', 30)
    console.log({ newUser });
    class Role extends User {
        constructor(name, age, role) {
            super(name, age)
            this.role = role
        }
        getUserNameRole() {
            return `Name:${this.name},Role is ${this.role}`
        }
    }
    const newRole = new Role('RK Singh', 31, 'Sr FullStack Developer')
    console.log({ getUserNameAge: newRole.getUserNameAge() });
    console.log({ getUserNameRole: newRole.getUserNameRole() });
}
export { Inheritance }