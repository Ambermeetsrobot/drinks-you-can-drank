$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age < 21) {
    $('#milk').show();
    var cookie = confirm("Would you like a cookie with your milk?");
    if (cookie) {
      $('#cookie'.show();
    }
  } else if (age >= 21) {
    $('#wine').show();
    var cheese = confirm("Would you like cheese with your wine?");
    if (cheese) {
      $('#cheese').show();
    }
  } else if (age > 50)
    $('#prune-juice').show();
    var fiber = confirm("Would you like some fiber with your prune juice?");
    if (fiber) {
      $('#fiber').show();
  }
});
