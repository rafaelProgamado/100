const firebaseConfig = {
    apiKey: "AIzaSyCgRnbmUKPG84OFSRrIlHnoWHcCnQNS9Ek",
    authDomain: "teste93-97.firebaseapp.com",
    databaseURL: "https://teste93-97-default-rtdb.firebaseio.com",
    projectId: "teste93-97",
    storageBucket: "teste93-97.appspot.com",
    messagingSenderId: "199592495195",
    appId: "1:199592495195:web:6f8e0da06238ada2d0d77e"
  };
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
  
    window.location = "chat_room.html";

}


