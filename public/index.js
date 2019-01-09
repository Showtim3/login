$(document).ready(function(){

var logout=$('.logout');

logout.click(function()
{
    console.log('click detected');
    alert("Logging out");
    $.ajax({
        method:'get',
        url:'/',
        success : function (data) {
            
                 window.location = "/";
             
         },
        
    })
})


})