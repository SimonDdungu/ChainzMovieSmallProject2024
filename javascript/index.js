let Current_Slide = -1;
const slides = document.querySelectorAll('.slide');
const nav = document.querySelector('.nav_menu');

function showSlides() {

    slides.forEach(slide => slide.classList.remove('active'));

    slides[Current_Slide].classList.add('active');
}

function Next_Slide(){
     
    Current_Slide = (Current_Slide + 1) % slides.length;
    showSlides();
}

function Previous_Slide(){
    
    Current_Slide = (Current_Slide - 1 + slides.length) % slides.length;
    showSlides();
}


setInterval(Next_Slide, 8000);

//Mobile Nav Bar Menu
function NAV(){
        nav.classList.toggle('active');
}


