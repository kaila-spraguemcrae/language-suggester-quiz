// Business Logic

function totalValue (num1, num2, num3, num4, num5) {
  return parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5)
}



// User Interface Logic
$(document).ready(function(){
  $("#next").click(function(){
    $("#question1").show();
    $("#userName").hide();
  });

  $("#previous1").click(function(){
    $("#userName").show();
    $("#question1").hide();
  });

  $("#next1").click(function(){
    $("#question2").show();
    $("#question1").hide();
  });

  $("#previous2").click(function(){
    $("#question1").show();
    $("#question2").hide();
  });

  $("#next2").click(function(){
    $("#question3").show();
    $("#question2").hide();
  });

  $("#previous3").click(function(){
    $("#question2").show();
    $("#question3").hide();
  });

  $("#next3").click(function(){
    $("#question4").show();
    $("#question3").hide();
  });

  $("#previous4").click(function(){
    $("#question3").show();
    $("#question4").hide();
  });

  $("#next4").click(function(){
    $("#question5").show();
    $("#question4").hide();
  });

  $("#previous5").click(function(){
    $("#question4").show();
    $("#question5").hide();
  });

    $("#next5").click(function(){
      $("#results").show();
      $("#question5").hide();
    });

    $("#goBack").click(function(){
      $("#question5").show();
      $("#results").hide();
      $(".result1").hide();
      $(".result2").hide();
      $(".result3").hide();  
    });

  $("form#questions").submit(function(event){
    event.preventDefault();

    let nameInput = $("input#name").val();

    let os = $("input[name='os']:checked").val();

    let end = $("input[name='end']:checked").val();

    let dev = $("input[name='dev']:checked").val();

    let experience = $("input[name='experience']:checked").val();

    let color = $("input[name='color']:checked").val()

    let total = totalValue (os, end, dev, experience, color)

    $(".name").text(nameInput);

    $(".result1").hide();
    $(".result2").hide();
    $(".result3").hide();

    if (total >= 12){
      $(".result3").show();
    } else if (total >= 9) {
      $(".result2").show();
    } else if (total >= 5){
      $(".result1").show();
    } else (alert("Respond to ALL questions"));

  });
});