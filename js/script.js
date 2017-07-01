
$('document').ready(function(){
        
    var array=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp","RobotCaleb"];
    
    
    for (var i = 0; i <5; i++) {
        
        
        
    (function(i) { 
         var url="https://wind-bow.glitch.me/twitch-api/streams/"+array[i]+"/?callback";
      $.getJSON(url, function (data) {
     
     $("#card_title"+i).html(array[i]);
     //document.getElementById("href"+i).href=data.stream.channel.url;
        
    if(data.stream===null){
         $("#card_status"+i).html("Currently Offline");        
    } 
          else{
              
                $("#card_status"+i).html("Currently Online");
          }
                  
    
          
      });
    })(i);
} 
    for (var i = 0; i <5; i++) {
        
        
        
    (function(i) { 
         var url="https://wind-bow.glitch.me/twitch-api/channels/"+array[i]+"/?callback";
      $.getJSON(url, function (data) {
     
     $("#card_title"+i).html(array[i]);
     document.getElementById("href"+i).href=data.url;

                  
      
          document.getElementById("img"+i).src=data.profile_banner;
          document.getElementById("img"+i).style.height="100px";
          document.getElementById("img"+i).style.width="100%";
          
          
          
      });
    })(i);
}        
});




function show()
{
     var array=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp","RobotCaleb"];
    
    
    for (var i = 0; i <5; i++) {
        
        
        
    (function(i) {
         var url="https://wind-bow.glitch.me/twitch-api/streams/"+array[i]+"/?callback";
      $.getJSON(url, function (data) {
          
          
             $("#card"+i).addClass("show");
            $("#card"+i).removeClass("hide");  
          if(data.stream===null){
         $("#card_status"+i).html("Currently Offline");
        
    } 
          else{
              
                $("#card_status"+i).html("Currently Online");
          }
             
          
      });
    })(i);
}
   
}

function myFunctionOffline() {
    var array=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp","RobotCaleb"];
   
    var a=0;
      
    for (var i = 0; i <5; i++) {
        
        

    (function(i) {
         var url="https://wind-bow.glitch.me/twitch-api/streams/"+array[i]+"/?callback";
    
         
        
      $.getJSON(url, function (data) {
          
         
          
    if(data.stream==null) 
        {
             $("#card"+i).addClass("show");
            $("#card"+i).removeClass("hide");
            
        }
    else{
        
        $("#card"+i).addClass("hide");
            $("#card"+i).removeClass("show");
        
        a++;      
        
    } 
         
       if(a==5)
           {
              alert("All channels are  currently online");
           }
          
          

          
      });
    })(i);
} 
    
   
}

function myFunctionOnline() {
    

    var array=["ESL_SC2", "OgamingSC2","cretetion", "freecodecamp","RobotCaleb"];
    var s=0;
    
    for (var i = 0; i <5; i++) {
        
        
        
    (function(i) {
         var url="https://wind-bow.glitch.me/twitch-api/streams/"+array[i]+"/?callback";
      $.getJSON(url, function (data) {
          
    if(data.stream!==null) 
        {
            $("#card"+i).addClass("show");
              $("#card_status"+i).html(data.stream.channel.status);
             $("#card"+i).removeClass("hide");
        }
          
          else{
               s++;
               $("#card"+i).addClass("hide");
             $("#card"+i).removeClass("show");
              
          }

        if(s==5)
            {
               alert("All channels are currently offline");
            }
          
      });
    })(i);
} 
   
}












