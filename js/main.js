const navbar = document.querySelector('.menu-container');
const hamburger = document.querySelector('#menu-btn');
const icon = document.querySelector('i');
const menuLinks = document.querySelectorAll('.menu-link');

const toggleHamburger = () =>{

    navbar.classList.toggle('showNav');
    icon.classList.toggle('open');

    switch (true) {
        case icon.classList.contains('open'):
            icon.innerHTML = 'highlight_off';
            break;
        default:
            icon.innerHTML = 'menu';
        
    }
}

hamburger.addEventListener('click', toggleHamburger);

menuLinks.forEach(link => link.addEventListener('click', toggleHamburger));

