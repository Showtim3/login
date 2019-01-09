$(document).ready(function(){
    var button=$('#signInButton');
    var pd=$('#password');
    var cpd=$('#cPassword');


    $('#password, #cPassword').on('keyup', function () {
        if ($('#password').val() == $('#cPassword').val()) {
          $('#message').html('Matching').css('color', 'green');
        } else 
          $('#message').html('Not Matching').css('color', 'red');
      });

    button.click(function(){
        console.log('Click detected');
        $.ajax({
            method:'post',
            url:'/login',
            success : function (data) {
                alert("You will now be redirected.");
                     window.location = "/login";
                 
             },
            
        })

    })
}) 