function setName(element){
document.getElementById(element).innerText = "John Doe"
}
// function acceptRequest(id1, id2) {
// document.getElementById(id1).innerText--
// }
function acceptRejectRequest(element) {
    if(element.alt === "click to accept") {
        document.getElementById('connection-requests').innerText--
        var remove = document.getElementById('connection-request-row-todd')
        document.getElementById('connections').innerText++
        remove.parentNode.removeChild(remove)
        console.log('true')
    }
    else{
        document.getElementById('connection-requests').innerText--
        var remove = document.getElementById('connection-request-row-todd')
        remove.parentNode.removeChild(remove)
    }
    }