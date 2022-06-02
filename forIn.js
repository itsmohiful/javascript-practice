//for in is mostly used in objects

const person = {fname:"John", lname:"Doe", age:25};

console.log("full objects: ",person);
console.log("First name: ",person.fname);
console.log("Last name: ",person["lname"]);

for (let x in person){      //for in objects
    // console.log(x);
    // console.log(person[x]);
    console.log(`${x} : ${person[x]}`);
}

console.log("--------");

const numbers = [45,4,9,18,25,32];
for (let number in numbers){        //for in array
    //console.log(number);
    //console.log(numbers[number]);
    console.log(`${number} : ${numbers[number]}`);
}