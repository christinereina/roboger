

// user interface logic below

$(document).ready(function() {
  $("#form").submit(function(event) {
      event.preventDefault();
    const userInput = parseInt($("input#user").val());
    console.log(userInput);

  });
});
