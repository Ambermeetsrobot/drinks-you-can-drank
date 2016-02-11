$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));
//show milk and cookies for under 21
  if (age < 21) {
    $('#milk').show();

    var cookieresponse = confirm("Would you like something to eat with your milk?");

    if (cookieresponse) {
      $('#cookie').show();
  }
}
//show wine and cheese for 21-49 y/os
if ((age > 20) && (age < 50)) {
  $('#wine').show();

  var cheese = confirm("Would you like something to eat with your wine?");

  if (cheese) {
    $('#cheese').show();
  }
}
//show prune-juice and fiber for 50+
if (age >= 50) {
  $('#prune-juice').show();

  var fiber = confirm("Would you like something to eat with your prune juice?");

  if (fiber) {
    $('#fiber').show();
  }
}

});
