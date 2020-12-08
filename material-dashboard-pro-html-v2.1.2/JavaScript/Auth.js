

class Auth{
    static getAuthStatus = () => {
        if(firebase.auth().currentUser)
         return 1;
        else 
         return 0;
    }

}

