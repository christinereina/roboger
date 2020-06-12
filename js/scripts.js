function handleErrors(number) {
  const regex = /^[0-9]*$/
  const isValid = regex.test(number);
  if (!isValid) {
      alert("Sorry I can only talk in numbers. Try again.");
  }
  return number;
}

// user interface logic below

$(document).ready(function() {
  $("#form").submit(function(event) {
      event.preventDefault();
    const userInput = $("input#user").val();
    console.log(userInput);
    const noErrors = handleErrors(userInput);  
    console.log(noErrors);

  });
});
