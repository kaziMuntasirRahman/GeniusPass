function navigateToSeat() {
  // Get the element by ID and perform any desired actions
  var seatElement = document.getElementById('ticketing-interface');

  // Example: Scroll to the element
  if (seatElement) {
    seatElement.scrollIntoView({ behavior: 'smooth' });
  }
}