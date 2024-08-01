console.log("------OthersEs6Feature------");

console.log("#1 Template Literals");
const myName = "Risu Singh"
console.log(`My Name is ${myName}`);

console.log("#2 Destructuring Assignment");
// array
const arr = [1, 2, 3]
const [a, b] = arr
const [x, , z] = arr
console.log(a);
console.log(b);
console.log(x);
console.log(z);
// object
const person = {
    name: 'Risu Singh',
    email: "risusingh35@gmail.com",
    mob: '+91-1818188181'
}
const {name,email,mob}=person
console.log(name);
console.log(email);
console.log(mob);

console.log("#3  Default Parameters");
const getMyName=(nameValue='RK')=>console.log(`Welcome ${nameValue}`);
getMyName()
getMyName(name)

console.log("#4  Rest and Spread Operators");

const printObjOrArr=(...val)=>console.log(val);
printObjOrArr(person)
printObjOrArr(1,2,3)

console.log("#5  Iterators and Generators");
// Iterator example
const iterator = {
    current: 0,
    next() {
        if (this.current < 5) {
            return { value: this.current++, done: false };
        } else {
            return { value: undefined, done: true };
        }
    }
};

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); // { value: undefined, done: true }

// Generator example
function* generator() {
    let i = 0;
    while (i < 3) {
        yield i++;
    }
}

const gen = generator();
console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); // { value: undefined, done: true }

console.log("#6  Maps and Sets");
// Map example
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1')); // value1

// Set example
const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Duplicate values are ignored replace 1 with other value and check log for set
console.log(set);
console.log(set.has(1)); // true
console.log(set.size); // 2
console.log(map.get('key2'));

