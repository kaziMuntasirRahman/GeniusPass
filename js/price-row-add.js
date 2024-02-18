const numberOfSeatText = document.getElementById('booked-seat-number');
let numberOfSeat = parseInt(numberOfSeatText.innerText);
const totalPriceText = document.getElementById('total-price');
let totalPrice = parseInt(totalPriceText.innerText);
const grandPriceText = document.getElementById('grand-total');
let grandPrice = parseInt(grandPriceText.innerText);
const remainingSeatsText = document.getElementById('remaining-seat');
let remainingSeats = parseInt(remainingSeatsText.innerText);

function addNewRow(button) {
  if (button.getAttribute('data-clicked') === 'true') {
    alert('This seat has already been booked.');
    return;
  }

  if (numberOfSeat === 4) {
    alert('You cannot  buy more than 4 tickets at a same time.');
    return;
  }

  button.classList.add('bg-lime-500', 'hover:bg-lime-700', 'text-white', 'font-medium');

  const buttonId = button.id.substring(5, 7);
  const newRow = [buttonId, 'Economy', 550]
  const bookedCartDiv = document.getElementById('price-container');

  for (let i = 0; i < 3; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = newRow[i];
    bookedCartDiv.appendChild(paragraph);
    paragraph.classList.add('text-gray-950', 'text-opacity-60', 'font-normal')
  }

  button.setAttribute('data-clicked', 'true');

  remainingSeats--;
  remainingSeatsText.innerText = remainingSeats;
  numberOfSeat++;
  numberOfSeatText.innerText = numberOfSeat;
  totalPrice += 550;
  totalPriceText.innerText = totalPrice;
  grandPrice = totalPrice;
  grandPriceText.innerText = totalPrice;

}