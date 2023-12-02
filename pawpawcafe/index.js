// Add this JavaScript to make the image appear smoothly
window.addEventListener('load', function() 
{
	setTimeout( function() 
	{
        const smoothImage = document.getElementById('smooth-image');
        smoothImage.style.opacity = '1'; // Change opacity to 1 to make it visible smoothly
    }, 500); // Adjust the delay in milliseconds (1000ms = 1 seconds)
});
