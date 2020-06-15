//business logic 

function handleErrors(number) {
  const regex = /^[0-9]*$/
  const isValid = regex.test(number);
  if (!isValid) {
      alert("Mr. Roboger says, 'Sorry, I can only talk in numbers. Please, try again.'");
  }
  return number;
}

function robot(userInput) {

  const messages = ["Beep", "Boop", "Wont you be my neighbor"];
  const list = [];
  
  for (var i = 1; i <= userInput; i++) {
    let numbers = i.toString().split("");
    if (numbers.includes("1")) {
      list.push(messages[0]);
    } else if (numbers.includes("2")) {
      list.push(messages[1]);
    } else if (numbers.includes("3")) {
      list.push(messages[2]);
    } else {
      list.push(i.toString());
    }
  }
  return list.join(", ");
}

// user interface logic 

$(document).ready(function() {
  $("#form").submit(function(event) {
      event.preventDefault();
    const userInput = $("input#user").val();
    const noErrors = handleErrors(userInput);  
    const robotOutput = robot(userInput);
    console.log(robotOutput);
    $("#results").text(robotOutput);
    $(".rogers").show();
    $(".user").hide();
  });
$('#button').click(function(){
  location.reload();
  });
});
