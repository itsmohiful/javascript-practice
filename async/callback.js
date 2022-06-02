function display(some){
    console.log(some);
}


function calculator(num1,num2,callback){
    let sum = num1 + num2;

    if(callback){
        callback(sum);
    }
    //display(sum);

}


let result = calculator(4,7,display);

//you can aslo

// let result = calculator(3,8,function(sum){
//     console.log(sum);
// });

//display(result);