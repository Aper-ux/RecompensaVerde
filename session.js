window.onload = function() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        console.log('Usuario activo:', storedUsername);
        document.getElementById('user').innerHTML = storedUsername;
    } else {
        console.log('No hay usuario activo');
    }
  };
  