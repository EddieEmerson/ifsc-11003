$(document).ready(function(){
    $('.fade').slick({
        dots: true,            // Navigation dots
        infinite: true,        // Loop back to start
        speed: 500,            // Animation speed
        fade: true,            // Fade effect
        cssEase: 'linear',     // Smooth transition
        autoplay: true,        // Auto-scroll
        autoplaySpeed: 2000    // Change every 2 seconds
    });
});