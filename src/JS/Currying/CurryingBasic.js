console.log("---------CurryingBasic---------");
// Basic

const add=(a)=>(b)=>a+b
console.log(add(10)(20));


const  createUser=(role)=>(userName)=>(age)=>({
    role,
    userName,
    age
})

const adminUser=createUser('Admin')
const readOnlyUser=createUser('readOnly')
const user1=adminUser('Risu Singh')(30)
const user2=readOnlyUser('RK Singh')(30)
console.log(user1);
console.log(user2);