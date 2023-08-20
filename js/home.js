var myName= document.getElementById("myName");
var logout= document.getElementById("logout");

if(localStorage.getItem("currentSession") == null){
    location.href="index.html"
}

myName.innerHTML=localStorage.getItem("currentSession");

logout.addEventListener("click",function(){
    localStorage.removeItem("currentSession");
    location.href="index.html"
});
