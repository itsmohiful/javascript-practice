let x = 4;

try{
    if (x == "") throw "its empty";
    if (isNaN(x)) throw "not a number";
    if (x < 5) throw "its too low";
    if (x > 10) throw "its too high";
}
catch(err){
    console.log(err);
}
finally{
    console.log("this test passed !");
}