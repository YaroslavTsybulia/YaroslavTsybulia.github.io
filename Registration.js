function goToPage(){
    window.location.href = 'http://pawpawcafe/Main%20Page.php';
}

function openRegister() {
    // Fade out the first container
    document.querySelector('.container').style.opacity = 0;

    // Wait for 300 milliseconds (0.3 seconds) for the fade out effect
    setTimeout(function() {
        // Hide the first container
        document.querySelector('.container').style.display = 'none';

        // Fade in the second container
        const hiddenContainer = document.querySelector('.hidden-container');
        setTimeout(function() {
            hiddenContainer.style.opacity = 1; // Fade in effect
        }, 10); // Adding a small delay for smooth transition
    }, 300);
}
