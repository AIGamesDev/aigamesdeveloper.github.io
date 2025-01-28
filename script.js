const navbarToggler = document.getElementById("navbar-toggler");
const navbarLinks = document.getElementById("navbar-links");

navbarToggler.addEventListener("click", () => {
  navbarLinks.classList.toggle("open");
});

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const titleSection = document.querySelector('.title-section');
  
  // Function to change navbar color on scroll
  function changeNavbarColor() {
    const sectionHeight = titleSection.clientHeight;
    if (window.scrollY > sectionHeight) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Listen for the scroll event
  window.addEventListener('scroll', changeNavbarColor);
});