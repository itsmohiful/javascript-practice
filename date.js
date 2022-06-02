const x = Date();
console.log(x);

const y = new Date();
console.log("utc standard: ",y.toUTCString());

console.log("date string: ",y.toDateString());