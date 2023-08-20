var myEmail = document.getElementById("myEmail");
var myPassword = document.getElementById("myPassword");
var myButton = document.querySelector("button");
var errText = document.querySelector(".text-danger");
var signIn=document.querySelector(".sign");

myButton.addEventListener("click",function(){
    if(myEmail.value == "" || myPassword.value == ""){
        errText.style.display="block";
        errText.innerHTML="All inputs is required";
    }
    else if(localStorage.getItem("localUsers") ==null){
        errText.style.display="block";
        errText.innerHTML="There no user is registered";
    }
    else{
        errText.style.display="none";
        errText.innerHTML="";
        var users = JSON.parse(localStorage.getItem("localUsers"));
        for(var i=0; i< users.length; i++){
            if(users[i].uEmail == myEmail.value && users[i].uPassword == myPassword.value){
                localStorage.setItem("currentSession",users[i].uName);
                location.href="home.html"
                return;
            }
        }
        errText.style.display="block";
        errText.innerHTML="Incorrect email or password";
    }
});

signIn.addEventListener("click",function(){
    location.href="signup.html" // from the location of the html file and because it's an a element the href attribute must be # // you can put the path directly on href att 
});