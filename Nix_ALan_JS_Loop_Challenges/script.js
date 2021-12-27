function printOdd() {
    for(var i = 1; i < 21; i += 2){
console.log(i)
    }
}
// printOdd()
function printMultiplesOf3() {
    for(i = 101; i > 0; i--){
        if(i % 3 === 0){
            console.log(i)
        }
    }
}
// printMultiplesOf3()
function printSequence() {
    for(var i = 4; i > -4; i -= 1.5){
        console.log(i)
    }
}
// printSequence()
    function sigma() {
        var sum = 0
        for(var i = 0; i < 101; i++){
            sum += i
        }
        console.log(sum)
    }
//sigma()
function factorial () {
var product = 1
for(var i = 1; i < 13; i++){
    product = product * i
}
console.log(product)
}
factorial()