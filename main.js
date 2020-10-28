$(document).ready(function(){
  // intercetto il click sulle voci di menu

  var menuFunction = $('.right-menu li:first-of-type a')

  menuFunction.click(function(){
    $('.drop-function').toggle()
  });

  var menuSubs = $('.right-menu li:nth-child(2) a')

  menuSubs.click(function(){
    $('.drop-subs').toggle()
  });

  var menuWho = $('.right-menu li:nth-child(3) a')

  menuWho.click(function(){
    $('.drop-who').toggle()
  });

  var menuHelp = $('.right-menu li:nth-child(4) a')

  menuHelp.click(function(){
    $('.drop-help').toggle()
  });


});
