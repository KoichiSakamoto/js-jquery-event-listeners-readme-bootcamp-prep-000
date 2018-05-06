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
  $('form').on('keyPress', function(key) {
    alert("hello");
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
});
