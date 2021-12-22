// function swapSpan(){
//     document.querySelector("#blueText").innerText = "Javascript!";
// }
function swapSpan(element){
    element.style.color = "#aa00aa"
 }
 function like(id){
     document.querySelector("#" + id).innerText++;
 }
 var counter = 0;
 function clickAlert(){
     counter++;
     alert("You clicked me " + counter + " times!")
 }