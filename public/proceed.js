$(document).ready(function(){
    var login=$("#proceed");


    login.click(function(){
        console.log("CLICK1 detected");

        $.ajax({
            method :'post',
            url :'/login',
            success: function(data)
            {
                window.location = '/login';
            }
        })
    })
})