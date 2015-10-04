$(function(){
  //load home page when page loads
  $("#reponse").load("/home.html");
  $("#home").click(function(){
    $("#response").load("/home.html");
  });
  $("#about").click(function(){
    $("#response").load("/about.html"); 
  });
  $("#development").click(function(){
    $("#response").load("/development.html");
  });
});