const numberOfBookedSeatText = document.getElementById('booked-seat-number');
let numberOfBookedSeat = parseInt(numberOfBookedSeatText.innerText);
const totalPriceText = document.getElementById('total-price');
let totalPrice = parseInt(totalPriceText.innerText);
const grandPriceText = document.getElementById('grand-total');
let grandPrice = parseInt(grandPriceText.innerText);
const remainingSeatsText = document.getElementById('remaining-seat');
let remainingSeats = parseInt(remainingSeatsText.innerText);
const applyButton = document.getElementById('apply-btn');
const bookedCartDiv = document.getElementById('price-container');

function addNewRow(button) {
  if (button.getAttribute('data-clicked') === 'true') {
    alert('This seat has already been booked.');
    return;
  }

  if (numberOfBookedSeat === 4) {
    alert('You cannot buy more than 4 tickets at a same time.');
    return;
  }

  button.classList.add('bg-green-700', 'hover:bg-green-400', 'text-white', 'font-medium');


  const newRow = [button.innerText, 'Economy', 550];
  for (let i = 0; i < 3; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = newRow[i];
    bookedCartDiv.appendChild(paragraph);
    paragraph.classList.add('text-gray-950', 'text-opacity-60', 'font-normal');
    if (i === 1) {
      paragraph.classList.add('justify-self-center')
    }
    else if (i === 2) {
      paragraph.classList.add('justify-self-end')
    }
  }

  button.setAttribute('data-clicked', 'true');

  remainingSeats--;
  remainingSeatsText.innerText = remainingSeats;
  numberOfBookedSeat++;
  numberOfBookedSeatText.innerText = numberOfBookedSeat;
  totalPrice = numberOfBookedSeat * 550;
  totalPriceText.innerText = totalPrice;
  grandPriceText.innerText = totalPrice;

  document.getElementById('nxt-btn').classList.remove('pointer-events-none', 'opacity-50');
  
  if (numberOfBookedSeat === 4) {
    applyButton.classList.remove('pointer-events-none', 'opacity-40');
  }
}