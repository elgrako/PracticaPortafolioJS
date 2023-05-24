// Función para el desplazamiento suave hacia arriba de la página
function scrollToTop() {
  var targetPosition = 0; // Posición superior de la página
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var duration = 1000; // Duración en milisegundos de la animación de desplazamiento

  function animation(currentTime) {
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Función de aceleración
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  var startTime = performance.now();
  requestAnimationFrame(animation);
}
