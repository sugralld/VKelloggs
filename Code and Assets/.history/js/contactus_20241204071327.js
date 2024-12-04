function wordLen(str) {
    const value = str.trim().split(/\s+/);
    return value.length;
}

function checkAlpha(password){
    var isAlpha = false;
    var isNum = false;
    for(let i=0; i<password.length; i++){
        if(isNaN(password[i])){
            isAlpha = true;
        }
        else{
            isNum = true;
        }

        if(isAlpha || isNum){
            return true;
        }
    }
    return false;
}

function checkNum(password){
    var isAlpha = false;
    var isNum = false;
    for(let i=0; i<password.length; i++){
        if(isNaN(password[i])){
            isAlpha = true;
        }
        else{
            isNum = true;
        }

        if(isAlpha || isNum){
            return true;
        }
    }
    return false;
}


function validateData(){
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var phonenum = document.getElementById("phonenum");
    var message = document.getElementById("message");
    var agreement = document.getElementById("agreement");

    if(!checkAlphaNum(firstname.value)){
        alert("First name must be alphabet!");
    }
    else if(!checkAlphaNum(lastname.value)){
        alert("Last name must be alphabet!");
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Email must end with '@gmail.com'!");
    }
    else if(!checkAlphaNum(phonenum.value)){
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
