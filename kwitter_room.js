
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDSu6b9zNxYLRMnQEVhjUjoSAaW-Qg-7EU",
      authDomain: "kwitter-e1d75.firebaseapp.com",
      databaseURL: "https://kwitter-e1d75-default-rtdb.firebaseio.com",
      projectId: "kwitter-e1d75",
      storageBucket: "kwitter-e1d75.appspot.com",
      messagingSenderId: "847438208083",
      appId: "1:847438208083:web:f4ae25e4ff037bc208baa6"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var userName = localStorage.getItem("userName")
document.getElementById("welcome").innerHTML = "Welcome "+ userName
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
