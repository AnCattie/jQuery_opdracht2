// Write your solution here

$("#green").hover(function(){
    $("#text").css("color","green")
});

$("#red").hover(function(){
    $("#text").css("color","red")
});

$("#blue").hover(function(){
    $("#text").css("color","blue")
});

$("#green, #red, #blue").mouseleave(function(){
  $("#text").css("color","black")      
});