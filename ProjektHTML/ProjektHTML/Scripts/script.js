function sprawdzGdzieJestesmy() {
    const sekcja1 = document.getElementById('sekcja1');
    const sekcja2 = document.getElementById('sekcja2');
    const sekcja3 = document.getElementById('sekcja3');
    const sekcja4 = document.getElementById('sekcja4');
    const sekcja5 = document.getElementById('sekcja5');

    const dystans2 = sekcja2.getBoundingClientRect().top;
    const dystans3 = sekcja3.getBoundingClientRect().top;
    const dystans4 = sekcja4.getBoundingClientRect().top;
    const dystans5 = sekcja5.getBoundingClientRect().top;

   if (dystans5 < 150) {
        podswietlMenu('Kontakt');
    }else if (dystans4 < 150) {
        podswietlMenu('Projekty');
    }else if (dystans3 < 150) {
        podswietlMenu('Umiejętności');
    }else if (dystans2 < 150) {
        podswietlMenu('O mnie');
    }else {
        podswietlMenu('Start');
    }

}

function podswietlMenu(nazwa) {
    const linki = document.querySelectorAll('.nav-link');
    linki.forEach(link => link.classList.remove('active'));


    linki.forEach(function(link) {
        if (link.textContent.includes(nazwa)) {
            link.classList.add('active');
      }});
}

window.addEventListener('scroll', sprawdzGdzieJestesmy);

sprawdzGdzieJestesmy();

const backToTopButton = document.getElementById('back-to-top');
const heroSection = document.getElementById('sekcja1'); 

window.addEventListener('scroll', strzalka)

function strzalka() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
};

backToTopButton.addEventListener('click', scrollowanie)
function scrollowanie()  {
    window.scrollTo({
        top: 0,
    });
};

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});
