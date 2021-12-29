function alwaysHungry(arr) {
    var result = []
    for( data of arr){
        if(data === "food"){
            result.push("yummy")
        }
    }
    if(result.length === 0){
        console.log("I'm hungry")
    }
    
}
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for(data of arr){
        if(data > cutoff){
            filteredArr.push(data)
        }
    }
    return filteredArr;
}
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(data of arr){
        sum += data
    }
    var average = sum / (arr.length)
    var count = 0
    for(data of arr){
        if(data > average){
            count++
        }
    }
    

    // count how many values are greated than the average
    return count;
}
//var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
//console.log(result); // we expect back 4

function reverse(arr) {
    // your code here
    var arrReverse = []
    for(var i = arr.length-1; i > -1; i--){
        arrReverse.push(arr[i])
    }
    arr = arrReverse
    return arr;
}
   
//var result = reverse(["a", "b", "c", "d", "e"]);
//console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    var j = 0
    var k = 1
    for(var i = n-2; i > 0; i-- ){
        fibArr.push(fibArr[j]+fibArr[k])
        j++
        k++
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


