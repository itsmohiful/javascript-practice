//for of should used in iterable objetecs like array,map,strings,nodelist

const cars = ["BMW", "Volvo", "Mini","Mercedes"];

console.log("full arrays: ",cars);

console.log("*for of* results: it return values- ");
for (let x of cars){    //**for of** in array
    console.log(x);
}


console.log(" *for in* results: it return index number- ");
for (let x in cars){    //**for in** array
    console.log(x);
}


console.log("--------------");

const text = "Scorpion Islam";

for (let y of text){        //for of in strings
    console.log(y);
}