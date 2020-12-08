import firebase from "../../config/firebase";

const firestore = firebase.firestore();

class ItemsFB{
   static page = 0;
    static globalList = [];
    static tempList = [];
   static getItemsFromDB = async (numberofitems) => {
       if(this.page == 0){
           let list = [];
       let snapshot = await firestore.collection("stores/aNDEbzt4SUuy8MTNUYbb/items").limit(numberofitems)
           .get()
           .then((res) => {
               res.forEach((doc) => {
                   list.push(doc.data());
                   //console.log(doc.data());
               });
           })
           .catch((error) => {
               var errorCode = error.code;
               var errorMessage = error.message;
               return errorCode;
           });
           this.globalList = list;
           this.tempList.push(list[0]);
           this.tempList.push(list[1]);
           this.tempList.push(list[2]);
           this.page++;
           return this.tempList;
        }else{
            this.globalList.splice(0 , 3);
            this.tempList.splice(0 , 3);
            this.tempList.push(list[0]);
           this.tempList.push(list[1]);
           this.tempList.push(list[2]);
           this.page++;
           return this.tempList;
        }
           }
}