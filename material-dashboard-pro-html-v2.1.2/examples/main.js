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
        var path = "users/" + uid;
        var data = {
            name: 'Hossam',
            age: 22
        }
        app_fireBase.databaseApi.create(path, data, messageHandler)
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
        var path = "users/" + uid;
        var data = {
            age: 23
        }
        app_fireBase.databaseApi.update(path, data, messageHandler)
      }
      function fnDelete(){
        var path = "users/" + uid;
        app_fireBase.databaseApi.delete(path, messageHandler)
      }

      function fnTest(){
        defaultDatabase.get("users")
      }

      mainApp.Create = fnCreate;
      mainApp.Read = fnRead;
      mainApp.Update = fnUpdate;
      mainApp.Delete = fnDelete;
      mainApp.Test = fnTest;
      mainApp.logOut = logOut;

})()