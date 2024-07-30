console.log("---------PrototypalInheritance---------");

const Animal={
    eat:true
}

const dog=Object.create(Animal)
console.log(dog);
console.log(dog.barks);
dog.barks=true
console.log(dog.barks);
console.log(dog.eat);
console.log(dog);
