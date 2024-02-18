const numberOfSeatText = document.getElementById('booked-seat-number');
let numberOfSeat = parseInt(numberOfSeatText.innerText);
const totalPriceText = document.getElementById('total-price');
let totalPrice = parseInt(totalPriceText.innerText);
const grandPriceText = document.getElementById('grand-total');
let grandPrice = parseInt(grandPriceText.innerText);

function addNewRow(button) {
  if (numberOfSeat === 4) {
    alert('You can maximum buy 4 tickets at a same time.');
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
  numberOfSeat++;
  numberOfSeatText.innerText = numberOfSeat;
  totalPrice += 550;
  totalPriceText.innerText = totalPrice;
  grandPrice = totalPrice;
  grandPriceText.innerText = totalPrice;

}