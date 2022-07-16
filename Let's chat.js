var firebaseConfig = {
    apiKey: "AIzaSyD695KyTNOULL4NbctgZYA04jxuFQRCnlc",
    authDomain: "pro92-e2eaa.firebaseapp.com",
    databaseURL: "https://pro92-e2eaa-default-rtdb.firebaseio.com",
    projectId: "pro92-e2eaa",
    storageBucket: "pro92-e2eaa.appspot.com",
    messagingSenderId: "136107117498",
    appId: "1:136107117498:web:f7020a4ffdbc24f7862b83",
   
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
       
   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");

   function send(){
     msg=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
     });
     document.getElementById("msg").value="";
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
//Start code

//End code
     } });  }); }
getData();
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html"
}