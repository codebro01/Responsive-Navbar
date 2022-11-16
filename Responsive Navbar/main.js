let bar = document.querySelector('.bars'),
navItem = document.querySelector('.nav-items');

bar.addEventListener('click', () => {
    navItem.classList.toggle('active');
})