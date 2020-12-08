var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl){
            return true;
        },signInSuccessUrl: '../ecommerce.html'
    }
};

function loginfn(){
    var useremail = document.getElementById("inputEmail").value;
    var userpass = document.getElementById("inputPassword").value;
    firebase.auth().signInWithEmailAndPassword(useremail, userpass).then(function(){
        window.location.href = '../ecommerce.html'
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    })
}





