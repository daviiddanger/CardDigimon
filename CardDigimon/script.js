document.addEventListener('DOMContentLoaded', function() {
    var card = document.getElementById('card');
    var sideA = document.querySelector('.side-a');
    var flipping = false;
  
    card.addEventListener('click', function() {
      if (!flipping) {
        flipping = true;
        card.style.transform = 'rotateY(1440deg)'; // Gira 4 veces
  
        setTimeout(function() {
          card.style.transform = 'rotateY(0deg)';
          flipping = false;
        }, 20000); // Duración de la animación en milisegundos
        setTimeout(function() {
            // Cambia el fondo del lado A al finalizar la animación
            sideA.style.backgroundImage = "url('https://i.pinimg.com/originals/3e/a2/d2/3ea2d296f6af7c1ca7e8e1f10c73a0c8.png')";
            sideA.style.backgroundSize = "cover";
    
            card.style.transform = 'rotateY(180deg)';
            flipping = false;
          }, 2000); // Duración de la animación en milisegundos
      }
    });
  });
  