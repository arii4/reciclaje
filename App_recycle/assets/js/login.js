// FUNCIO VALIDACIO EMAIL
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// FUNCIO VALIDACIO PASSWORD
function validatePassword(pass) {
    var re = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    return re.test(pass);
}

// FUNCIO ENSENYA ERROR EN POPUP
function showAlert(title, subtitle, type){
  var iserror = "error";
  if(type == 'success') iserror = 'success';
  swal(
    title,
    subtitle,
    type
  )
}

// FUNCIO CHECK EVENT DEL BOTO LOGIN
$('#login-btn').on('change', function(){
  $('#login-btn').removeClass('error');
});

// FUNCIO CHECK ERRORS EN LOGIN
$('#login-btn').on('click', function(){
  if($('#password').val().length == 0 || $('#username').val().length == 0){
    showAlert('Error', 'User i/o password sense valor', 'error');
  }
  else if( validateEmail($('#username').val()) == false ){
    showAlert('Error', 'Email no valid', 'error');
  }
  else if($('#password').val().length < 8){
    showAlert('Error', 'Password massa curta', 'error');
  }
  else if( validatePassword($('#password').val()) == false ){
    showAlert('Error', 'La password ha de contenir nombres i lletres', 'error');
  }
  else{
    window.location.replace('index.html');
  }
});
