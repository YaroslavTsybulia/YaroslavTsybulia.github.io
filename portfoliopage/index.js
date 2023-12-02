const containerMyProjects = document.querySelector('.containerMyProjects');
const containerAboutMe = document.querySelector('.containerAboutMe');
const containerProject1 = document.querySelector('.containerProject1');
const containerProject2 = document.querySelector('.containerProject2');
const containerProject3 = document.querySelector('.containerProject3');
const containerProject4 = document.querySelector('.containerProject4');

const header = document.querySelector('header');
const footer = document.querySelector('footer');

const text = document.querySelector('.header-text');

containerAboutMe.style.display = 'none';
containerProject1.style.display = 'none';
containerProject2.style.display = 'none';
containerProject3.style.display = 'none';
containerProject4.style.display = 'none';


function openMyProjects() {
    if (containerMyProjects.style.display === 'none'){

        setTimeout(function() {
            // Hide the pages
            containerAboutMe.style.display = 'none';
            containerProject1.style.display = 'none';
            containerProject2.style.display = 'none';
            containerProject3.style.display = 'none';
            containerProject4.style.display = 'none';

            // Show the "My Projects" page
            containerMyProjects.style.display = 'flex';

        }, 100);
    }
}

function openAboutMe() {
    if (containerMyProjects.style.display !== 'none'){

        setTimeout(function() {
            
            containerMyProjects.style.display = 'none';

            containerAboutMe.style.display = 'flex';
            
        }, 100);
    }
}

function openProject1() {
    if (containerMyProjects.style.display !== 'none'){

        setTimeout(function() {
            
            containerMyProjects.style.display = 'none';

            containerProject1.style.display = 'flex';
            
        }, 100);
    }
}

function openSite() {
    if (containerProject1.style.display === 'flex'){
        window.location.href = 'https://yaroslavtsybulia.github.io';           
    } else if (containerProject2.style.display === 'flex'){
        window.location.href = 'http://BlackPage/TitleScreen.html';   
    } else if (containerProject3.style.display === 'flex'){
        window.location.href = 'http://portfoliopage/#project3';   
    } else if (containerProject4.style.display === 'flex'){
        window.location.href = 'http://portfoliopage/#project4';   
    }
}

function openProject2() {
    if (containerMyProjects.style.display !== 'none'){

        setTimeout(function() {
            
            containerMyProjects.style.display = 'none';

            containerProject2.style.display = 'flex';
            
        }, 100);
    }
}


function toggleColors(){
    colorOff();
    colorOn();
}

function colorOff() {
    // Check if the background image is not 'none'
    if (header.style.backgroundImage !== 'none') {

        setTimeout(function () {
            // Set the background image to 'none' for header
            header.style.backgroundImage = 'none';
            header.style.borderBottom = '1vh solid rgb(35 35 35)';
            text.textContent = 'Colors Off';

            document.querySelector('footer').style.backgroundImage ='none';
            document.querySelector('footer').style.borderTop ='1vh solid rgb(35 35 35)';
        }, 100);

        
    }
}

function colorOn() {
    // Check if the background image is 'none'
    if (header.style.backgroundImage === 'none') {
        
        setTimeout(function () {
            // Set the background image to your desired gradient for header
            header.style.backgroundImage = 'linear-gradient(0deg, rgb(0 0 0 / 0%), rgb(50 30 50 / 50%), rgb(80 40 80 / 50%))';
            header.style.borderBottom = '1vh solid rgb(70 40 70 / 50%)';
            text.textContent = 'Colors On';

            document.querySelector('footer').style.backgroundImage ='linear-gradient(180deg, rgb(0 0 0 / 0%), rgb(50 30 50 / 50%), rgb(80 40 80 / 50%))';
            document.querySelector('footer').style.borderTop ='1vh solid rgb(70 40 70 / 50%)';
        }, 100);
    }
}
