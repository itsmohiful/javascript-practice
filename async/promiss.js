let paymentSuccess = true;
let result = 89;

//producing code
function enroll(){
    console.log("your enroll in process...");

    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve();
            }else{
                reject('payment failed!');
            }
        },2000);
    });
    
    return promise;
}


function progress(){
    console.log("course on progress....");

    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(result >= 80){
                resolve();
            }else{
                reject("you could not get enough marks!");
            }
        },2000);
    });

    return promise;
}


function getCertificate(){
    console.log("preparing your certificate...");

    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("congrates! here is your certificate.");
        },2000);
    });

    //shorter way
    // const promise = Promise.resolve("congrates!here is your certificate..");

    return promise;
}


//consuming code
enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    })

//you can also catch value if you need
// enroll()
//     .then(function(value){
//         progress(value);
//     })
//     .catch(function(err){
//         console.log(err);
//     })


