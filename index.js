var rfid=require('node-rfid');
 
rfid.read(function(err,result){
     if(err) console.log("Sorry, some hardware error occurred"); //some kind of hardware/wire error
     console.log(result); //print rfid tag UID
});