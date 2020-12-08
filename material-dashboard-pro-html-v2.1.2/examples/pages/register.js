// function registeruser(){
//     var useremail = document.getElementById("reguseremail").value;
//     var userpass = document.getElementById("reguserpass").value;
//     firebase.auth().createUserWithEmailAndPassword(useremail, userpass).then(function(){
//         window.location.href = '../ecommerce.html'
//     }).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//     })
// }
let form = document.getElementsByClassName('form');

function check(){

    window.alert("in");
    const phoneptrn = /\d{10,11}/;
    const dateCheck = /20(0[4-9] | 1\d | 2[0-1])-(0[1-9]| 1[0-2])-\d{2}/
    const passwordCheck  = /(\w){8,20}/
    let formInputs = document.getElementsByTagName("input");
    let checkErr = false;
    let validArray = [];
    let inValidArray = [];

    if(dateCheck.test(formInputs[3].value)){     //date --> 0
        inValidArray.push("Age must be above 16\n");
        checkErr = true;
    }
    else
    {
        validArray.push(formInputs[3].value);
    }
    
    if(phoneptrn.test(formInputs[4].value)){    //phone --> 1

        validArray.push(formInputs[4].value);
    }
    else{

        inValidArray.push("phone number must at least 10 digits.\n")
        checkErr = true;
    }

    if(passwordCheck.test(formInputs[6])){      //password --> 2
        validArray.push(formInputs[6].value);
    }
    else{
        inValidArray.push("password must be between 8 and 20 characters.\n");
        checkErr = true;
    }

    if(checkErr){
        let alertText = "";
        for(s in inValidArray)
            alertText += s.toString();
        alert(`Please, ${alertText}`);
    }
    else
    {
        validArray.push(formInputs[0].value); //firstname --> 3
        validArray.push(formInputs[1].value); //lastName  --> 4 
        validArray.push(formInputs[2].value); //address   --> 5
        validArray.push(formInputs[5].value); //email     --> 6
        UsersFB.HandleSignUp(
          validArray[3],
          validArray[4],
          validArray[0],
          validArray[5],
          validArray[1],
          validArray[6],
          validArray[2]
        );
    }
    


}



