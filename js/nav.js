document.addEventListener("DOMContentLoaded", function() {
  let navLinks = document.querySelectorAll('.navbar-center>ul>li>a');
  let dropdown = document.querySelectorAll('.dropdown>ul>li>a')

  navLinks.forEach(function(n) {
    n.classList.add('text-center', 'text-gray-950', 'text-opacity-70', 'text-lg', 'font-medium')
    n.style.fontFamily='Raleway';
  });
  dropdown.forEach(function(d) {
    d.classList.add('text-center', 'text-gray-950', 'text-opacity-70', 'text-lg', 'font-medium')
    d.style.fontFamily='Raleway';
  });
    
});