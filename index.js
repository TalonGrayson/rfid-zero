var rfid=require('node-rfid');
 
rfid.readintime(5000, function(err,result){
    if(err) console.error("Sorry, some hardware error occurred: %o", err); //some kind of hardware/wire error
    
    if(result=="timeout"){ 
        console.log("Sorry, You timed out");  //check if time exceeded the time you passed as argument and print timeout message
    }else{
        console.log("Result: %o", result); //print rfid tag UID
    }
});