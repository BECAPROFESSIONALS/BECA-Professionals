// Toggle responsive menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetID = this.getAttribute('href');
    const targetElement = document.querySelector(targetID);

    if (targetElement) {
      e.preventDefault();

      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Close mobile menu after click
      navLinks.classList.remove('active');
    }
  });
});

// Highlight active section link
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

  function sendMail(form) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = `Message from ${name} via BECA Professionals`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const mailtoLink = `mailto:becaprofessionals@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    return false; // prevent default form submission
  }
