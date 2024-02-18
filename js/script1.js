document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.querySelectorAll('.seats button');
  let paragraph = document.querySelectorAll('.seats p');

  buttons.forEach(function(button) {
    button.classList.add('w-28', 'h-14', 'bg-stone-200', 'rounded-xl', 'text-gray-950', 'text-opacity-50', 'text-lg', 'font-medium', 'flex', 'justify-center', 'items-center');
    button.style.fontFamily="Inter";
  });    
  buttons.forEach(function(paragraph) {
    paragraph.classList.add('min-w-3', 'text-gray-950', 'text-opacity-50', 'text-lg', 'font-medium');
    paragraph.style.fontFamily="Inter";
  });    
});




// w-[110px] h-14 bg-stone-200 rounded-xl text-gray-950 text-opacity-50 text-lg font-medium font-['Inter'] flex justify-center items-center

// min-w-3 text-gray-950 text-opacity-50 text-lg font-medium font-['Inter']