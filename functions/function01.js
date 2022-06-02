const a = function(a,b){    //annonymous function
    return a + b;
}

console.log(a(3,6));


(function(a,b){     //self invoking functions / IIFE
    console.log(a*b);
})(3,4);