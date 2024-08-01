console.log("---------Proxy Object---------");
// Validation----------------------------------------------------
const userObject = {
    name: 'Risu Singh',
    age: 30,
    email:'risusingh35@gmail.com',
    password:'Rk@123,.,'
}

const userObjectHandler = {
    set: (target, prop, value) => {
        if (prop = 'age' && isNaN(value) || value < 0) {
            throw new Error('Age must be a positive number');
        }
        target[prop] = value
        return true
    },
    get:(target,props)=>{
        if (props=='password') {
            return '**********'
        }
        return target[props]
    }
}

const proxyUserObject = new Proxy(userObject, userObjectHandler)

console.log({ proxyUserObject })
// proxyUserObject.age = -25// uncomment to see error

// Property Access Control---------------------------------------------
console.log(proxyUserObject.password)//