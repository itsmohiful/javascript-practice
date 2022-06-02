//find longest strings from an array and its index

function longestStrings(strs){
    let longestWord = '';

    for(word of strs){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }

    return `longestStrings is "${longestWord}"`;
}

console.log(longestStrings(['Beleyat Riad','scorpion islam','mohiful islam','islam','code fish with riad','foysal','hridoy']));