window.onload = function(){
    var div = document.getElementById("bonzi");
// On mousemove use event.clientX and event.clientY to set the location of the div to the location of the cursor:
    window.addEventListener('mousemove', function(event){
       animateDivFollow(div, event)
    }, false);
}

function makeNewPositionFollow(event){
    return [event.clientX -230, event.clientY -100];    
}

function animateDivFollow(myclass, event){
    if(event != null) {
        var newq = makeNewPositionFollow(event);
        $(myclass).animate({ top: newq[1], left: newq[0] }, 30, function(){
          animateDivFollow(myclass);        
        });
    }
};