const person = ["John", "Doe", 46];

console.log(typeof person);

console.log(person.length);

console.log(person[person.length -1]);

console.log("normal loop iteration: ");     //array itteration by normal loop
for(i = 0; i < person.length; i++){
    console.log(person[i]);
}

console.log("foreach iteration: ");     //array iteration by forEach()
function fruitsFunction(value){
    console.log(value);
}
person.forEach(fruitsFunction);

person.push("lemon");       //adding new element by push()
console.log(person);

console.log(Array.isArray(person));

