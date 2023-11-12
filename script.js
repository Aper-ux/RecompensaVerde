var m1Element = document.getElementById('m1');
var m2Element = document.getElementById('m2');
var m3Element = document.getElementById('m3');
var m4Element = document.getElementById('m4');
var m5Element = document.getElementById('m5');

m1Element.onclick = function() {
    document.getElementById('modal1').style.display = 'block';
};

m2Element.onclick = function() {
    document.getElementById('modal2').style.display = 'block';
}

m3Element.onclick = function() {
    document.getElementById('modal3').style.display = 'block';
}

m4Element.onclick = function() {
    document.getElementById('modal4').style.display = 'block';
}

m5Element.onclick = function() {
    document.getElementById('modal5').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal1').style.display = 'none';
    document.getElementById('modal2').style.display = 'none';
    document.getElementById('modal3').style.display = 'none';
    document.getElementById('modal4').style.display = 'none';
    document.getElementById('modal5').style.display = 'none';
}

window.onload = function() {
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





