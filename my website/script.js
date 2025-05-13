var typed = new Typed(".typewriter-text", {
    strings: [" ", "Web Developer", "Freelancer", "Cricketer"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let section = document.querySelectorAll('section');  // Fixed typo
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    section.forEach(sec => {  // Fixed typo
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;  // Fixed incorrect reference
        let height = sec.offsetHeight;     // Fixed incorrect reference
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
