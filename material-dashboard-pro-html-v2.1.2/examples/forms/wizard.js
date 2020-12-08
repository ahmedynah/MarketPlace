var mainApp = {};

(function(){
    var firebase = app_fireBase;
    var defaultDatabase = firebase.firestore();
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          uid = user.uid;
        }else{
            window.location.replace("./pages/login.html");
        }
      });

      function logOut(){
          firebase.auth().signOut();
      }

      function messageHandler(err){
          if(!!err){
              console.log(err);
          }else{
              console.log("success");
          }
      }

      function fnCreate(){
        var itemCount;
        var ref = firebase.database().ref("items/");
        ref.once("value").then(function(snapshot) {
        itemCount = snapshot.numChildren();
                var itemPhoto = document.getElementById("itemPicture").value;
        var itemPrice = document.getElementById("itemPrice").value;
        var itemName = document.getElementById("itemName").value;
        console.log(itemCount)
        var path = "items/"+itemCount;
        console.log(path)
        var data = {
            image: itemPhoto,
            price: itemPrice,
            title: itemName
        }
        app_fireBase.databaseApi.create(path, data, messageHandler)
        });  

      }

      function fnRead(){
        var path = "users/" + uid;
        app_fireBase.databaseApi.read(path, sucessFn, messageHandler)
        function sucessFn(snapShot){
            if(!!snapShot && snapShot.val()){
                console.log(snapShot.val());
            }else{
                console.log('No data');
            }
        }
      }
      function fnUpdate(){
        var itemPhoto = document.getElementById("itemPicture").value;
        var itemPrice = document.getElementById("itemPrice").value;
        var itemName = document.getElementById("itemName").value;

        var path = "items/";
        var data = {
            image: itemPhoto,
            price: itemPrice,
            title: itemName
        }
        app_fireBase.databaseApi.update(path, data, messageHandler)
      }
      function fnDelete(){
        var path = "users/" + uid;
        app_fireBase.databaseApi.delete(path, messageHandler)
      }

      function fnSubmit(){
        window.location.href = './wizard.html'
      }

      mainApp.Create = fnCreate;
      mainApp.Read = fnRead;
      mainApp.Update = fnUpdate;
      mainApp.Delete = fnDelete;
      mainApp.Submit = fnSubmit;
      mainApp.logOut = logOut;

})()