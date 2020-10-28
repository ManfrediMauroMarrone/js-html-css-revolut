$(document).ready(function(){
  // intercetto il click sulle voci di menu

  var menuFunction = $('.right-menu li:first-of-type a')

  menuFunction.click(function(){
    $('.drop-function').toggle()
  });

});
