document.addEventListener("DOMContentLoaded", function() {
  let backToTopButton = document.querySelector('.back-to-top');
  let heroSection = document.querySelector('#hero');
  let sidebarLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });

  function toggleMobileNav() {
    let body = document.querySelector('body');
    let mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    let sidebar = document.querySelector('.custom-sidebar');

    body.classList.toggle('mobile-nav-active');
    mobileNavToggle.classList.toggle('bi-list');
    mobileNavToggle.classList.toggle('bi-x');

    if (body.classList.contains('mobile-nav-active')) {
      sidebar.style.left = '0';
      heroSection.style.display = 'none'; // Verberg de hero sectie
    } else {
      sidebar.style.left = '-100%';
      heroSection.style.display = 'block'; // Toon de hero sectie
    }
  }

  // mobile-nav-active toe bij het laden als het scherm klein is
  if (window.innerWidth < 1200) {
    document.querySelector('body').classList.add('mobile-nav-active');
  }

  document.querySelector('.mobile-nav-toggle').addEventListener('click', function() {
    toggleMobileNav();
  });

  document.querySelectorAll('.scrollto').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      let hash = this.hash;
      let body = document.querySelector('body');

      if (body.classList.contains('mobile-nav-active')) {
        toggleMobileNav();
      }

      scrollTo(hash);
    });
  });

  function scrollTo(hash) {
    console.log("Hash:", hash); 
    if (hash !== '') {
        let target = document.querySelector(hash.replace(/ /g, '\\ '));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    }
}


  // sidebar te sluiten als er op een sectie wordt geklikt
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth < 1200) {
        toggleMobileNav(); 
        let hash = this.getAttribute('href'); 
        scrollTo(hash); // Scroll naar de gekozen sectie
      }
    });
  });

//  de sidebar te sluiten wanneer er op een paginalink wordt geklikt
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      if (document.body.classList.contains('mobile-nav-active')) {
        toggleMobileNav();
      }
    });
  });
});
