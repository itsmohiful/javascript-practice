//forEach,filter,map,reduce,every,some

const numbers = [45, 4, 9, 16, 25];

//array iteration method forEatch()
function myFunction1(value, index, array){
    console.log("value",value);
    console.log("index",index);
    console.log("array",array);
    console.log("========")

}

numbers.forEach(myFunction1);


//map method
function myFunction2(value, index, array){   //you can also use index, array parameter aslo
    return value * 2;
}
console.log("map function exicuted: ",numbers.map(myFunction2));


//filter method
function myFunction3(value,index,array){
    return value > 20;
}
console.log("filter method exicuted: ",numbers.filter(myFunction3));


//reduce method
function myFunction4(total,value,index,array){
    console.log("total",total);
    console.log("-------");
    return total + value;
}

console.log(numbers.reduce(myFunction4));



//every method

function myFunction4(value,index,array){ // all element should pass the test
    return value > 5;
}

console.log("every() exicute: ",numbers.every(myFunction4));


//some method
function myFunction4(value,index,array){ // if any element pass the test, than tis true
    return value > 5;
}

console.log("some() exicute: ",numbers.some(myFunction4));


console.log("indexof",numbers.indexOf(16));