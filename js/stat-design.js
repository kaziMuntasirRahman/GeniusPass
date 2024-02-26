const statContainer = document.getElementById('stats-container');
const stat = document.getElementsByClassName('stat');
const statTextContainer = document.querySelectorAll('.stat > div');
const statHeader = document.querySelectorAll('.stat > div > h2');
const statDesc = document.querySelectorAll('.stat > div > p');

// Apply styles to stat elements
stat.forEach(function (n) {
  n.classList.add(
    'bg-lime-400',
    'flex',
    'rounded-3xl',
    'border-b-2',
    'border-lime-600',
    'p-8'
  );
  n.style.width = '308px'; // No need for class for width
});

// Apply styles to statHeader elements
statHeader.forEach(function (n) {
  n.classList.add('text-center', 'text-gray-950', 'text-4xl', 'font-bold');
  n.style.fontFamily = 'Inter'; // No need to add class for font-family
});

// Apply styles to statDesc elements
statDesc.forEach(function (n) {
  n.classList.add('text-gray-950', 'text-opacity-60', 'text-lg', 'font-normal');
  n.style.fontFamily = 'Inter'; // No need to add class for font-family
});

// Apply styles to statTextContainer elements (flex style already applied by parent stat)
statTextContainer.forEach(function (n) {
  // no need to add flex class
});
