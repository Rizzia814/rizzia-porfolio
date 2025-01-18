const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');
const exitButton = document.querySelector('.exit-button');

// Open the flyout menu
menuToggle.addEventListener('click', () => {
    nav.classList.add('active');
});

// Close the flyout menu
exitButton.addEventListener('click', () => {
    nav.classList.remove('active');
});