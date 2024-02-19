const coupon1 = document.getElementById('first-coupon').innerText;
const coupon2 = document.getElementById('second-coupon').innerText;


function applyCoupon() {
  const couponValue = document.getElementById('input-coupon').value;
  if (couponValue === coupon1) {
    grandPrice = totalPrice - (totalPrice * 15 / 100);
    grandPriceText.innerText = grandPrice;
    document.getElementById('coupon-level').classList.add('hidden');
    document.getElementById('grand-total-container').classList.add("bg-teal-200", "px-1", "py-2", "rounded-md");
  } else if (couponValue === coupon2) {
    grandPrice = totalPrice - (totalPrice * 20 / 100);
    grandPriceText.innerText = grandPrice;
    document.getElementById('coupon-level').classList.add('hidden');
    document.getElementById('grand-total-container').classList.add("bg-teal-200", "px-1", "py-2", "rounded-md");
  } else {
    alert("Wrong Coupon Code. Please Enter Correctly. Coupon Codes are case sensitive");
  }
}