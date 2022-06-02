//regular function
function myFunction(x,y){
    return x * y;
}

console.log("regular function return: ", myFunction(6,8));


//arrow function

let func = (p,q) =>{
    return p * q;
};
console.log("arrow function return: ",func(5,8));

let func2 = (m,n) => m + n + " without return";      //without return
console.log("without return keyword: ", func2(9,4));