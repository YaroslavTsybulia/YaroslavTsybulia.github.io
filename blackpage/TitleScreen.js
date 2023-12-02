const Button = document.querySelector('.btn');
const BigLogo = document.querySelector('.BigLogo');
const Button2 = document.querySelector('.btn-2');

function BigButton() {
    if (Button.style.display !== 'none') {

        // Wait for 300 milliseconds (0.3 seconds) for the fade-out effect
        setTimeout(function() {

            Button.style.display = 'none';

            document.querySelector('.BigLogo').style.display = 'flex';

            document.querySelector('.BigLogo').style.opacity = '1';

            document.querySelector('.btn-2').style.display = 'flex';

            document.querySelector('.btn-2').style.opacity = '1';
            
            
        }, 300);
    }
}

function NextPage(){
    window.location.href = 'http://yaroslavtsybulia.github.io/blackpage/Main.html'; 
  }
