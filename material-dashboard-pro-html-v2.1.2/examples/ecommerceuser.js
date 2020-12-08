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
        var path = "items/";
        app_fireBase.databaseApi.read(path, sucessFn, messageHandler)
        function sucessFn(snapShot){
            if(!!snapShot && snapShot.val()){
                console.log(snapShot.val()[0].image);
                console.log(snapShot.val().length);
                var itr = snapShot.val().length;
                for(k = 0; k < itr ; k++){
                  var div0 = document.createElement("div");
                  div0.className = "col-md-4";
                  var div1 = document.createElement("div");
                  div1.className = "card card-product card-plain no-shadow";
                  var div2 = document.createElement("div");
                  div2.className = "card-header card-header-image";
                  var a1 = document.createElement("a");
                  a1.href = "#";
                  var a2 = document.createElement("a");
                  a2.href = "#";
                  var img = document.createElement("img");
                  img.src = snapShot.val()[k].image;
                  img.width = "255";
                  img.length = "266";
                  img.alt = "...";
                  var div3 = document.createElement("div");
                  div3.className = "card-body";
                  var h4 = document.createElement("h4");
                  h4.className = "card-title";
                  var title = document.createTextNode(snapShot.val()[k].title);
                  var input = document.createElement("input");
                  input.type = "hidden";
                  input.name = "My Rating System";
                  input.id = "Demo";
                  input.className = "rating hidden";
                  var div4 = document.createElement("div");
                  div4.className = "card-footer justify-content-between";
                  var div5 = document.createElement("div");
                  div5.className = "price-container";
                  var span = document.createElement("span");
                  span.className = "price";
                  var price = document.createTextNode(snapShot.val()[k].price + '$');
                  var button = document.createElement("button");
                  button.className =
                    "btn bnt-rose btn-link btn-fab btn-fab-mini btn-round pull-right";
                  button.rel = "tooltip";
                  var i = document.createElement("i");
                  i.className = "material-icons";
                  var fav = document.createTextNode("favorite");
                
                  i.appendChild(fav);
                  button.appendChild(i);
                  span.appendChild(price);
                  div5.appendChild(span);
                  div4.appendChild(div5);
                  div4.appendChild(button);
                  h4.appendChild(input);
                  h4.appendChild(title);
                  a2.appendChild(h4);
                  div3.appendChild(a2);
                  a1.appendChild(img);
                  div2.appendChild(a1);
                  div1.appendChild(div2);
                  div1.appendChild(div3);
                  div1.appendChild(div4);
                  div0.appendChild(div1)
                  document.getElementById("productListing").appendChild(div0);

                  console.log(k)
                }
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

mainApp.Read();
