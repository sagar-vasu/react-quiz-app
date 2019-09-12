import { firebaseApp, provider } from "./firebase";

// Facebook Login

let LoginUser = () => {
  return new Promise((resolve, reject) => {
    provider.setCustomParameters({
      display: "popup"
    });
    firebaseApp.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        let obj = {
          photo: user.photoURL,
          name: user.displayName
        };
        resolve(obj);
      })
      .catch(function(error) {
        console.log(`error ==>`, error);
        reject(error);
      });
  });
};


// Fetch Api

let fetchApi = () => {
  return new Promise((resolve, reject) => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(data => resolve(data.json()))
      .catch(err => reject(err));
  });
};




let checkQuestions = (count) => {
 
  
  count= count+1
console.log(count)
    return(count)
    

};






// onauth

let authFunc =()=>{

  return new Promise((resolve,reject)=>{
firebaseApp.auth().onAuthStateChanged(function(user) {
    if (user) {
      let userObj={
        name:user.displayName,
        photo:user.photoURL
      }
      
      resolve(userObj)
    
    } else {
     reject(false)
    }

  })
 
});
}



// Logout User

function logout (){
  return new Promise ((resolve,reject)=>{
      firebaseApp.auth().signOut().then((res)=>resolve(res)).catch((err)=>reject(err))
  })

}
// Timer


let timer = (seconds) => {
    return new Promise((resolve,reject)=>{
        var minutes = Math.round((seconds - 30) / 60),
            remainingSeconds = seconds % 60;

        if (remainingSeconds < 1) {
            remainingSeconds = "0" + remainingSeconds;
          }
          console.log(minutes + ":" + remainingSeconds)
          resolve(minutes + ":" + remainingSeconds)
        if (seconds === 0) {
            reject('0:00')
        } else {
            --seconds;
        }
    });

}





 


export { fetchApi, checkQuestions, LoginUser,authFunc,logout ,timer}
