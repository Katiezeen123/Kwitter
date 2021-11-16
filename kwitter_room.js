
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA411OVgWgRWAmVdZbVBF6X_wMF8INTZiY",
      authDomain: "kwitter-77e95.firebaseapp.com",
      projectId: "kwitter-77e95",
      storageBucket: "kwitter-77e95.appspot.com",
      messagingSenderId: "383327261629",
      appId: "1:383327261629:web:73a927030c362264fcf8d4",
      measurementId: "G-HD2JZ62WX9"
    };
    
     firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
     function addRoom()
     {room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name) { console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"; }