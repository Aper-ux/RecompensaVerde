window.onload = function() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        console.log('Usuario activo:', storedUsername);
        document.getElementById('user').innerHTML = storedUsername;
    } else {
        console.log('No hay usuario activo');
    }
    
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");
  
        header.addEventListener("click", function() {
            accordionItems.forEach(innerItem => {
                if (innerItem !== item) {
                    innerItem.classList.remove("active");
                }
            });
  
            item.classList.toggle("active");
        });
    }); 
  };
  