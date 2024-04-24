document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('about-video'); 

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play(); 
      } else {
        video.pause();
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, options); 
  observer.observe(video); 

  function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
  }
});
