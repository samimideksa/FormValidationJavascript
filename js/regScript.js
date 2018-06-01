function validateFormOnSubmit(theForm) {
    var reason = "";
    //caught any errors that might occur.
    try {
        reason += validateUsername(theForm.firstname,"first");
        reason += validateUsername(theForm.lastname,"last");
        reason += validateEmail(theForm.email);
        reason += validatePhone(theForm.phone);
        reason += validatePassword(theForm.pwd);
        reason += ConformPassword(theForm.cpwd,theForm.pwd);
    }catch(err){
        document.getElementById("demo").innerHTML = err.message;
    }     
    if (reason != "") {
        document.getElementById("demo").innerHTML = "Some fields need correction:</br>" + reason;
        return false;
    }

    return true;
}

// check whether the names enterd valid or not.
function validateUsername(fld,m) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (fld.value == "") {
        fld.style.background = 'Yellow'; 
        error = "- You didn't enter your "+m+"name.</br>";
    } else if ((fld.value.length < 6) || (fld.value.length > 25)) {
        fld.style.background = 'Yellow'; 
        error = "- The "+m+"name must be between 8 and 25 characters long.</br>";
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Yellow'; 
        error = "- The "+m+"name contains illegal characters.</br>";
    } else {
        fld.style.background = 'White';
    }
    return error;
}   

function trim(s)
{
  return s.replace(/^\s+|\s+$/, '');
}

// check whether the email is valid or not.
function validateEmail(fld) {
    var error="";
    var tfld = trim(fld.value);// value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
    var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
   
    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "- You didn't enter an email address.</br>";
    } else if (!emailFilter.test(tfld)) { //test email for illegal characters
        fld.style.background = 'Yellow';
        error = "- Please enter a valid email address.</br>";
    } else if (fld.value.match(illegalChars)) {
        fld.style.background = 'Yellow';
        error = "- The email address contains illegal characters.</br>";
    } else {
        fld.style.background = 'White';
    }
    return error;
}

// check whether the phone entered is valid or not.
function validatePhone(fld) {
    var error = "";
    var stripped = fld.value.replace(/[\(\)\.\-\ ]/g, '');    

   if (fld.value == "") {
        error = "- You didn't enter a phone number.</br>";
        fld.style.background = 'Yellow';
    } else if (isNaN(parseInt(stripped))) {
        error = "- The phone number contains illegal characters.</br>";
        fld.style.background = 'Yellow';
    } else if (!(stripped.length == 10)) {
        error = "- The phone number must be 10 digits long.</br>";
        fld.style.background = 'Yellow';
    } else {
        fld.style.background = 'White';
    }
    return error;
}

// check whether the password is valid or not.
function validatePassword(fld) {
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers 
 
    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "- You didn't enter a password.</br>";
    } else if ((fld.value.length < 8) || (fld.value.length > 20)) {
        error = "- The password must be between 12 and 20 characters long. </br>";
        fld.style.background = 'Yellow';
    } else if (illegalChars.test(fld.value)) {
        error = "- The password contains illegal characters.</br>";
        fld.style.background = 'Yellow';
    } else if (!((fld.value.search(/(a-z)+/)) && (fld.value.search(/(0-9)+/)))) {
        error = "- The password must contain at least one numeral.</br>";
        fld.style.background = 'Yellow';
    } else {
        fld.style.background = 'White';
    }
   return error;
}

// check whether the passwords match or not.
function ConformPassword(fld1,fld2) {
    var error = "";
 
    if (fld1.value != fld2.value) {
        fld2.style.background = 'Yellow'; 
        error = "- password does not match.</br>"
    } else {
        fld2.style.background = 'White';
    }
    return error;  
}


