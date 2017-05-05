// FUNCIO VALIDACIO EMAIL
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// FUNCIO VALIDACIO PASSWORD
function validatePassword(pass) {
    var re = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    return re.test(pass) && (pass.length >= 8);
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

function showSend(){
  swal({
    title:"FET!",
    text:"La teva password ha estat canviada amb èxit!",
    type:"success",
    timer: 3000
  })
  .then(
    function () {},
    // handling the promise rejection
    function (dismiss) {
      if (dismiss === 'timer') {
      }
    }
  )
}

// FUNCIO CHECK ERRORS EN LOGIN
$('#send-pass').on('click', function(){
  if( $('#pass1').val().length <= 0 ){
    showAlert('Error', 'EI! No has escrit cap password!', 'error');
  }
  else if( validatePassword($('#pass1').val() ) == false){
    showAlert('Error', 'La password ha de tenir números i lletres!', 'error');
  }
  else if( $('#pass1').val().length < 8){
    showAlert('Error', 'La password ha de tenir mínim 8 dígits! ', 'error');
  }
  else if( $('#pass1').val() != $('#pass2').val() ){
    showAlert('Error', 'Les passwords no són iguals!', 'error');
  }
  else{
    showSend();
  }
});
