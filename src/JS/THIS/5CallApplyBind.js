console.log("#################-5CallApplyBind-#################");

// Call--------

function greeting(greetMsg, punctuation) {
    console.log(greetMsg, ", ", this.name,this.age, punctuation);
}
const myName = { name: "Rk Singh" ,age:30}
// greeting('Hello', '?')
// greeting.call(myName,'Hello', '?')

// apply--------
const myNewName={name:'Risu Singh',age:31}
// greeting.apply(myNewName,['Welcome ','!'])

// bind--------
const myNewName1={name:'Sonu',age:26}
const boundGreeting=greeting.bind(myNewName1)
boundGreeting('Please','.')