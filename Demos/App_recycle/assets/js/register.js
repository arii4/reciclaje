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

// FUNCIO CHECK ERRORS EN LOGIN
$('#register-btn').on('click', function(){
  if($('#pass1').val().length == 0 || $('#username').val().length == 0 || $('#email').val().length == 0 || $('#surname').val().length == 0){
    showAlert('Error', 'User i/o password i/o email buits', 'error');
  }
  else if( validateEmail($('#email').val()) == false ){
    showAlert('Error', 'Email no valid', 'error');
  }
  else if($('#pass1').val().length < 8){
    showAlert('Error', 'La password ha de ser de mínim 8 dígits', 'error');
  }
  else if( validatePassword($('#pass1').val()) == false ){
    showAlert('Error', 'La password ha de contenir nombres i lletres', 'error');
  }
  else if( $('#pass1').val() != $('#pass2').val() ){
    showAlert('Error', 'Ops! Les passwords no són iguals', 'error');
  }
  else{
    window.location.replace('index.html');
  }
});
