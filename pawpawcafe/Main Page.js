// Add this JavaScript to toggle the side panel
const togglePanelButton = document.getElementById('toggle-panel');
const closePanelButton = document.getElementById('close-panel');
const sidePanel = document.querySelector('.side-panel');

togglePanelButton.addEventListener('click', () => {
    // Toggle the "open" class on the side panel
    sidePanel.classList.toggle('open');
});

closePanelButton.addEventListener('click', () => {
    // Close the side panel
    sidePanel.classList.remove('open');
});
