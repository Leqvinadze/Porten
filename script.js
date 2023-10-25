const burgerMenu = document.querySelector('.burger_menu');
const navItems = document.querySelector('.nav_items');
const navIcons = document.querySelectorAll('.nav_icons');
const body = document.body;

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  
  navItems.classList.toggle('active');

  navIcons.forEach(icon => {
    icon.classList.toggle('active');
  });

  body.classList.toggle('no_scroll');
});

document.querySelector('.burger_menu').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});