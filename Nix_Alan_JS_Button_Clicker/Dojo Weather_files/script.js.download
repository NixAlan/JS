var tempsC = document.querySelectorAll(".temp")




var highToday = document.getElementById("today-high").innerText
var lowToday = document.getElementById("today-low").innerText
function convert(){
    if(document.getElementById("temperature-type").value === "℉")
        for (let temp of tempsC){
            temp.innerText = Math.round(parseInt(temp.innerText) * 1.8 + 32)
            console.log(temp.innerText)
            console.log("F")
        }
     else {
        if(document.getElementById("temperature-type").value === "℃")
    for (let temp of tempsC){
       temp.innerText = Math.round((parseInt(temp.innerText)-32) * (5/9))
        console.log(temp.innerText)
        console.log("C")
        }
    }
}
function alertLoading() {
     alert("Loading weather report")
 }
 function removeCookie() {
     var remove = document.getElementById('cookies')
         remove.parentNode.removeChild(remove)
 }