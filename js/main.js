document.addEventListener("DOMContentLoaded", function() {
    let backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });
  });


  document.querySelector('.mobile-nav-toggle').addEventListener('click', function () {
    document.body.classList.toggle('mobile-nav-active');
  });