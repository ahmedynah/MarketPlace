
class UsersFB{

     static HandleSignUp = async  (fname, lname, dob, addr, phone , email , pass)=>{
         window.alert("Ana da5alt ;)");
        tcart = {
            itemsID: []
        };
        tperson = {
          email: [email],
          DOB: dob,
          address: [addr],
          contactNumbers: [phone],
          firstname: fname,
          lastname: lname
        };
        twishlist = {
            itemsID_in_DB: []
        };
        user = {
            cart: tcart,
            person: tperson,
            wishlist: twishlist
        };
        console.log(user);
        await firebase.auth().createUserWithEmailAndPassword(email, pass).catch(
            (error) =>{
        
                if(error.code === "auth/email-already-in-use")
                return "The provided email is already in use by an existing user.";
                else if(error.code === "auth/invalid-password")
                return "The provided value for the password user property is invalid. It must be a string with at least six characters.";
                else return error.code;
            }
        );
        let cuser = firebase.auth().currentUser;
        console.log(cuser);
        const usersRef = await firebase.firestore().collection("users").doc(cuser.uid);
        usersRef.set(user);
    }

    static HandleSingIn = async (email , pass)=>{

       try { await firebase.auth().signInWithEmailAndPassword(email, pass); }
       catch (err) {
      if(err.code === "auth/invalid-email")
      return "Wrong email or password...";
      else if(err.code === "auth/wrong-password")
      return "Check your password...";
      else if(err.code === "auth/user-not-found")
      return "This email is not registered...";
      else return err.code;
       }
        let user = firebase.auth().currentUser;
        console.log(user)
    }
    static HandleSingOut = async ()=>{
        firebase.auth().signOut().then( () =>{ return "Signed Out Succesfully";}, (error) =>{ return error.code; });
    }
}    

