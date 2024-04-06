// Add smooth scrolling to anchor links (optional)
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = this.getAttribute('href');
    const section = document.querySelector(target);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});