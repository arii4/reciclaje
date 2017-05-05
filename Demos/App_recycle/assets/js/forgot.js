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

function showSend(){
  swal({
    title:"T'hem enviat un correu!",
    text:"Obre'l i segueix les instruccions",
    type:"success",
    timer: 3000
  })
  .then(
    function () {},
    // handling the promise rejection
    function (dismiss) {
      if (dismiss === 'timer') {
        window.location.replace('index.html');
      }
    }
  )
}

// FUNCIO CHECK ERRORS EN LOGIN
$('#send-pass').on('click', function(){
  if( validateEmail($('#email').val()) == false ){
    showAlert('Error', 'Email no valid', 'error');
  }
  else{
    showSend();
  }
});
