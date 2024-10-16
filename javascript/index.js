let Current_Slide = -1;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Increment slideIndex and reset it if it exceeds the number of slides
    Current_Slide = (Current_Slide + 1) % slides.length;

    // Show the current slide by adding the 'active' class
    slides[Current_Slide].classList.add('active');
}

// Initial call to display the first slide
showSlides();

// Change slides every 5 seconds (5000ms)
setInterval(showSlides, 8000);

