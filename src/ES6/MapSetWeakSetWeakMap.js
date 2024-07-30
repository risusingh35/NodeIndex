console.log("---------MapSetWeakSetWeakMap---------");
// set-------------------------------

// const set=new Set()

// set.add(100)
// console.log(set);
// set.add(10)
// console.log(set);
// set.add(101)
// console.log(set);
// console.log({size:set.size});
// set.forEach(s=>console.log({forEach:s}))
// console.log({'set.has':set.has(101)});
// set.delete(101)
// console.log(set);
// console.log({'set.has':set.has(101)});
// set.clear()
// console.log(set);

// map---------------------
// let user={
//     name:'Risu Singh',
//     age:30
// }
// const map=new Map()
// console.log(map);

// map.set('name','RK')
// console.log(map);

// map.set(1,'num')
// map.set('num',1)
// console.log(map);


// console.log({'map.get':map.get(1)});
// console.log(map);
// map.delete(1)
// console.log(map);

// WeakSet---------------------------------
// A WeakSet is a collection of objects only. The objects in a WeakSet are held weakly, meaning they are garbage collected if there are no other references to the object.

let obj1 = { name: 'John' };
let obj2 = { name: 'Doe' };

const weakSet = new WeakSet();

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

obj1 = null; // Now obj1 is eligible for garbage collection

console.log(weakSet.has(obj1)); // false, because obj1 was garbage collected


// WeakMap----------------------------------
// A WeakMap is a collection of key-value pairs where the keys are objects and are held weakly. This means if there are no other references to the key object, it can be garbage collected.
// let myName1 = { id: 1 };
// let myName2 = { id: 2 };
// const weakMap=new WeakMap()
// console.log(weakMap);

// weakMap.set(myName1,'Risu Singh')
// console.log(weakMap.get(myName1));
// myName1=null    
// console.log(weakMap.has(myName1));
// console.log(weakMap.get(myName1));