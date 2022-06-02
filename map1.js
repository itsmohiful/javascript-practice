//map create new Map() constructor, set(),delete(),forEach(),get(),has(),entires()

const fruits = new Map([
    ["apple", 500],
    ["bananas", 600],
    ["orange",300]
]);
console.log("main fruits",fruits);

fruits.set("mango",400);    //set method
fruits.set("papaya",800);
console.log("after set: ",fruits);

console.log("get banana", fruits.get("bananas"));     //get method
console.log("size of map",fruits.size); //size property

fruits.delete("papaya");    //delete
console.log("after papaya delete",fruits);

console.log(fruits.has("papaya"));  //has method

console.log("-------------\n")

function myFunction(value,key){       //forEach method
    console.log(key, value);
}
fruits.forEach(myFunction);

console.log("-------------\n")


for (const x of fruits.entries()){      //entries() method
    console.log(x);
}