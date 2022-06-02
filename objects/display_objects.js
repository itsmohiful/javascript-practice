const person = {
    fname : "scorpion",
    lname : "islam",
    fullName : function(){
        return this.fname + " " + this.lname ;
    }
};

console.log("all keys: ",Object.keys(person)); //all keys

console.log("all values: ",Object.values(person)); //all values


console.log("display with stringify: ",JSON.stringify(person)); //display with strings, stringify not converted function to strings