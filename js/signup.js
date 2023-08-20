var myName = document.getElementById("myName");
var myEmail = document.getElementById("myEmail");
var myPassword = document.getElementById("myPassword");
var errText = document.querySelector(".text-danger");
var myButton=document.querySelector("button");
var signIn=document.querySelector(".sign");

var users=[];

myButton.addEventListener("click",function(){
    switch(verify())
    {
        case 0:
            errText.style.display="none"
            errText.innerHTML="";
            var user={
                uName:myName.value,
                uEmail:myEmail.value,
                uPassword:myPassword.value
            }
            users.push(user);
            localStorage.setItem("localUsers",JSON.stringify(users));
            clearInputs();
            break;
        case 1:
            errText.style.display="block"
            errText.innerHTML="All inputs is required"
            break;
        case 2:
            errText.style.display="block"
            errText.innerHTML="Name must be more than 2 characters and start with a letter"
            break;
        case 3:
            errText.style.display="block"
            errText.innerHTML="Email isn't correct"
            break;
        case 4:
            errText.style.display="block"
            errText.innerHTML="Password must be 8 or more characters"
            break;
        case 5:
            errText.style.display="block"
            errText.innerHTML="Email already exists"
            break;
        default:
            break;
    }
})

function clearInputs(){
    myName.value="";
    myEmail.value="";
    myPassword.value="";
}
function verify(){
    var regexName = /^[^0-9].+/gm; //not start with a number and name more than 2 char
    var regexEmail = /([a-z][0-9])+(@)([a-z])+(\.)([a-z])+/gm; //"small chars more than 1 "+ "@" + "small chars more than 1" + "." + "small chars more than 1"
    var regexpassword = /.{8,}/gm; //8 or more char
    if(myName.value=="" || myEmail.value=="" || myPassword.value==""){
        return 1;
    }
    else if(!regexName.test(myName.value)){
        return 2;
    }
    else if(!regexEmail.test(myEmail.value)){
        return 3;
    }
    else if(!regexpassword.test(myPassword.value)){
        return 4;
    }
    
    if(localStorage.getItem("localUsers") != null){
        users = JSON.parse(localStorage.getItem("localUsers"));
        for(var i=0; i< users.length; i++){
            if(users[0].uEmail == myEmail.value){
                return 5;
            }
        }
    }
    return 0;
    
}

signIn.addEventListener("click",function(){
    location.href="index.html" // from the location of the html file and because it's an a element the href attribute must be # // you can put the path directly on href att 
});