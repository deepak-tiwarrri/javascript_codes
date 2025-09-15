//map takes a callback and returns an new array
let arr = [2,3,5];
let newArray = arr.map((x)=>x*2);
console.log(newArray);

Array.prototype.newMap = function(callback){
    // always return new array
    let result = [];
    //take the current array
    let currentArray = this;
    //now iterate in array and callback will do his work
    for(let i=0;i<this.length;i++){
        let currentValue = currentArray[i];
        //callback takes three things current value , current index, given array
        let transformedValue = callback(currentValue,i,currentArray);
        result.push(transformedValue);
    }
    return result;
}


let arr2 = [5,10,18,283];
let result = arr2.newMap((x)=>x*3);
console.log(result);