const couponValue = document.getElementById('input-coupon').value;
const coupon1 = document.getElementById('first-coupon').innerText;
const coupon2 = document.getElementById('second-coupon').innerText;
const grandPriceText = document.getElementById('grand-total');
let grandPrice = parseInt(grandPriceText.innerText);

function couponApply() {
  if (couponValue === coupon1) {
    grandPriceText.textContent = (grandPrice - (grandPrice * 15 / 100)).toString();
  } else if (couponValue === coupon2) {
    grandPriceText.textContent = (grandPrice - (grandPrice * 20 / 100)).toString();
  } else {
    alert("Wrong Coupon Code. Please Enter Correctly. Coupon Codes are case sensitive");
  }
}
