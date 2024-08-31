var rfid=require('node-rfid');
 
rfid.read(function(err,result){
     if(err) console.error("Sorry, some hardware error occurred: %o", err); //some kind of hardware/wire error
     console.log("Result: %o", result); //print rfid tag UID
});