console.log("#################-1ObjectMethods-#################");

// this in regular function
const UserObject = {
    name: 'Risu Singh',
    mob: '7771818777',
    getName: function () {
        console.log("name:", this.name)
        return this
    },
    getThis: function () {
        return this
    }
}
//  UserObject.getName()
// const thisValue = UserObject.getThis()
// console.log("thisValue:", thisValue);

// this in arrow function
// // undefined, because `this` is inherited from the global context

const name = () => 'Singh Ji'
employeeObject = {
    name: 'Risu Singh',
    post: "CEO",
    salary: '938309 $',
    getSalary: () => {
        console.log("getSalary:", this.name);//undefined
    },
    getMySalary: function () {
        console.log("getMySalary:", this.name);
        innerFunction = () => {
            console.log("innerFunction:", this.name);
        },
            innerFunction()
    }
}
employeeObject.getSalary()
employeeObject.getMySalary()