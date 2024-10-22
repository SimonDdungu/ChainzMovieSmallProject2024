let Current_Slide = -1;
let slideInterval;
const slides = document.querySelectorAll('.slide');
const nav = document.querySelector('.nav_menu');

function showSlides() {

    slides.forEach(slide => slide.classList.remove('active'));

    slides[Current_Slide].classList.add('active');
}

function Next_Slide(){
     
    Current_Slide = (Current_Slide + 1) % slides.length;
    showSlides();
    resetTimer();

}

function Previous_Slide(){
    
    Current_Slide = (Current_Slide - 1 + slides.length) % slides.length;
    showSlides();
    resetTimer();

}


//Fix issue, slide timer can now reset for each slide
function startTimer() {
    slideInterval = setInterval(Next_Slide, 8000); 
}

function resetTimer() {
    clearInterval(slideInterval);  // Clear the previous interval
    startTimer();  // Start a new one
}



startTimer();




//Mobile Nav Bar Menu
function NAV(){
        nav.classList.toggle('active');
}


