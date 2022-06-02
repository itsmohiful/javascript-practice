//input : linearSearch(['..', '...', '....',], 'searchValue')
//output : 2 or "not found"

function linearSearch(arr,value){
    length = arr.length;
    for(let i = 0; i < length; i++){
        if(arr[i] === value){
            return i;
        }
    }
    return 'not found'
}

console.log(linearSearch(['a','b','c','d',3,4,'c'],'c'));