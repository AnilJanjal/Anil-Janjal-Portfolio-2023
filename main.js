
let navLinks = document.querySelector('.nav-links');
let toggleMenu = document.querySelector('.toggle-nav');
let closeMenu = document.querySelector('.close-nav');

toggleMenu.addEventListener('click', ()=> {
   navLinks.classList.add('active');
})

closeMenu.addEventListener('click', ()=> {
    navLinks.classList.remove('active');
})

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
