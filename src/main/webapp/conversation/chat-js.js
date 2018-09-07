
    

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
  
  upload(file);
  
  
}

//var usernameinput = document.getElementById("users").value;

function upload(){
   
  
   
   var img = new Image(img = document.getElementById("finput"));
   

   //img.createElement("IMG");
   img.width="150";
   img.height="150";
   var ul = document.getElementById("messages");
    var li = document.createElement("li"); 
   // li.img.createElement("IMG");
    li.appendChild(img);
    ul.appendChild(li);
   
  
}


function postPicture(){
 
    
    
    
     
  /* 
    var picInput = document.getElementById('get_file').createElement("IMG");
    console.log(picInput);
    var ul = document.getElementById("messages");
    var li = document.createElement("li"); 
    li.appendChild(document.createTextNode(picInput));
    ul.appendChild(li);
   
    
    */
}





function sendMessage() {

   
    
    
    
    
    
  /*
    var x = document.getElementById("textinput");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
 */
//Get chat form input, append to list object and print
    var input = document.getElementById('textinput').value;
    var ul = document.getElementById("messages");
    var li = document.createElement("li"); 
    var img = new Image();
    img.src = "avatar.png";
    img.width = 20;
    li.appendChild(img);
    li.appendChild(document.createTextNode(uid + input));
    ul.appendChild(li);
    
  //clear chat form  
    document.getElementById("textinput").value = "";
    
    
    
    
    
    //autoscroll to bottom of chat
    chatWindow = document.getElementById('messages'); 
    var xH = chatWindow.scrollHeight; 
    chatWindow.scrollTo(0, xH);
    
    
    //load avatar pic

  
 

return true;
    
    
   
};
//Pressing enter to post
  document.getElementById("textinput").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('sendbtn').click();
    }
});   

   


class User {
    constructor(uid,name) {
        this.uid = uid;
        this.name = name;
    }
}

class Message {
    constructor(sender, text, date, img = null) {
        this.sender = sender;
        this.text = text;
        this.date = date;
        this.img = img;
    }
}

class Conversation {
    constructor(from, to = new Set(), messages = []) {
        this.from = from;
        this.to = to;
        this.messages = messages;
    }
}









   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
/***
 * Setup application
 */
