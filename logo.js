document.addEventListener("DOMContentLoaded", function() {
    const logoGroup = document.querySelector('#logos-857 .cs-logo-group');
    
    // Ensure content is fully loaded before calculating
    logoGroup.addEventListener('load', function() {
        const contentWidth = logoGroup.scrollWidth;
        const scrollSpeed = 50; // Desired speed in pixels per second
        const animationDuration = contentWidth / scrollSpeed; // Calculate duration
        
        // Apply the calculated duration to the animation
        logoGroup.style.animationDuration = `${animationDuration}s`;
    });
});
