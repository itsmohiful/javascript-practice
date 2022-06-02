const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString());         //convert to string

console.log(fruits.join("*"));      //convert to string by join

//delete fruits[0]; 
  //delete method just delete value, not whole index that become empty
console.log("after use delete method,",fruits);

fruits.push("Mango");
console.log("push method",fruits);     //push method

console.log("pop method",fruits.pop());     //pop method

console.log("shift method: its remove first value ",fruits.shift());       //shift method

console.log("unshift method: add value in first index ",fruits.unshift("Gowaba")); 
console.log(fruits);       //unshift add value in first index 

fruits.splice(1,0,"Lemon","Pine-apple")
console.log("splice method: ", fruits); //splice(start,remove,add,add,..)

fruits.splice(0,1);
console.log("delete use 'splice' method without create any hole",fruits);

console.log("\n");

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChild = myBoys.concat(myGirls);     //concating two arrays
console.log("contating two array: \t",myChild);



