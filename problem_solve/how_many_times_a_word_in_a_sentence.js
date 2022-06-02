//find a word in a paragraph and first positions of the word
const paragraph = "kBangladesh is a small country with a huge population. The total area of Bangladesh is 147,570 square.Bangladesh kilometers but the total population Bangladesh is more than 164 million. Still, bangladesh it is a green and naturally beautiful country. Our country bangladesh is growing economically and it is doing well in export too";

const matches = paragraph.match(/bangladesh/gi);
const occurances = matches ? matches.length : 0; //how many times word

console.log(occurances);

let position = paragraph.search(/bangladesh/i);
position = position >= 0 ? position : "not found"; //which position

console.log(position);