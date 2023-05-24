function launchConfetti() {
    var container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    
    for (var i = 0; i < 100; i++) {
      createConfetti(container);
    }
  }
  
  function createConfetti(container) {
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00']; // Colores aleatorios para el confeti
    var confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    var position = Math.random() * 100;
    var rotation = Math.random() * 360;
    var color = colors[Math.floor(Math.random() * colors.length)];
  
    confetti.style.left = position + 'vw';
    confetti.style.transform = 'rotate(' + rotation + 'deg)';
    confetti.style.background = color;
    
    container.appendChild(confetti);
  
    // Elimina el confeti después de un tiempo
    setTimeout(function() {
      confetti.remove();
    }, 3000);
  }
  
  var enviarBtn = document.querySelector('.valoraciones-boton');
  enviarBtn.addEventListener('click', function() {
    launchConfetti();
  });
  