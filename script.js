 // JavaScript for Sliding Mobile Menu
 const menuBtn = document.getElementById('menu-btn');
 const mobileMenu = document.getElementById('mobile-menu');
 const closeBtn = document.getElementById('close-btn');

 // Open menu
 menuBtn.addEventListener('click', () => {
   mobileMenu.classList.remove('-translate-x-full');
 });

 // Close menu
 closeBtn.addEventListener('click', () => {
   mobileMenu.classList.add('-translate-x-full');
 });