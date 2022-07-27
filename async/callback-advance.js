const paymentSuccess = true;
let result = 89;
let printer = false;


function enroll(callback){
    console.log("your enroll in process..");

    setTimeout(function(){
        if(paymentSuccess){
            callback();
        }else{
            console.log("payment failed!!");
        }
    },2000);
    
}


function progress(callback){
    console.log("course on progress...");

    setTimeout(function(){
        if(result >= 85){
            callback();
        }else{
            console.log("You could not get enough marks!");
        }
    },3000);
}


function makeCertificate(callback){
    console.log("preparing your certificate...");

    setTimeout(function(){
        if(printer){
            console.log("Printing your certificate...");
            callback();
        }else{
            console.log("Sorry! we dont have any free printer now, come sometimes letter");
        }
    },2000);
}


function getSignature(){
    console.log("doing signature in your certificate...");

    setTimeout(function(){
        console.log("Congrates! Here is your certificate!")
    },2000);
}


// enroll(function(){
//     progress(certificate);
// });

enroll(function(){
    progress(function(){
        makeCertificate(getSignature)
    });
});