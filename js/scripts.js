// Business Logic

function totalValue (num1, num2, num3, num4, num5) {
  return parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5)
}

// User Interface Logic
$(document).ready(function(){
  $("form#questions").submit(function(event){
    event.preventDefault();

    let os = $("input[name='os']:checked").val();

    let end = $("input[name='end']:checked").val();

    let dev = $("input[name='dev']:checked").val();

    let experience = $("input[name='experience']:checked").val();

    let color = $("input[name='color']:checked").val()

    let total = totalValue (os, end, dev, experience, color)

    
  });
});