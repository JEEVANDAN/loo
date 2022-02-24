var name = document.getElementById("your-name")
var name = document.getElementById("crush-name")
var rand =  (Math.random()*100)+1;
floor = Math.floor(rand)
document.getElementById("calculate").addEventListener("click",love)
function love (){
    document.getElementById("result-message").textContent=floor+"%"
}





    