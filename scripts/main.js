window.onload = function() {
  // TOGGLE SIDEBAR
  document.getElementById('menu').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.className === 'menu_active') {
      sidebar.className = '';
    } else {
      sidebar.className = 'menu_active';
    }
  });
  // GO TOP
  document.getElementById('go_top').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  // SLIDER
  let slideIndex = 1;
  showSlides(slideIndex);

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("comment");
    let page = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < page.length; i++) {
      page[i].className = page[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    page[slideIndex-1].className += " active";
  }
}