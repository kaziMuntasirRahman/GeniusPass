
let seatButtons = document.querySelectorAll('.seats button');

// Add click event listener to each button
seatButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    addNewRow(button);
  });
});