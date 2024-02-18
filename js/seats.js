const priceContainer = document.getElementById('price-container')
const buttons = document.querySelectorAll('.seats button');
const paragraph = document.querySelectorAll('.seats p');


document.addEventListener("DOMContentLoaded", function() {
  buttons.forEach(function(button) {
    button.classList.add('w-28', 'h-14', 'bg-stone-200', 'hover:bg-white', 'hover:font-bold', 'hover:border', 'hover:border-black',  'rounded-xl', 'text-gray-950', 'text-opacity-50', 'text-lg', 'font-medium', 'flex', 'justify-center', 'items-center');
    button.style.fontFamily="Inter";
  });

  paragraph.forEach(function(p) {
    p.classList.add('min-w-3', 'text-gray-950', 'text-opacity-50', 'text-lg', 'font-medium');
    p.style.fontFamily="Inter";
  });    
});