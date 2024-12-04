function wordLen(str) {
    const value = str.trim().split(/\s+/);
    return value.length;
}

function checkAlpha(inputStr){
    var isAlpha = false;
    for(let i=0; i<inputStr.length; i++){
        if(isNaN(inputStr[i])){
            isAlpha = true;
        }
        else if(inputStr[i].){
            return false;
        }
    }
    return true;
}

function checkNum(inputStr){
    var isNum = false;
    for(let i=0; i<inputStr.length; i++){
        if(isNaN(inputStr[i])){
            return false;
        }
        else{
            isNum = true;
        }
    }
    return true;
}


function validateData(){
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var phonenum = document.getElementById("phonenum");
    var message = document.getElementById("message");
    var agreement = document.getElementById("agreement");

    if(!checkAlpha(firstname.value)){
        alert("First name must be alphabet!");
    }
    else if(!checkAlpha(lastname.value)){
        alert("Last name must be alphabet!");
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Email must end with '@gmail.com'!");
    }
    else if(!checkNum(phonenum.value)){
        alert("Phone number must be numeric!");
    }
    else if(wordLen(message.value)<5){
        alert("Message must be at least 5 words!");
    }
    else if(!agreement.checked){
        alert("'Done' checkbox must be checked!");
    }
    else{
        alert("Message Submitted.");
    }

}
