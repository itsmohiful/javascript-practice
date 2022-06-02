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
async function course(){
    try{
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    }catch(err){
        console.log(err);
    }

}

course();



