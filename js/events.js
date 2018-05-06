//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty");
  });
}

function pressIt() {
  $('form').on('keydown', function(key) {
    alert(`${key.which}`);
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
});
