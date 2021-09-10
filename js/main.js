const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        navbar.classList.remove('top');
    } else {
        navbar.classList.add('top');
    }
});